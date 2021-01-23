import { useEffect, useRef } from "react";
import useTrait from "../hooks/useTrait";
import { words } from "../words";

function Quote() {
  const quotes = useTrait(words);
  const quote = useTrait(words[Math.floor(Math.random() * words.length)]);
  const quoteBtn = useRef(null);

  useEffect(() => {
    if (quoteBtn) {
      quoteBtn.current.classList.add("quote-btn-peak");
      setTimeout(() => {
        quoteBtn.current.classList.remove("quote-btn-peak");
      }, 2000);
    }
  }, []);

  const handleQuotes = () => {
    const newQuotes = quotes.get().filter(item => item !== quote.get());
    quotes.set(newQuotes);
    const newQuote = newQuotes[Math.floor(Math.random() * newQuotes.length)];
    quote.set(newQuote);
  };

  return (
    <span className='quote-container'>
      {quotes.get().length ? (
        <>
          <q className='quote' title={quote.get().cite} cite={quote.get().cite}>
            {quote.get().words}
          </q>
          <button
            ref={quoteBtn}
            className='quote--button'
            onClick={() => {
              handleQuotes();
            }}
          >
            new quote
          </button>
        </>
      ) : (
        <q
          className='quote'
          title='Jon Telles, Extremely Good & Professional Developer'
          cite='Jon Telles, Extremely Good & Professional Developer'
        >
          We're out of quotes 😔...feel free to{" "}
          <a href='mailto:jongtelles@gmail.com'>email me more!</a> or{" "}
          <button
            ref={quoteBtn}
            className='quote--button-reset'
            onClick={() => {
              quotes.set(words);
              quote.set(words[Math.floor(Math.random() * words.length)]);
            }}
          >
            start over
          </button>
        </q>
      )}
    </span>
  );
}

export default Quote;
