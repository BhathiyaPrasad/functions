const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();


// auth trigger (new user sign up)
exports.newUserSignup = functions.auth.user().onCreate((user) => {
  admin.firestore().collection("users").doc(user.uid).set({
    email: user.email,
    upvotedOn: [],
  });
});

// user deleted
exports.newUserdeleted = functions.auth.user().onDelete((user) => {
  console.log("user deleteed", user.email, user.uid);
});
