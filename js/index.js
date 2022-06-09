let github = document.getElementById("github-link");
let linkedin = document.getElementById("linkedin-link");
let twitter = document.getElementById("twitter-link");

github.addEventListener("mouseenter", function (e) {
    e.target.style.width="40px"
    e.target.style.height="40px"
  });

  github.addEventListener("mouseout", function (e) {
    e.target.style.width="30px"
    e.target.style.height="30px"
  });

  linkedin.addEventListener("mouseenter", function (e) {
    e.target.style.width="40px"
    e.target.style.height="40px"
  });

  linkedin.addEventListener("mouseout", function (e) {
    e.target.style.width="30px"
    e.target.style.height="30px"
  });

  twitter.addEventListener("mouseenter", function (e) {
    e.target.style.width="40px"
    e.target.style.height="40px"
  });

  twitter.addEventListener("mouseout", function (e) {
    e.target.style.width="30px"
    e.target.style.height="30px"
  });
