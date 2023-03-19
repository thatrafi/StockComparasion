using System;
namespace YahooFinance.Api.Models
{
    public class YahooFinanceResponse
    {
        public ChartResponse? Chart { get; set; }
    }

    public class ChartResponse
    {
        public List<ChartResult>? Result { get; set; }
        public string? Errors { get; set; }
    }

    public class ChartResult
    {
        public ChartMeta? Meta { get; set; }
        public ChartIndicator? Indicators { get; set; }
        public List<long>? Timestamp { get; set; }
    }

    public class ChartMeta
    {
        public decimal RegularMarketPrice { get; set; }
        public string ExchangeName { get; set; } = "";
        public string Symbol { get; set; } = "";
    }

    public class ChartIndicator
    {
        public List<Quote>? quote { get; set; }
    }

    public class Quote
    {
        public List<decimal?>? close { get; set; }
    }
}

