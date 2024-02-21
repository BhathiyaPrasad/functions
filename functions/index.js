const functions = require("firebase-functions");


// auth trigger (new user sign up)
exports.newUserSignup= functions.auth.user().onCreate((user) => {
  console.log("user created", user.email, user.uid);
});

// user deleted
exports.newUserdeleted= functions.auth.user().onDelete((user) => {
  console.log("user deleteed", user.email, user.uid);
});
