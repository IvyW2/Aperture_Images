window.onload = function () {
  // Hide the search button initially
  document.getElementById("search").style.display = "none";
  document.getElementById("search_box").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("signUp").style.display = "block";
  
  
  // Add event listeners for the sign up and log in buttons
  document.getElementById("signUpBtn").addEventListener("click", function () {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("search").style.display = "block";
    document.getElementById("search_box").style.display = "block";
    event.preventDefault()
  });
  document.getElementById("LogInInstead").addEventListener("click", function () {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("search").style.display = "none";
    document.getElementById("search_box").style.display = "none";
    event.preventDefault()
  });
  document.getElementById("SignUpInstead").addEventListener("click", function () {
    document.getElementById("signUp").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("search_box").style.display = "none";
    event.preventDefault()
  });
  document.getElementById("loginBtn").addEventListener("click", function () {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("search").style.display = "block";
    document.getElementById("search_box").style.display = "block";
    event.preventDefault();
  });
 }
  
  
  
 document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key == "Enter")
    apiRequest();
 });
 // adding an event listener on the search_box
 document.querySelector("#search").addEventListener("click", () => {
  apiRequest();
 });
 //Fetching the public API URL -Unsplash
 apiRequest = () => {
  
  document.querySelector("#grid").textContent = "";
  
  const url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=30&client_id=IRqXjzvuNdMOxJP8Qb0f6-uOBI_SnLvm82i_Xlj8seA';
  
  fetch(url)
    // returning the response in json format
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
  
    .then(data => {
      loadImages(data);
    })
  
    .catch(error => console.log(error));
 }
  
 //creating Dom element and appending them to parent
 loadImages = (data) => {
  for (let i = 0; i < data.results.length; i++) {
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage = "url(" + data.results[i].urls.raw + "&w=1366&h=768" + ")";
    image.innerHTML = '<i style="font-size:24px" class="fa">&#xf019</i>';
    image.addEventListener("click", function () {
      window.open(data.results[i].links.download, '_blank');
    })
    document.querySelector("#grid").appendChild(image);
  }
 }
 