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
    grid: 1,
    id: 2,
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
    grid: 2,
    id: 3,
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
    grid: 3,
    id: 4,
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

const secondCards = [
  {
    grid: 2,
    id: 6,
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
    grid: 3,
    id: 7,
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
    card.classList = `card-container card-${item.grid}`;
    card.innerHTML = `<div class="card-content card-${item.grid}-content">
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
                      <button class="project-final-btn first-project-btn"  data-modal-target='#popup${item.id}' type="button">See
                          Project</button>`;
    containerName.appendChild(card);
  });
};

const renderRestOfFirstCards = (cards, containerName) => {
  cards.forEach((item) => {
    const card = document.createElement('div');
    card.classList = `card-container card-${item.grid}`;
    card.innerHTML = `<div class="card-content card-${item.grid}-content">
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
                      <button class="project-final-btn" data-modal-target="#popup${item.id}" type="button">See
                          Project</button>`;
    containerName.appendChild(card);
  });
};

const renderFirstCardsAgain = (firstCards, containerName) => {
  firstCards.forEach((item) => {
    const card = document.createElement('div');
    card.classList = `card-container second-row-card-${item.grid}`;
    card.innerHTML = `<div class="card-content card-${item.grid}-content">
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
                      <button class="project-final-btn" data-modal-target="#popup5" type="button">See
                          Project</button></a>`;
    containerName.appendChild(card);
  });
};

renderFirstCards(firstCards, firstCardContainer);
renderRestOfFirstCards(cards, firstCardContainer);
renderFirstCardsAgain(firstCards, secondCardContainer);
renderRestOfFirstCards(secondCards, secondCardContainer);

/* PopUp Cards */

/* name, description, featured image, technologies, link to live version, link to source */

const modalCards = [
  {
    id: 1,
    title: 'Multi Post Stories',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    img: 'media/popup-image.png',
    features: {
      tech1: 'html',
      tech2: 'boostrap',
      tech3: 'Ruby on rails',
    },
    linkLiveVersion: 'https://projecttrial.netlify.app/',
    linkSource: 'https://github.com/hernandanielzamora/Portfolio',
  },
  {
    id: 2,
    title: 'Keeping track of hundreds  of components website A',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    img: 'media/popup-image.png',
    features: {
      tech1: 'html',
      tech2: 'boostrap',
      tech3: 'Ruby on rails',
    },
    linkLiveVersion: 'https://projecttrial.netlify.app/',
    linkSource: 'https://github.com/hernandanielzamora/Portfolio',
  },
  {
    id: 3,
    title: 'Keeping track of hundreds  of components website B',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    img: 'media/popup-image.png',
    features: {
      tech1: 'html',
      tech2: 'boostrap',
      tech3: 'Ruby on rails',
    },
    linkLiveVersion: 'https://projecttrial.netlify.app/',
    linkSource: 'https://github.com/hernandanielzamora/Portfolio',
  },
  {
    id: 4,
    title: 'Keeping track of hundreds  of components website C',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    img: 'media/popup-image.png',
    features: {
      tech1: 'html',
      tech2: 'boostrap',
      tech3: 'Ruby on rails',
    },
    linkLiveVersion: 'https://projecttrial.netlify.app/',
    linkSource: 'https://github.com/hernandanielzamora/Portfolio',
  },
  {
    id: 5,
    title: 'Keeping track of hundreds  of components website D',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    img: 'media/popup-image.png',
    features: {
      tech1: 'html',
      tech2: 'boostrap',
      tech3: 'Ruby on rails',
    },
    linkLiveVersion: 'https://projecttrial.netlify.app/',
    linkSource: 'https://github.com/hernandanielzamora/Portfolio',
  },
  {
    id: 6,
    title: 'Keeping track of hundreds  of components website E',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    img: 'media/popup-image.png',
    features: {
      tech1: 'html',
      tech2: 'boostrap',
      tech3: 'Ruby on rails',
    },
    linkLiveVersion: 'https://projecttrial.netlify.app/',
    linkSource: 'https://github.com/hernandanielzamora/Portfolio',
  },
  {
    id: 7,
    title: 'Keeping track of hundreds  of components website F',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    img: 'media/popup-image.png',
    features: {
      tech1: 'html',
      tech2: 'boostrap',
      tech3: 'Ruby on rails',
    },
    linkLiveVersion: 'https://projecttrial.netlify.app/',
    linkSource: 'https://github.com/hernandanielzamora/Portfolio',
  },
];

/* PopUp Windows */
const popupContainer = document.getElementById('popup-container');

