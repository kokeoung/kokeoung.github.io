const quotes = [
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    translate: "컴퓨터가 이해할 수 있는 코드는 아무나 쓸 수 있다. 좋은 프로그래머는 사람이 이해할 수 있는 코드를 쓴다.",
    author: "Martin Fowler"
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    translate: "프로그램은 사람이 읽기 위해 작성되어야 하며, 기계가 실행하는 것은 부수적인 일이다.",
    author: "Harold Abelson"
  },
  {
    quote: "Talk is cheap. Show me the code.",
    translate: "말은 쉽다. 코드를 보여줘라.",
    author: "Linus Torvalds"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    translate: "먼저 문제를 해결하라. 그 다음에 코드를 작성하라.",
    author: "John Johnson"
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    translate: "코드는 유머와 같다. 설명해야 한다면 그 코드는 나쁜 코드다.",
    author: "Cory House"
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    translate: "단순함이 바로 효율성의 핵심이다.",
    author: "Austin Freeman"
  },
  {
    quote: "Walking on water and developing software from a specification are easy if both are frozen.",
    translate: "물이 얼어 있다면 걷는 것도 쉽고, 명세서가 확정되어 있다면 소프트웨어 개발도 쉽다.",
    author: "Edward V. Berard"
  },
  {
    quote: "Good code is its own best documentation.",
    translate: "좋은 코드는 그 자체로 최고의 문서다.",
    author: "Steve McConnell"
  },
  {
    quote: "Deleted code is debugged code.",
    translate: "삭제된 코드는 디버그된 코드다.",
    author: "Jeff Sickel"
  },
  {
    quote: "Before software can be reusable it first has to be usable.",
    translate: "소프트웨어가 재사용 가능하려면 먼저 사용 가능해야 한다.",
    author: "Ralph Johnson"
  }
];

const quote = document.querySelector("#quote span:first-child");
const translate = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
translate.innerText = todaysQuote.translate;
author.innerText = todaysQuote.translate;