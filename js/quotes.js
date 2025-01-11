const quotes = [
  {
    quote: "Hello, Gigachad",
    author: "- Flamingo",
  },
  {
    quote: "Hello, Flamingo",
    author: "- Gigachad",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
