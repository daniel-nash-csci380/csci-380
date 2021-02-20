const value = document.querySelector("#value");
let count="";
const btns = document.querySelectorAll(".btn");
const companies = ["Uber", "Lyft", "Google", "Apple", "SpaceX", "Tinder", "Microsoft"]
const animals = ["Aardvark", "Blue Footed Booby", "Flying Dragon", "Giraffe Weevil", "Hammerhead Slug", "Komodo Dragon", "Naked Mole Rat", "Okapi", "Red Panda"]
const vowels = ["A", "E", "I", "O", "U", "Y"]
function madlib(){

    const companyName = companies[Math.floor(Math.random() * companies.length)]

    const firstLetter = companyName.charAt(0)
    const companyString = "My company is a" + ((vowels.indexOf(firstLetter) > -1) ? "n " : " ") + companyName + " for " + animals[Math.floor(Math.random() * animals.length)] + "s!<br />"
return companyString;
}


btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
    count = madlib();
}
else if (styles.contains("increase")) {
      count = madlib();
    }
else {
      count = "";
    }
value.textContent = count;
  });
  });
