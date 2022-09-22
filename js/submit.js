window.addEventListener("DOMContentLoaded", function() { // 'window.onload = function...' also works 
    const yourForm = document.getElementById("my-form");
    yourForm.addEventListener("submit", function(e) { // 'yourForm.onsubmit = function...` also works too
      e.preventDefault(); 
      const data = new FormData(yourForm); 
      const action = e.target.action; 
      fetch(action, { 
        method: 'POST', 
        body: data, 
      }).then((response) => {
        response.json();
      }).then((data) => {
        if (data.result == "success") {
          // finished, you can do whatever you want here
          alert("Success!")
        }
      })
    })
  });