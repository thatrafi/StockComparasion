using System;
namespace YahooFinance.Models
{
	public class StockInformationModel
	{
        public List<decimal?>? Trends { get; set; }
        public List<string>? Timestamps { get; set; }
        public decimal CurrentPrice { get; set; }
        public string ExchangeName { get; set; } = "";
        public string Symbol { get; set; } = "";
        public string TimeStampString
        {
            get
            {
                return Timestamps != null ? String.Join(", ", Timestamps) : "";
            }
        }
        public string TrendsString
        {
            get
            {
                return Trends != null ? String.Join("/ ", Trends) : "";
            }
        }
    }
}

