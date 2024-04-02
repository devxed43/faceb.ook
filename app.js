// what is checked in order to give data
let database = [
  {
    username: "pete",
    password: "secret",
  },
];

// what is returned if password and username match the databaes
let newsfeed = [
  {
    username: "user1",
    timeline: "omg js is cool!",
  },
  {
    username: "user2",
    timeline: "I'm learning so much!",
  },
  {
    username: "user3",
    timeline: "wow, I want to know more!",
  },
];

// asks for user data
let usernamePrompt = prompt("what is your username?");
let passwordPrompt = prompt("what is your password?");

// sign in feature
function signIn(username, password) {
  if (username === database[0].username && password === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("sorry wrong credentials");
  }
}

// calls sign in function with prompts to data check
signIn(usernamePrompt, passwordPrompt);
