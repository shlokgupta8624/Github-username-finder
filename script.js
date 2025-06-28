const API_URL = "https://api.github.com/users";
const input = document.querySelector(".name");
const btn = document.getElementById("button");
const result = document.querySelector(".hide")
console.log(result);
const getfacts = async (API_URL, inputValue) => {
  console.log("getting data.....");
  const URL = `${API_URL}/${inputValue}`
  console.log(URL);
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  console.log(data.message);
  if (data.message != 'Not Found') {


    result.innerHTML = `
          </div>
          <div class="etc">
          <div class="nameuser">${data.name || "No name provided"}</div>
          <img class="avatar" src="${data.avatar_url}" alt="Avatar">
        </div>
        <div class="bio">${data.bio || "No bio available"}</div>
        <div class="stats">👥 Followers: ${data.followers} | Following: ${data.following}</div>
        <a class="profile-link" href="${data.html_url}" target="_blank">View GitHub Profile</a>
        
      </div>
        `;
  }
  else {
    result.innerHTML = `
    <div class="card">
      <p class = "red">User not found. Please check the username  </p>
    </div>`
          
  }



};


btn.addEventListener("click", function () {
  console.log("Button clicked");
  input.inertText = input.value;
  const inputValue = input.value
  console.log(input.inertText);
  getfacts(API_URL, inputValue)


})


