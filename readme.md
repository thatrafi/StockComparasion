# YahooFinance Project

The YahooFinance project is a web-based application that provides stock information by fetching data from the Yahoo Finance API. The application shows stock trend price comparison and helps users make informed decisions about buying and selling stocks.

The project has two main components: YahooFinance as a web client and YahooFinance.Api as an API. The YahooFinance web client is responsible for displaying the user interface and making HTTP requests to the YahooFinance API. The YahooFinance API is responsible for fetching and returning stock data from the Yahoo Finance API.

## Requirements
To run the YahooFinance project, you need to have the following software installed on your system:

- Visual Studio (version 2019 or later)
- .NET Core SDK (version 3.1 or later)

## Project Structure

The YahooFinance project has two components:

1. **YahooFinance**: This is the web client component of the project. It is responsible for rendering the user interface and handling user interactions. The client is built using ASP.NET Core MVC and C#.

2. **YahooFinance.Api**: This is the API component of the project. It is responsible for fetching data from the Yahoo Finance API and returning it to the client. The API is built using ASP.NET Core Web API and C#.

Both projects need to be run simultaneously for the application to work correctly.

## How to Run the Project
To run the YahooFinance project, follow these steps:

1. Clone the project repository to your local machine.
2. Open the project in Visual Studio.
3. Set both the YahooFinance and YahooFinance.Api projects as startup projects. To do this, right-click on the solution in the Solution Explorer and select "Set StartUp Projects". Then select "Multiple startup projects" and set the Action for both projects to "Start".
4. Press F5 or click on the "Start" button to build and run the projects.
5. The YahooFinance web client should open in your default web browser.

## Running the Projects on Visual Studio Mac

To run the YahooFinance project on Visual Studio Mac, you will need to run both the client and API projects simultaneously. Here's how you can do it:

1. Open the solution file (YahooFinance.sln) in Visual Studio for Mac.

2. Right-click on the solution in the Solution Explorer and select "Set Startup Projects".

3. In the Startup Projects dialog, select "Multiple startup projects" and set the Action for both the YahooFinance and YahooFinance.Api projects to "Start".

4. Click "OK" to save the changes.

5. Press the "Start" button in the toolbar to run both projects.

6. The YahooFinance project will open in your default web browser. You can now use the application to view stock information.

## Usage

Once the application is running, you will be provided with three dropdown of a stock symbol that you can choose. You can view the stock trend comparasion by clicking the "Show Comparasion" Button

## Conclusion
The YahooFinance project is a simple and straightforward application that provides stock information to users. By following the steps outlined in this README, you should be able to build and run the project without any issues. If you have any questions or encounter any problems, please contact me on thatrafibusiness@gmail.com
