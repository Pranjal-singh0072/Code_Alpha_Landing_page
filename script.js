// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  document.getElementById("signin-btn").addEventListener("click", function() {
    // Perform sign-in logic here
    alert("Sign in clicked!");
  });