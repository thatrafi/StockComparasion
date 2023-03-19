using System.Diagnostics;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic;
using Newtonsoft.Json;
using YahooFinance.Models;

namespace YahooFinance.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public async Task<IActionResult> Index(string stocks)
    {
        if (!String.IsNullOrEmpty(stocks))
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync($"https://localhost:7107/StockInformation?symbols={stocks}");
            if(!response.IsSuccessStatusCode) { return View(new List<StockInformationModel>()); }
            string responseBody = await response.Content.ReadAsStringAsync();
            List<StockInformationModel> model = JsonConvert.DeserializeObject<List<StockInformationModel>>(responseBody);
            return View(model);
        }
        else
        {
            return View(new List<StockInformationModel>());
        }
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

