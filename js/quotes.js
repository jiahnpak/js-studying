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
    quote: "모든 결혼은 다른 인종과의 결혼이다",
    author: "샨탈 세이퍼스타인",
  },
  {
    quote: "건강에 대한 걱정은 그만두라. 건강이 달아날 테니.",
    author: "로버트 오벤",
  },
  {
    quote: "열정없이 사느니 차라리 죽는게 낫다.",
    author: "커트 코베인",
  },
  {
    quote: "우정이라는 기계에 잘 정제된 예의라는 기름을 바르는 것은 현명하다.",
    author: "콜레트",
  },
  {
    quote: "죄를 미워하되 죄인은 사랑하라.",
    author: "마하트마 간디",
  },
  {
    quote: "모든 것이 우리 머리 속에 있으니 머리를 잃어버리지 않는 게 좋겠다",
    author: "가브리엘 샤넬",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
