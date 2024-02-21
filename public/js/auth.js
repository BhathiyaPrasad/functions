
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
 

 registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

const email = registerForm.email.value;

const password = registerForm.password.value;
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(user => {
    console.log( 'registered', user);
    registerForm.reset();   
})
.catch((error) =>{
   registerForm.querySelector('.error').textContent = error.message;
});
});

// login form

authSwitchLinks.forEach(link => {
  link.addEventListener('click', () => {
    authModals.forEach(modal => modal.classList.toggle('active'));
  });  
});
 

 loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

const email = loginForm.email.value;

const password = loginForm.password.value;
firebase.auth().signInWithEmailAndPassword(email, password)
.then(user => {
    console.log( 'Logged in', user);
    loginForm.reset();   
})
.catch((error) =>{
   loginForm.querySelector('.error').textContent = error.message;
});
});

// auth listener

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Check if authWrapper is defined and not null
    if (authWrapper && authWrapper.length > 0) {
      authWrapper[0].classList.remove('open');
    }

    // Check if authModals is defined and not null
    if (authModals && authModals.length > 0) {
      authModals.forEach(modal => modal.classList.remove('active'));
    }
  } else {
    // Check if authWrapper is defined and not null
    if (authWrapper && authWrapper.length > 0) {
      authWrapper[0].classList.add('open');
    }

    // Check if authModals is defined and not null
    if (authModals && authModals.length > 0) {
      authModals[0].classList.add('active');
    }
  }
});
