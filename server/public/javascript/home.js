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
    img: 'https://www.fipp.com/wp-content/uploads/2020/03/challenges.png',
    title: 'Challenges',
    subtitle: 'What has been hardest so far?',

  },
  {
    img: 'https://partnersinexcellenceblog.com/wp-content/uploads/2019/02/complicated_shutterstock_218803594-2.jpg',
    title: 'Challenge #1',
    subtitle: 'Understanding complex projects and file structures',

  },
  {
    img: 'https://youthtoday.org/wp-content/uploads/sites/13/2018/05/OPED-Banana-Oil-shutterstock_764775514.jpg',
    title: 'Challenge #2',
    subtitle: 'Finding our sweet spot as a group seeing as individually we are at different stages of our journeys.',
  },
  {
    img: 'https://misbakhudinmunir.files.wordpress.com/2011/10/headerapproach.jpg',
    title: 'Challenge #3',
    subtitle: 'Transitioning from learning and working alone to functioning as a mob.',
  },
  {
    img: 'https://st2.depositphotos.com/4071863/5865/v/600/depositphotos_58655033-stock-illustration-opinions-ideas.jpg',
    title: 'Challenge #4',
    subtitle: 'Agreeing on a group strategy and trusting each other.',
  },
  {
    img: 'https://richtopia.com/wp-content/uploads/2016/08/time-management-skills-and-techniques.jpg',
    title: 'Challenge #5',
    subtitle: 'Creating a roadmap and fine tuning our estimations.',
  },
  {
    img: 'https://image.freepik.com/free-vector/time-management-concept-landing-page_52683-19515.jpg',
    title: 'Challenge #6',
    subtitle: 'Getting into the flow of using a mob timer',
  },
  {
    img: 'https://www.brandquarterly.com/wp-content/uploads/2017/11/Strong-Brands-Engage-Employees-By-Creating-Great-Experiences-For-Them-Q.jpg',
    title: 'Fun times',
    subtitle: 'What has been the most fun so far?',
  },
  {
    img: 'https://i2.wp.com/contentadvisory.net/wp-content/uploads/2019/02/Are-You-Creating-or-Constructing-Robert-Rose-The-Content-Advisory.jpg',
    title: 'Fun times #1',
    subtitle: 'Creating a fullstack JavaScript app from scratch.',
  },
  {
    img: 'https://cdn.searchenginejournal.com/wp-content/uploads/2018/08/Why-Replication-Is-Critical-for-Web-Experiments-1520x800.png',
    title: 'Fun times #2',
    subtitle: 'Adopting TDD, which has given us a new angle to look at code.',
  },
  {
    img: 'https://i.imgur.com/KKFV8SL.jpg',
    title: 'Fun times #3',
    subtitle: 'Becoming more fluent in discussing code.',
  },
  {
    img: 'https://dynamicbusiness.com.au/wp-content/uploads/2015/09/Hurdles.jpg',
    title: 'Fun times #4',
    subtitle: 'Being stimulated with new tasks, labs and katas daily.',
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

