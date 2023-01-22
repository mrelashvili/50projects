'use strict';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
const APIURL = 'https://api.github.com/users/';

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="photo" class="avatar">
      </div>
      <div class="user-info">
        <h2>${user.login}</h2>
        <p>${user.bio}</p>

        <ul>
          <li><strong>${user.followers}</strong>Followers</li>
          <li><strong>${user.following}</strong> Following</li>
          <li><strong>${user.public_repos}</strong> Repos</li>
        </ul>
      </div>
    </div>
  `

  main.innerHTML = cardHTML;
}

const getUser = async (username) => {
  try {
  const { data } = await axios.get(APIURL + username);
  createUserCard(data);
  console.log( data );
  } catch (err) {
    if(err.response.status == 404) {
      createErrorCard('No user found!')
    }
  }
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