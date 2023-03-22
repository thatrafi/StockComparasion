using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Newtonsoft.Json;
using YahooFinance.Api.Models;

namespace YahooFinance.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class StockInformationController : ControllerBase
{
    private readonly ILogger<StockInformationController> _logger;

    public StockInformationController(ILogger<StockInformationController> logger)
    {
        _logger = logger;
    }

    /// <summary>
    /// [WEB] Get Stock Information by Stock Name
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<StockInformationModel>>> GetStockInformation(string symbols = "")
    {
        List<string> symbolsArr = !String.IsNullOrEmpty(symbols) ? symbols.Split(new char[] { ',' }).ToList() : new List<string>();
        List<StockInformationModel> stockInformationModels = new List<StockInformationModel>();
        try
        {
            using (var client = new HttpClient())
            {
                foreach (var symbol in symbolsArr)
                {
                    HttpResponseMessage response = await client.GetAsync($"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?interval=1d&range=1y");
                    if (response.IsSuccessStatusCode)
                    {
                        string responseString = await response.Content.ReadAsStringAsync();
                        stockInformationModels.Add(MapData(responseString));
                    }
                }
            }
            return Ok(stockInformationModels);
        }
        catch(Exception e)
        {
            return BadRequest("Error getting stock information.");
        }
    }

    private StockInformationModel MapData(string responseString)
    {
        var result = JsonConvert.DeserializeObject<YahooFinanceResponse>(responseString);
        if (result?.Chart?.Result == null) return new StockInformationModel();
        var meta = result.Chart.Result[0].Meta;
        var timestamp = result.Chart.Result[0].Timestamp;
        var quote = result.Chart.Result[0].Indicators?.quote?.FirstOrDefault();
        if (meta != null && quote != null && timestamp != null)
        {
            var currentPrice = meta.RegularMarketPrice;
            var trends = quote.close;

            return new StockInformationModel
            {
                CurrentPrice = currentPrice,
                Trends = trends,
                Timestamps = timestamp
                .Select(timestamp => DateTimeOffset.FromUnixTimeSeconds(timestamp)
                .LocalDateTime.ToString("MMM dd yy"))
                .ToList(),
                Symbol = meta.Symbol,
                ExchangeName = meta.ExchangeName
            };
        }
        else
        {
            return new StockInformationModel();
        }
    }
}

