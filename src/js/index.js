import "../scss/main.scss";

console.log("ss 🚀");

fetch("https://api.github.com/users/karolwasemann/repos")
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".projects-grid--js");
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;

      const template = ` <article class="project">
      <div class="project__widnow">
        <span class="project__dot"></span>
        <span class="project__dot"></span>
        <span class="project__dot"></span>
      </div>
      <div class="project__content">
        <img
          class="project__gh-logo"
          src="img/gh-logo.svg"
          alt="logo github"
        />
        <h3 class="project__title project__grid">
          <span class="project__label">project:</span>
          <span class="project__label--color">${name}</span>
        </h3>
        <p class="project__grid">
          <span class="project__label">description:</span
          ><span>${description}</span>
        </p>
        <p class="project__grid project__grid--margin">
          <span class="project__label">demo:</span
          ><span
            >&lt;<a
              href="${homepage}"
              title="${name}  - demo"
              class="project__link"
              >see hear</a
            >
            &gt;</span
          >
        </p>
        <p class="project__grid project__grid--last">
          <span class="project__label">github:</span
          ><span
            >&lt;<a
              href="${html_url}"
              title="${name} - demo"
              class="project__link"
              >sourc mode</a
            >
            &gt;</span
          >
        </p>
      </div>
    </article>`;
      if (description) {
        container.innerHTML += template;
      }
    }
  })
  .catch((e) => console.log(e));
