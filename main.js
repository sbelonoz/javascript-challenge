let myNumber = 52;

function buttonOne() {
 document.body.style.backgroundColor = "green";
 //document.getElementById('main-heading').innerHTML = `<p>This is not awesome at all</p>`;
 document.getElementById('main-heading').innerHTML += `<p>My number is: ${myNumber}</p>`;
}