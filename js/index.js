let github = document.getElementById("github-link");
let linkedin = document.getElementById("linkedin-link");
let twitter = document.getElementById("twitter-link");

github.addEventListener("mouseenter", function (e) {
    if (e.type === "mouseenter") {
        console.log(`${e.target.id} mouseenter`)
        github.style.backgroundColor = "green";
        github.style.color = "#fff"
    } 
  });

github.addEventListener("mouseout", function (e) {
    if (e.type === "mouseout") {
        console.log(`${e.target.id} mouseout`)
        github.style.backgroundColor = "";
        github.style.color = "";
    }
  });

linkedin.addEventListener("mouseenter", function (e) {

    if (e.type === "mouseenter") {
        console.log(`${e.target.id} mouseenter`)
        linkedin.style.backgroundColor = "#0072b1";
        linkedin.style.color = "#ffffff";
    }
  });

linkedin.addEventListener("mouseout", function (e) {
    if (e.type === "mouseout") {
        console.log(`${e.target.id} mouseout`)
        linkedin.style.backgroundColor = "";
        linkedin.style.color = "";
    }
  });

twitter.addEventListener("mouseenter", function (e) {
    if (e.type === "mouseenter") {
        console.log(`${e.target.id} mouseout`)
        twitter.style.backgroundColor = "#1da1f2";
        twitter.style.color = "#fff";
    } 
  });

twitter.addEventListener("mouseout", function (e) {
    if (e.type === "mouseout") {
        console.log(`${e.target.id} mouseenter`)
        twitter.style.backgroundColor = "";
        twitter.style.color = "";
    }
  });
