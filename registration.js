
document.querySelector('form.reg-page').addEventListener('submit', function (e) {
  e.preventDefault(); 


  const email = document.querySelector('input[name="userid"]').value.trim();
  const password = document.querySelector('input[name="usrpsw"]').value.trim();

 
  if (!email || !password) {
    alert('Please fill out all fields.');
    return;
  }


  const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  const user = storedUsers.find(user => user.email === email);

  if (user && user.password === password) {
    alert(`Welcome back, ${user.name}!`);
    window.location.href = 'dashboard.html'; 
  } else {
    alert('Invalid email or password. Please try again.');
  }
});


function registerUser(name, email, password) {
  const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  users.push({ name, email, password });
  localStorage.setItem('registeredUsers', JSON.stringify(users));
}

registerUser('eslam gm', 'eslam@example.com', '123456'); 

async function loginUser(email, password) {
  const apiURL = 'https://example.com/api/login'; 
  try {
    const response = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Welcome back, ${data.name}!`);
      window.location.href = 'dashboard.html'; 
    } else {
      alert('Invalid email or password.');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    alert('An error occurred. Please try again.');
  }
}
