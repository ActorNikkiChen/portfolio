// JS is optional for now unless you want dropdowns or effects.
document.addEventListener('DOMContentLoaded', () => {
  console.log("Page loaded");
});

function loadHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load " + file);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => {
      console.error(err);
    });
}

function showSideNavbar() {
  const sideNavbar = document.querySelector('.side-navbar');
  sideNavbar.style.display = 'flex';
}

function hideSideNavbar() {
  const sideNavbar = document.querySelector('.side-navbar');
  sideNavbar.style.display = 'none';
}
