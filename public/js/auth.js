const { user } = require("firebase-functions/v1/auth");


const authSwitchLinks = document.querySelectorAll('.switch');
const authModals = document.querySelectorAll('.auth .modal');
const authWrapper = document.querySelectorAll('.auth');
const registerForm = document.querySelector('.register');
const loginForm  = document.querySelector('.login');
const signOut = document.querySelector('.sign-out');

// toggle auth modals

authSwitchLinks.forEach(link => {
  link.addEventListener('click', () => {
    authModals.forEach(modal => modal.classList.toggle('active'));
  });  
});
 // for the register from

 registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

const email = registerForm.email.value;

const password = registerForm.password.value;
console.log(email, password);
firebaseConfig.auth().createUserWithEmailAndPassowrd(email, password)
.then(user => {
    console.log( 'registered', user);
    register.reset();   
})
.catch((error) =>{
    
})
})

