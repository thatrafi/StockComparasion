using System;
namespace YahooFinance.Api.Models
{
	public class StockInformationModel
	{
		public List<decimal?>? Trends { get; set; }
        public List<string>? Timestamps { get; set; }
        public decimal CurrentPrice { get; set; }
        public string ExchangeName { get; set; } = "";
        public string Symbol { get; set; } = "";
    }
}

