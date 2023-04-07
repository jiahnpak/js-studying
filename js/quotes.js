const quotes = [
  {
    quote: "창의성은 재능이 아니라 재능을 운영하는 방식이다",
    author: "존 클리즈",
  },
  {
    quote: "당신은 어떤 일이든 할 수 있지만, 모든 걸 다 할 수는 없다",
    author: "데이비드 앨런",
  },
  {
    quote: "한 번도 입 밖에 내지 않은 말은 침묵의 꽃이다",
    author: "일본 속담",
  },
  {
    quote: "조금만 겸손하면 누구와도 마음을 합할 수 있습니다",
    author: "테클라 메를로",
  },
  {
    quote: "5. 창의성은 재능이 아니라 재능을 운영하는 방식이다",
    author: "존 클리즈",
  },
  {
    quote: "6. 당신은 어떤 일이든 할 수 있지만, 모든 걸 다 할 수는 없다",
    author: "데이비드 앨런",
  },
  {
    quote: "7. 한 번도 입 밖에 내지 않은 말은 침묵의 꽃이다",
    author: "일본 속담",
  },
  {
    quote: "8. 조금만 겸손하면 누구와도 마음을 합할 수 있습니다",
    author: "테클라 메를로",
  },
  {
    quote: "9. 한 번도 입 밖에 내지 않은 말은 침묵의 꽃이다",
    author: "일본 속담",
  },
  {
    quote: "10. 조금만 겸손하면 누구와도 마음을 합할 수 있습니다",
    author: "테클라 메를로",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
