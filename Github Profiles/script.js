'use strict';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
const APIURL = 'https://api.github.com/users/';

function createUserCard(user) {
  const userBio = user.bio ? `<p>${user.bio}</p>` : ''
  const cardHTML = `
  <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="photo" class="avatar">
      </div>
      <div class="user-info">
        <h2>${user.login}</h2>
        <p>${userBio}</p>

        <ul>
          <li><strong>${user.followers}</strong>Followers</li>
          <li><strong>${user.following}</strong> Following</li>
          <li><strong>${user.public_repos}</strong> Repos</li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `

  main.innerHTML = cardHTML;
}

async function getUser (username){
  try {
  const { data } = await axios.get(APIURL + username);
  createUserCard(data);
  getRepos(username)
  } catch (err) {
    if(err.response.status == 404) {
      createErrorCard('No user found!')
    }
  }
}

async function getRepos(username) {
    const { data } = await axios (APIURL + username + '/repos?sort=created');
    addReposToCard(data);
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos.slice(0,5).forEach(repo => {
    const repoLink = document.createElement('a');
    repoLink.classList.add('repo');
    repoLink.href = repo.html_url;
    repoLink.target = '_blank';
    repoLink.innerText = repo.name;

    reposEl.appendChild(repoLink)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = search.value;
  if(username) {
    getUser(username)

    search.value = '';
  }
})

function createErrorCard(msg) {
  const cardHTML = `
    <div class='card'>
      <h1>${msg}</h1>
    </div>
  `
  main.innerHTML = cardHTML;
}