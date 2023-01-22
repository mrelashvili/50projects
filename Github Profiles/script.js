'use strict';

const form = document.getElementById('form');
const search = document.getElementById('search');
const APIURL = 'https://api.github.com/users/';

const getUser = async (username) => {
  try {
  const { data } = await axios.get(APIURL + username);
  console.log( data );
  } catch (err) {
    console.log(err)
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