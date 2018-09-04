function getProjects() {
  const projects = [
    {
      "name": "Memory Card Game",
      "desc": "CSS Grid, JavaScript ES6, Babel, Polyfill",
      "url": "https://github.com/mairamartinsk/memory-game",
      "image": "./img/project-memory-game.jpg"
    },
    {
      "name": "Portfolio Site",
      "desc": "CSS Grid, CSS animations and transitions",
      "url": "https://github.com/mairamartinsk/mairamartinsk.github.io",
      "image": "./img/project-portfolio.jpg"
    },
    {
      "name": "MyPet App (Chingu V4)",
      "desc": "Chingu Cohorts Voyage-4 project. React, Semantic UI, CSS Grid, Node.js, MongoDB",
      "url": "https://github.com/chingu-voyage4/Geckos-Team-26",
      "image": "./img/project-mypet-react.jpg"
    },
    {
      "name": "YelpCamp",
      "desc": "Bootstrap 3, Node.js, MongoDB, Passport.js",
      "url": "https://github.com/mairamartinsk/yelp-camp",
      "image": "./img/project-yelp-camp.jpg"
    },
    {
      "name": "Node.js Blog app",
      "desc": "Semantic UI, Node.js, Express, MongoDB",
      "url": "https://github.com/mairamartinsk/webdev-bootcamp/tree/master/blog-app",
      "image": "./img/project-node-blog.jpg"
    },
    {
      "name": "Pixel Art Maker",
      "desc": "HTML, CSS, Sass/SCSS, jQuery",
      "url": "https://github.com/mairamartinsk/pixel-art-maker",
      "image": "./img/project-pixel-art.jpg"
    },
    {
      "name": "Wikipedia Viewer",
      "desc": "HTML, CSS, Ajax, Wikipedia API",
      "url": "https://github.com/mairamartinsk/freecodecamp/tree/master/wiki-viewer",
      "image": "./img/project-wikipedia-viewer.jpg"
    },
    {
      "name": "Random Quote Machine",
      "desc": "Bootstrap 3, jQuery, Forismatic API, Twitter Web Intent",
      "url": "https://github.com/mairamartinsk/freecodecamp/tree/master/quote-machine",
      "image": "./img/project-quote-machine.jpg"
    },
    {
      "name": "The Weather App",
      "desc": "jQuery, Ajax, FCC Weather API",
      "url": "https://github.com/mairamartinsk/freecodecamp/tree/master/weather-app",
      "image": "./img/project-weather-app.jpg"
    }
  ];

  const ul = document.querySelector('.grid');
  const fragment = document.createDocumentFragment();

  projects.forEach(function (project) {
    const li = document.createElement('li');
    li.className = 'grid__item';

    li.innerHTML = `
      <a href=${project.url} class="project__link" target="_blank">
        <img src=${project.image} class="project__image" alt="Screenshot of ${project.name}">
        <div class="project__overlay">
          <h3 class="project__title">${project.name}</h3>
          <p class="project__desc">${project.desc}</p>
        </div>
      </a>
    `;

    fragment.appendChild(li);
  })

  ul.appendChild(fragment);
}

getProjects();