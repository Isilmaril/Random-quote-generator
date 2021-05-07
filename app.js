const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

const getNewQuote = async () =>
    {
        // an API, an API (for fetching quotes)
        var url="https://type.fit/api/quotes";

        // actually fetches the quotes or something I dunno lol
        const response = await fetch(url);
        console.log(typeof response);
        // converts the response to JSON and returns a promise
        const allQuotes = await response.json();

        // generates number between 0 and the total number of quotes, rounds down
        const indx = Math.floor(Math.random()*allQuotes.length);

        // stores the quotes in text format as well as name of author
        const quote = allQuotes[indx].text;
        const auth = allQuotes[indx].author;

        if(auth == null)
        {
            author = "Linus Torvalds (just kidding)";
        }

        text.innerHTML = quote;
        author.innerHTML = "~ " + auth;

        tweetButton.href="https://twitter.com/intent/tweet?text=" + quote + " ~ " + auth;

    }
    getNewQuote();