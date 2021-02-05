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
    img: '/assets/snippet.png',
    title: 'Promises',
    subtitle: 'An object representing the eventual completion or failure of an async operation.',
  },
  {
    img: 'https://i.ytimg.com/vi/lHue3INUPs0/maxresdefault.jpg',
    title: 'What is a promise?',
    subtitle: "In layman's terms...",
  },
  {
    img: '/assets/split-img.png',
    title: 'How does it work?',
    subtitle: 'The promise will be in a pending state until either its resolve or reject method are called',
  },
  {
    img: '/assets/search.png',
    title: 'How to spot them?',
    subtitle: 'Look for some JavaScript keywords that are specific to promises.',
  },
  {
    img: '/assets/pros-cons.png',
    title: 'Pros and cons',
    subtitle: 'A huge improvement on callbacks, but there are still caveats.',
  },
  {
    img: 'https://specials-images.forbesimg.com/imageserve/1005439086/960x0.jpg?fit=scale',
    title: 'Biggest pain',
    subtitle: 'Defining a meaningful TDD strategy.',
  },
  {
    img: 'https://www.reedpublicrelations.com/wp-content/uploads/2019/11/Reed-blog-post-image.jpg',
    title: 'Thank you',
    subtitle: 'Thank you for your attention, any questions?',
  }
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

