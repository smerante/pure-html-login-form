var submitted = false;

function submit(event) {
  if(event && event.key !== 'Enter') return;

  submitted = true;
  var userInput = document.getElementById('username').value;
  var pwInput = document.getElementById('pwd').value;

  if (userInput === '') {
    document.getElementById('username').focus();
    document.getElementById('usernameError').innerText = "Username is a required field.";
  }
  if (pwInput === '') {
    if (userInput !== '') {
      document.getElementById('pwd').focus();
    }
    document.getElementById('pwdError').innerText = "Password is a required field.";
  } else {
    if (!(/[A-Z]/.test(pwInput))) {
      if (userInput !== '') {
        document.getElementById('pwd').focus();
      }
      document.getElementById('pwdError').innerText = "Password must include one capital letter, one lower case letter, and atleast one number.";
    }
    else if (!(/[a-z]/.test(pwInput))) {
      if (userInput !== '') {
        document.getElementById('pwd').focus();
      }
      document.getElementById('pwdError').innerText = "Password must include one capital letter, one lower case letter, and atleast one number.";
    }
    else if (!(/[0-9]/.test(pwInput))) {
      if (userInput !== '') {
        document.getElementById('pwd').focus();
      }
      document.getElementById('pwdError').innerText = "Password must include one capital letter, one lower case letter, and atleast one number.";
    } else {
      if (userInput !== '') {
        document.getElementById('loginForm').classList.add('login-form-valid');
        document.getElementById('loginMessage').innerText = 'Login Success';
        document.getElementById('loginMessage').classList.add('login-alert-visible');
      }
    }
  }
}

function verifyInput() {
  if (submitted) {
    var userInput = document.getElementById('username').value;
    var pwInput = document.getElementById('pwd').value;

    if (userInput !== '')
      document.getElementById('usernameError').innerText = "";

    if (pwInput !== '')
      document.getElementById('pwdError').innerText = "";

  }
}