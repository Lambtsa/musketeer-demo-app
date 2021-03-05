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
    img: 'https://media.istockphoto.com/photos/working-at-the-road-construction-picture-id501962185?k=6&m=501962185&s=612x612&w=0&h=EyYd8WNoESzVZ8Lp-c486wXI3A9gTMBeK3yxLED4b3Q=',
    title: 'React Context and State',
    subtitle: 'Explaining context and state for a react application.',
  },
  {
    img: 'assets/prop_drilling.png',
    title: 'Imagine…',
    subtitle: "Imagine the following scenario...",
  },
  {
    img: 'assets/context.png',
    title: 'React Context',
    subtitle: 'What is React Context?',
  },
  {
    img: 'assets/usecases.png',
    title: 'When should you use it?',
    subtitle: 'What types of data are or situations are good for context? ',
  },
  {
    img: 'assets/composition.png',
    title: 'Composition',
    subtitle: 'Sometimes Context is not necessary.',
  },
  {
    img: 'https://redux.js.org/img/redux-logo-landscape.png',
    title: 'Alternative approaches',
    subtitle: 'What are the alternative approaches to Context?',
  },
  {
    img: 'assets/moustache.svg',
    title: 'Our App',
    subtitle: 'Demonstration of context in context 🤪.',
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

