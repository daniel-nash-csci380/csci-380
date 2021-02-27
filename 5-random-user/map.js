const url = 'https://randomuser.me/api/';

const avatar = document.getElementById('avatar');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const city = document.getElementById('city');
const state = document.getElementById('state');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
  fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(updateProfile)
    .catch(err => {
      console.error(err)
    })
});

function handleErrors(res) {
  if (!res.ok) {
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function updateProfile(profile) {
  avatar.src = profile.results[0].picture.medium;
  fullname.innerHTML = profile.results[0].name.first + " " + profile.results[0].name.last;
  username.innerHTML = profile.results[0].login.username;
  email.innerHTML = profile.results[0].email;
  city.innerHTML = profile.results[0].location.city;
  state.innerHTML = profile.results[0].location.state;
  latitude.innerHTML = profile.results[0].location.coordinates.latitude;
  longitude.innerHTML = profile.results[0].location.coordinates.longitude;
  mapsearch.innerHTML = "https://maps.google.com/search?q="(latitude.innerHTML),(longitude.innerHTML));
  return 1;
}
