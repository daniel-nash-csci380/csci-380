const url = 'https://randomuser.me/api/';
let searchurl="";
const avatar = document.getElementById('avatar');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const city = document.getElementById('city');
const state = document.getElementById('state');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
let mapsearch = document.getElementById('mapsearch').src;
const btn = document.getElementById('btn');
window.addEventListener("load", () => {
  fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(updateProfile)
    .catch(err => {
      console.error(err)
    })
});
btn.addEventListener("click", () => {
  fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(updateProfile)
    .catch(err => {
      console.error(err)
    })
window.location.reload(true);
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
searchurl="https://maps.googleapis.com/maps/api/staticmap?zoom=1.0&sensor=false&maptype=satalite&size="+(window.screen.height*window.devicePixelRatio/2)+"x"+(window.screen.width*window.devicePixelRatio/2)+"&center="+(latitude.innerHTML)+","+(longitude.innerHTML);
srcurl=encodeURIComponent(searchurl);
fetch(window.location.protocol+"//"+window.location.hostname+":8081/"+srcurl);
return 1;
}
