const quizDuration = 60; 
const initialsForm = document.getElementById('initials-form');
const scoreDisplay = document.getElementById('score');


function updateTimer(remainingTime) {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `Time remaining: ${remainingTime} seconds`;
  }
  const initials = "AB";
  const score = 100;

  localStorage.setItem("initials", initials);
  localStorage.setItem("score", score);

  console.log(savedInitials);
  console.log(savedScore);

  function endQuiz() {
    clearInterval(timerInterval);
   
  }
;
function saveData() {
    const myData = "This is my saved data";
  
  
    localStorage.setItem("myDataKey", myData);
  
    // Optionally, display a message to the user to let them know the data was saved
    alert("Data saved successfully");
  }
  



 