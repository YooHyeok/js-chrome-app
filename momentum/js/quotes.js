const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")


const quotes = [
  {
  message: "Life has no limitations, except the ones you make.",
  author: "Les Brown",
  },
  {
  message: "Life is a lively process of becoming.",
  author: "Gen. Douglas MacArthur",
  },
  {
  message:  "Life is what happens while you are busy making other plans.",
  author: "John Lennon",
  },
  {
  message: "All great changes are preceded by chaos.",
  author: "Deepak Chopra",
  },
  {
  message: "Change alone is eternal, perpetual, immortal.",
  author: "Arthur Shopenhauer",
  },
  {
  message: "By changing nothing, nothing changes.",
  author: "Tony Robbins",
  },
  {
  message: "Change is inevitable. Growth is optional.",
  author: "John C. Maxwell",
  },
  {
  message: "Change your thinking, change your life.",
  author: "Ernest Holmes",
  },
  {
  message: "Failure is not fatal, but failure to change might be.",
  author: "John Wooden",
  },
  {
  message: "Nothing is forever except change.",
  author: "Buddha",
  },
  /* 11개 시작 */
  {
  message: 'I never dreamed about success, I worked for it.',
  author: 'Estee Lauder'
  },
  {
  message: 'Do not try to be original, just try to be good.',
  author: 'Paul Rand'
  },
  {
  message: 'Do not be afraid to give up the good to go for the great.',
  author: 'John D. Rockefeller'
  },
  {
  message: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
  author: 'Martin Luther King Jr.'
  },
  {
  message: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
  author: 'Thomas Edison'
  },
  {
  message: 'The fastest way to change yourself is to hang out with people who are already the way you want to be.',
  author: 'REid Hoffman'
  },
  {
  message: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations.',
  author: 'Tim O Reilly'
  },
  {
  message: 'Some people dream of success, while other people get up every morning and make it happen.',
  author: 'Wayne Huizenga'
  },
  {
  message: 'The only thing worse than starting something and falling.. is not starting something.',
  author: 'SEth Godin'
  },
  {
  message: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
  author: 'Jim Rohn'
  },
];

/**
 * Math.random() : 0부터 1까지의 랜덤한 소수
 * 0부터 19까지 데이터 를 구하기 위해서는 * 20을 해준다 
 * 1미만의 소수이기 때문에 가장 큰 수가 19가 된다.
 * Math.floor를 통해 정수만 반환한다.
 * floor() : 내림 한다.
 * round() : 반올림한다. 1.4까지는 1 / 1.5부터
 * ceil() : 1.0을 제외한 모든 소수를 올림한다. 1.1 ~ 19 = 2
 */
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
console.log(author)
author.innerText = todaysQuote.author
quote.innerText = todaysQuote.message