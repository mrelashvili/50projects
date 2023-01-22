'use strict';

const APIURL = 'https://api.github.com/users/';

const getUser = async (username) => {
  const res = await axios.get(APIURL + username);
  console.log(res.data);
}

getUser('mrelashvili');