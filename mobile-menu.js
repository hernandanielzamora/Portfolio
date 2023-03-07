const getMenuBtn = document.getElementById('ham-menu');
const getNavBar = document.querySelector('.nav-sidebar');
const getNavLogg = document.querySelector('.logo');

getMenuBtn.addEventListener('click', () => {
  getMenuBtn.classList.toggle('active');
  getNavBar.classList.toggle('active');
  getNavLogg.classList.toggle('active');
});

document.querySelectorAll('.nave-link').forEach((n) => n.addEventListener('click', () => {
  getMenuBtn.classList.remove('active');
  getNavBar.classList.remove('active');
  getNavLogg.classList.remove('active');
}));

/* Rendering Cards */
const firstCardContainer = document.getElementById('card-container-one');
const secondCardContainer = document.getElementById('card-container-two');

const firstCards = [
  {
    id: 1,
    title: 'Professional Art Printing Data',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry`s standard.',
    technologies: {
      tech1: 'html',
      tech2: 'Boostrap',
      tech3: 'Ruby',
    },
  },
];

const cards = [
  {
    id: 2,
    title: 'Professional Art Printing Data',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry`s standard.',
    titleDesktop: 'Data Dashboard Healthcare',
    textDesktop: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
    technologies: {
      tech1: 'html',
      tech2: 'Boostrap',
      tech3: 'Ruby',
    },
  },
  {
    id: 3,
    title: 'Professional Art Printing Data',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry`s standard.',
    titleDesktop: 'Website Protfolio',
    textDesktop: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
    technologies: {
      tech1: 'html',
      tech2: 'Boostrap',
      tech3: 'Ruby',
    },
  },
];

const renderFirstCards = (firstCards, containerName) => {
  firstCards.forEach((item) => {
    const card = document.createElement('div');
    card.classList = `card-container card-${item.id}`;
    card.innerHTML = `<div class="card-content card-${item.id}-content">
                        <h3 class="project-title">${item.title}</h3>
                        <p class="project-text">${item.text}</p>
                        <div>
                          <ul class="project-btn-container">
                            <li class="html-list"><button class="project-feature-btn" disabled="disabled"
                                type="button">${item.technologies.tech1}</button>
                            </li>
                            <li><button class="project-feature-btn boostrap boostrap-btn" disabled="disabled"
                                type="button">${item.technologies.tech2}</button>
                            </li>
                            <li project-ruby><button class="project-feature-btn project-ruby" disabled="disabled"
                                type="button">${item.technologies.tech3}</button></li>
                          </ul>
                        </div>
                      </div>
                      <a href="#" rel="noopener noreferrer" class="first-project-btn"><button
                          class="project-final-btn first-project-btn" type="button">See
                          Project</button></a>`;
    containerName.appendChild(card);
  });
};

const renderRestOfFirstCards = (cards, containerName) => {
  cards.forEach((item) => {
    const card = document.createElement('div');
    card.classList = `card-container card-${item.id}`;
    card.innerHTML = `<div class="card-content card-${item.id}-content">
                        <div class="card-content-mobile">
                          <h3 class="project-title">${item.title}</h3>
                          <p class="project-text">${item.text}</p>
                        </div>
                        <div class="card-content-desktop">
                          <h3 class="project-title">${item.titleDesktop}</h3>
                          <p class="project-text">${item.textDesktop}</p>
                        </div>
                        <div>
                          <ul class="project-btn-container">
                            <li class="html-list"><button class="project-feature-btn" disabled="disabled"
                                type="button">${item.technologies.tech1}</button>
                            </li>
                            <li><button class="project-feature-btn boostrap boostrap-btn" disabled="disabled"
                                type="button">${item.technologies.tech2}</button>
                            </li>
                            <li project-ruby><button class="project-feature-btn project-ruby" disabled="disabled"
                                type="button">${item.technologies.tech3}</button></li>
                          </ul>
                        </div>
                      </div>
                      <a href="#" rel="noopener noreferrer" class="first-project-btn"><button
                          class="project-final-btn" type="button">See
                          Project</button></a>`;
    containerName.appendChild(card);
  });
};

const renderFirstCardsAgain = (firstCards, containerName) => {
  firstCards.forEach((item) => {
    const card = document.createElement('div');
    card.classList = `card-container second-row-card-${item.id}`;
    card.innerHTML = `<div class="card-content card-${item.id}-content">
                        <h3 class="project-title">${item.title}</h3>
                        <p class="project-text">${item.text}</p>
                        <div>
                          <ul class="project-btn-container">
                            <li class="html-list"><button class="project-feature-btn" disabled="disabled"
                                type="button">${item.technologies.tech1}</button>
                            </li>
                            <li><button class="project-feature-btn boostrap boostrap-btn" disabled="disabled"
                                type="button">${item.technologies.tech2}</button>
                            </li>
                            <li project-ruby><button class="project-feature-btn project-ruby" disabled="disabled"
                                type="button">${item.technologies.tech3}</button></li>
                          </ul>
                        </div>
                      </div>
                      <a href="#" rel="noopener noreferrer" class="first-project-btn"><button
                          class="project-final-btn" type="button">See
                          Project</button></a>`;
    containerName.appendChild(card);
  });
};

renderFirstCards(firstCards, firstCardContainer);
renderRestOfFirstCards(cards, firstCardContainer);
renderFirstCardsAgain(firstCards, secondCardContainer);
renderRestOfFirstCards(cards, secondCardContainer);

/* PopUp Windows */