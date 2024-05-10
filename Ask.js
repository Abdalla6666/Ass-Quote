var quotes = [
    "Be yourself; everyone else is already taken."
    ,
    "Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best."
    ,
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    ,
    "Be the change that you wish to see in the world."
    ,
    "So many books, so little time."
    ,
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    ,
    "A room without books is like a body without a soul."
];

function quote(){
    var num = Number.parseInt(Math.random()*quotes.length);
    document.getElementById("quoteOutput").innerHTML = quotes[num];
}
console.log(quotes.pop)