function updateButton() {
  let userName = prompt("Enter Name");
  let userFeelings = prompt("Are You Happy or Sad?");
  alert("Thank you! Please read quote!");

  userFeelings = userFeelings.toLowerCase().trim();

  userName;
  if (userFeelings === "sad") {
    let p = document.querySelector("p");
    p.innerHTML =
      "“If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward.” – Martin Luther King Jr";
  } else {
    let p = document.querySelector("p");
    p.innerHTML =
      "Pat yourself on the back when you win, and when you don’t, just keep moving! So long as you don’t stop moving, soon you may realize just how close you are to winning!” – Chinonye J. Chidolue";
  }
}

let feelingButton = document.querySelector("button");
feelingButton.addEventListener("click", updateButton);
