// const express = require("express");
// const app = express();
// const cors = require("cors");
// const PORT = 8080;

// app.use(cors());

// app.get("/api/home", (req, res) => {
//   res.json({ message: "Hello World!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const validator = require("validator");

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/api/users", (req, res) => {
//   const { name, gender } = req.body;

//   // Validate user input
//   if (!validator.isLength(name, { min: 2 })) {
//     return res
//       .status(400)
//       .json({ error: "Name must be at least 2 characters long" });
//   }

//   if (!validator.isAlpha(name.replace(/\s/g, ""))) {
//     return res.status(400).json({ error: "Name must contain only letters" });
//   }

//   if (/\d/.test(name)) {
//     return res.status(400).json({ error: "Name must not contain numbers" });
//   }

//   if (/\(|\)|\[|\]|&|\/|\\|\,|\./.test(name)) {
//     return res
//       .status(400)
//       .json({
//         error: "Name must not contain special characters like ()[]&/\\,.",
//       });
//   }

//   if (/\band\b/i.test(name)) {
//     return res
//       .status(400)
//       .json({ error: 'Name must not contain the word "and"' });
//   }

//   if (!["male", "female"].includes(gender)) {
//     return res
//       .status(400)
//       .json({ error: 'Gender must be either "male" or "female"' });
//   }

//   // Save user data to database
// });

// app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });
