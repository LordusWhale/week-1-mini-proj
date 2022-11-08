const getQuote = () => {
  const h1 = document.getElementById("quote");
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      const randomQuote = data[Math.floor(Math.random() * data.length)];
      h1.innerText = randomQuote.text;
    });
};

getQuote();