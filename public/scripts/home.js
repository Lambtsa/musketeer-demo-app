const title = document.querySelector('#title');
const subtitle = document.querySelector('#subtitle');
const image = document.querySelector('#image');
const clickPrev = document.querySelector('#clickPrev');
const clickNext = document.querySelector('#clickNext');

let currentSlide = 0;

function loadSlide(index) {
  title.textContent = slides[index].title;
  subtitle.textContent = slides[index].subtitle;
  image.setAttribute('src', slides[index].img);
  if (index >= slides.length - 1) {
    clickNext.setAttribute('disabled', 'true');
    clickPrev.removeAttribute('disabled');
  } else if (index === 0) {
    clickPrev.setAttribute('disabled', 'true');
    clickNext.removeAttribute('disabled');
  } else {
    clickPrev.removeAttribute('disabled');
    clickNext.removeAttribute('disabled');
  }
}

const slides = [
  {
    img: 'https://image1.masterfile.com/getImage/NzAwLTAwMDQ1MjQxZW4uMDAwMDAwMDA=AHq-9c/700-00045241en_Masterfile.jpg',
    title: 'Express routing',
    subtitle: 'How to use routing in an ExpressJS server?',
  },
  {
    img: 'assets/simpleExpress.png',
    title: 'Basic Routing',
    subtitle: "Building an API in ExpressJS from scratch.",
  },
  {
    img: 'https://i.pinimg.com/originals/35/fa/ec/35faec60b66c1d29bcb4895db681722e.jpg',
    title: 'The project grows...',
    subtitle: 'As the project grows, more and more routes increase complexity inside app.js.',
  },
  {
    img: 'assets/traffic.png',
    title: 'Structured routing',
    subtitle: 'Starting to structure the route by grouping together similar paths',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/1200px-MVC-Process.svg.png',
    title: 'Going forward',
    subtitle: 'MVC - Model, Views, Controllers',
  },
  {
    img: 'https://i.etsystatic.com/25282674/r/il/dcc661/2549068358/il_1588xN.2549068358_i5i7.jpg',
    title: 'Mustacheteers E-commerce',
    subtitle: 'Everything you need with stashes',
  },
]

loadSlide(currentSlide);

clickNext.addEventListener('click', (event) => {
  event.preventDefault()
  if (currentSlide >= slides.length - 1) {
    return
  }
  currentSlide += 1;
  loadSlide(currentSlide)
});

clickPrev.addEventListener('click', (event) => {
  event.preventDefault();
  if (currentSlide <= 0) {
    return
  }
  currentSlide -= 1;
  loadSlide(currentSlide)
});

