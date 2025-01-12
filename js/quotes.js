const quotes = [
  {
    quote:
      '"인생은 본래 잠시 모였다 흩어지는 부평초와 같은 것이니, 곡이 끝나면 사람들도 흩어지고 구름 걷히고 바람 맑아지는 것. 그것도 꽤 좋지 않은가?"',
    author: " - 조활 (趙活)",
  },
  {
    quote:
      '"이 미산이 제일 높은 산은 아니지만, 지금 소생과 대협이 만났으니, 이곳이야말로 무림의 최고봉이로다."',
    author: "- 서생(瑞笙)",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