const renderPopup = (modalCards, popupContainer) => {
  modalCards.forEach((e) => {
    const modalCard = document.createElement('div');
    modalCard.classList = 'popup';
    modalCard.id = `popup${e.id}`;
    modalCard.innerHTML = `<div class="popup-wrap-content">
                            <div class="popup-header">
                              <h2 class="popup-title">${e.title}</h2><button class="popup-close-btn"
                                data-close-button>&times;</button>
                            </div>
                            <div>
                              <ul class="popup-btn-container">
                                <li><button class="feature-btn popup-feature" type="button">${e.features.tech1}</button></li>
                                <li><button class="feature-btn boostrap popup-feature" type="button">${e.features.tech2}</button></li>
                                <li><button class="feature-btn feature-ruby-popup popup-feature" type="button">${e.features.tech3}</button></li>
                              </ul>
                            </div>
                            <div class="popup-content">
                              <img src="${e.img}" alt="">
                              <p class="popup-text">${e.text}</p>
                            </div>
                            <div class="popup-project-btn-container">
                              <a href="${e.linkLiveVersion}"><button class="project-btn-popup">See Live <img src="media/icon-btn-popup.png"
                                    alt="Icon See Live"></button></a>
                              <a href="${e.linkSource}"><button class="project-btn-popup">See Source <img src="media/github-popup-icon.png"
                                    alt="Github Icon"></button></a>
                            </div>
                          </div>`;

    popupContainer.appendChild(modalCard);
  });
};

renderPopup(modalCards, popupContainer);

const closePopupButtons = document.querySelectorAll('[data-close-button]');
const openPopupButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');

/* Open Popups Function */
const openPopup = (modal) => {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};

/* Close Popups Function */
const closePopup = (modal) => {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

/* Opening Popups */
openPopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.modalTarget);
    openPopup(popup);
  });
});

/* Closing Popups */
closePopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup');
    closePopup(popup);
  });
});

/* Closing the popup when clicking outside */

overlay.addEventListener('click', () => {
  const popups = document.querySelectorAll('.popup.active');
  popups.forEach((modal) => {
    closePopup(modal);
  });
});

/* Validating Form */

const checkLowerCase = (str) => {
  const check = str.toString().toLowerCase();
  if (str === check) {
    return true;
  }
  return false;
};

/* Validate Form */
const validateForm = (e) => {
  e.preventDefault();
  const mail = document.getElementById('email-input').value;
  const form = document.getElementById('contact-form');
  const checkMailCase = checkLowerCase(mail);
  const formInputs = {
    name: document.getElementById('name-input'),
    mail,
    text: document.getElementById('text-input'),
  };
  if (checkMailCase) {
    form.action = 'https://formspree.io/f/xdovglwp';
    form.submit();
    localStorage.setItem('formInput', JSON.stringify(formInputs));
  } else {
    const errorHandler = document.getElementById('error-msg');
    errorHandler.innerHTML = 'Please check your email. The content of the email field has to be in lower case.';
  }
};
const form = document.getElementById('contact-form');
form.addEventListener('submit', validateForm);

/* Local Storage */

document.addEventListener('DOMContentLoaded', () => {
  /* Validate Mail */
  form.addEventListener('submit', validateForm);

  const formInput = JSON.parse(localStorage.getItem('formInput'));
  const formFromStorage = {
    name: '',
    mail: '',
    text: '',
  };
  const name = document.getElementById('name-input');
  const mail = document.getElementById('email-input');
  const text = document.getElementById('text-input');

  name.addEventListener('input', () => {
    if (formInput) {
      formInput.name = name.value;
      localStorage.setItem('formInput', JSON.stringify(formInput));
    } else {
      formFromStorage.name = name.value;
      localStorage.setItem('formInput', JSON.stringify(formFromStorage));
    }
  });

  mail.addEventListener('input', () => {
    if (formInput) {
      formInput.mail = mail.value;
      localStorage.setItem('formInput', JSON.stringify(formInput));
    } else {
      formFromStorage.mail = mail.value;
      localStorage.setItem('formInput', JSON.stringify(formFromStorage));
    }
  });

  text.addEventListener('input', () => {
    if (formInput) {
      formInput.text = text.value;
      localStorage.setItem('formInput', JSON.stringify(formInput));
    } else {
      formFromStorage.text = text.value;
      localStorage.setItem('formInput', JSON.stringify(formFromStorage));
    }
  });

  if (formInput) {
    document.getElementById('name-input').value = formInput.name;
    document.getElementById('email-input').value = formInput.mail;
    document.getElementById('text-input').value = formInput.text;
  }

  if (localStorage.getItem(formInput)) {
    document.getElementById('name-input').value = formInput.name;
    document.getElementById('email-input').value = formInput.mail;
    document.getElementById('text-input').value = formInput.text;
  }
});