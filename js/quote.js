const quote = document.querySelector(".js-quote");

function quotes() {
    return [
        "When you're going through hell, keep going",

        "Whatever the mind of man can conceive and believe, it can achieve.",

        "The most common way people give up their power is by thinking they don't have any.",
        
        "The mind is everything. What you think you become. ",

        "The best time to plant a tree was 20 years ago. The second best time is now.",
        
        "An unexamined life is not worth living.",
    
        "Eighty percent of success is showing up.",

        "Your time is limited, so don't waste it living someone else's life.",

        "Winning isn't everything, but wanting to win is.",

        "I am not a product of my circumstances. I am a product of my decisions.",

        "Every child is an artist.  The problem is how to remain an artist once he grows up.",

        "You can never cross the ocean until you have the courage to lose sight of the shore.",

        "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        
        "Either you run the day, or the day runs you.",

        "The two most important days in your life are the day you are born and the day you find out why.",

        "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
        
        "The best revenge is massive success.",

        "People often say that motivation doesn't last. Well, neither does bathing.  That's why we recommend it daily.",

        "Life shrinks or expands in proportion to one's courage.",

        "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",

        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",

        "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
        
        "The only person you are destined to become is the person you decide to be.",
        
        "Go confidently in the direction of your dreams.  Live the life you have imagined.",
        
        "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
        
        "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him. ",
        
        "Certain things catch your eye, but pursue only those that capture the heart.",
        
        "Believe you can and you're halfway there.",
        
        "Everything you've ever wanted is on the other side of fear."
      ];
}

function random(allQuotes) {
    const QT_LENGTH = allQuotes.length;
    return Math.floor(Math.random() * QT_LENGTH) - 1 ; 
  }
  
function getQuotes() {
    const allQuotes = quotes();
    const randomQuote = allQuotes[random(allQuotes)];
    quote.innerText = `${randomQuote}`;
}

function init(){
    getQuotes();
}

init();