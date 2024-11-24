// task 1

fetch("https://api.github.com/users/katie99mn")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    console.log(json.public_repos);
    console.log(json.followers);
  });
fetch("https://api.github.com/users/katie99mn/followers")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((user) => {
      console.log(user.id);
    });
  });

//   task 2
// 1. The total number of all comments. (Hint: it is 500, but we don’t always know the exact
//     number)
// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => response.json())
//   .then((json) => console.log(json.length));
// //     2. The total number of all photos. (Hint: 5000)

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => response.json())
//   .then((json) => console.log(json.length));

// //     3. Show the name of each user and their email address
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((user) => {
//       console.log(user.name, user.email);
//     });
//   });
// //     4. Show the name of each user and their current city
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((user) => {
//       console.log(user.name, user.address.city);
//     });
//   });

//     5. Show the total number of all todos that have completed
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => {
//     let count = 0;
//     json.forEach((todo) => {
//       if (todo.completed === true) {
//         count++;
//       }
//     });
//     console.log(count);
//   });

//     6. Show the titles and IDs of all todos that have been already completed

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((todo) => {
//       if (todo.completed === true) {
//         console.log(todo.id, todo.title);
//       }
//     });
//   });
//     7. For each incomplete todo, show the name of the user it belongs to (you need to use 2
//     collections)
// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
//     response.json()
//   ),
//   fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//     response.json()
//   ),
// ]).then(([todos, users]) => {
//   todos.forEach((todo) => {
//     if (!todo.completed) {
//       const user = users.find((user) => user.id === todo.userId);
//       if (user) {
//         console.log(todo.title, user.name);
//       }
//     }
//   });
// });

//     8. Show the name of the user who owns the album with the title quidem molestiae enim.
//     (you need to use 2 collections)
// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/albums").then((response) =>
//     response.json()
//   ),
//   fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//     response.json()
//   ),
// ]).then(([albums, users]) => {
//   const album = albums.find((album) => album.title === "quidem molestiae enim");
//   if (album) {
//     const user = users.find((user) => user.id === album.userId);
//     if (user) {
//       console.log(user.name);
//     }
//   }
// });
