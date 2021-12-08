/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  },{
    name: 'Aida',
    email: 'aidaj.gutierrez@gmail.com',
    languages: ['html', 'css', 'javascript']
  }
];

// TODO: fill in your name and email and add some programming languages you know(check)
// to the languages array

// TODO: replace the `var` keyword with `const`, then try to reassign a variable (check)
// declared as `const`

const name = 'Aida';
const email = 'aidaj.gutierrez@gmail.com';
const languages = ['html', 'css', 'javascript'];


// name= "Aida";

// TODO: rewrite the object literal using object property shorthand (check)
users.push({
  name,
  email,
  languages
});

// TODO: replace `var` with `let` in the following variable declarations (check)
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions (check)
users.forEach(user => emails.push(user.email));

users.forEach(user => names.push(user.name));

// TODO: replace `var` with `let` in the following declaration (check)
let developers = [];
users.forEach((user) => {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function (check)
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;
  //

  const {name, email, languages}= user;

  // TODO: rewrite the assignment below to use template strings (check)
  developers.push(`${name} 's email is ${ email} ${ name} knows ${ languages}`);
});

// TODO: Use `let` for the following variable (check)
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for (let developer of developers){
  // TODO: rewrite the assignment below to use template strings
  list += `<li>${developer}</li>`;
}
list += '</ul>';
