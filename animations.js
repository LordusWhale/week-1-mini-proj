const getQuote = () => {
  const h1 = document.getElementById("quote");
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      const randomQuote = data[Math.floor(Math.random() * data.length)];
      h1.innerText = randomQuote.text;
    });
};
/*
    Fade in animation for the form
*/
const formObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("in-view", entry.isIntersecting);
    })
}, {
    threshold: 0.5,
})
const formInput = document.querySelector("form");
formObserver.observe(formInput);

/* 
    Fade in animation for About page
*/

const aboutPageObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("grid-in-view", entry.isIntersecting);
    });
}, {
    threshold: 0.5,
})
const allGridElements = document.querySelectorAll('.grid-item');
allGridElements.forEach(item=>{
    aboutPageObserver.observe(item);
});


/* 
    Get quote on leaving view
*/

const quoteObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if (!entry.isIntersecting){
            getQuote();
        }
    })
}, {
    threshold: 1
})
const quoteElement = document.querySelector('#quote');
quoteObserver.observe(quoteElement);

getQuote();