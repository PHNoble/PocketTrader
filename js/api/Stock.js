let axios = require("axios");

let API_KEY = "AELBX7MH0KS81Q95";

//BATCH_STOCK_QUOTES
//SECTOR
//INTRADAY

export const getData = req => {
  const funct = req.function;
  const symbol = req.symbol;
  const interval = req.interval;

  if (!funct) {
    return {};
  } else {
    if (funct === "BATCH_STOCK_QUOTES") {
      if (!symbol) {
        return {};
      }
      axios({
        method: "get",
        url:
          "https://www.alphavantage.co/query?function=${funct}&symbol=${symbol}&outputsize=full&apikey=${API_KEY}"
      })
        .then(response => {
          return response;
        })
        .catch(err => {
          return {};
        });
    } else if (funct === "SECTOR") {
      axios({
        method: "get",
        url:
          "https://www.alphavantage.co/query?function=${funct}&apikey=${API_KEY}"
      })
        .then(response => {
          return response;
        })
        .catch(err => {
          return {};
        });
    } else {
      axios({
        method: "get",
        url:
          "https://www.alphavantage.co/query?function=${funct}&symbol=${symbol}&outputsize=full&interval=${interval}&apikey=${API_KEY}"
      })
        .then(response => {
          return response;
        })
        .catch(err => {
          return {};
        });
    }
  }
};
