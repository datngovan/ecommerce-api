const app = require("./src/app");

const PORT = 3055;

const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with ${PORT}`);
});

// process.on("SIGNIN", () => {
//   server.close(() => {
//     console.log("exit server Express");
//     //notify.send(...)
//   });
// });
