document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'your_username' && password === 'your_password') {
        window.location.href = 'reminders.html'; 
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});

document.getElementById('cancelButton').addEventListener('click', function() {
    window.location.href = 'login.html'; 
});


document.getElementById('setReminderButton').addEventListener('click', function() {
    
    window.location.href = 'set_reminder.html';
});


