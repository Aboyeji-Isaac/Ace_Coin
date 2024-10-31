//Time Interaction
function updateTimer() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Convert hours from 24-hour format to 12-hour format
    const isPM = hours >= 12;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Convert hours and minutes into individual digits
    const hourTens = Math.floor(hours / 10);
    const hourOnes = hours % 10;
    const minuteTens = Math.floor(minutes / 10);
    const minuteOnes = minutes % 10;

    // Update the spans with the new time
    document.getElementById('hour-tens').innerText = hourTens;
    document.getElementById('hour-ones').innerText = hourOnes;
    document.getElementById('minute-tens').innerText = minuteTens;
    document.getElementById('minute-ones').innerText = minuteOnes;
    
    // Toggle the blinking effect for the timer divider
    const divider = document.querySelector('.timer-divider');
    divider.classList.toggle('blink');
}

// Update the timer and blink the divider every second
updateTimer();
setInterval(updateTimer, 1000);


//Submit Button Animation
document.getElementById('pay-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action if needed
  
  const btnText = document.getElementById('btn-text');
  const loader = document.getElementById('btn-loader');

  // Show the loader and hide the text
  loader.classList.add('active');
  btnText.innerText = 'Processing';

  // Simulate a delay of 3 seconds (e.g., simulating payment processing)
  setTimeout(function() {
    // Hide the loader and change the button text to "Successful"
    loader.classList.remove('active');
    btnText.innerText = 'Successful';
    
    // Change the background color of the .submit-btn to green
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.style.backgroundColor = '#28a745'; // Green color for success

    // Optionally, change the background color of the button itself if needed
    const payBtn = document.getElementById('pay-btn');
    payBtn.style.backgroundColor = '#28a745'; // Green color for success

    // You can also change the color to indicate success
    document.querySelector('.submit-btn').style.backgroundColor = '#28a745'; // Green color for success
  }, 3000); // 3 seconds delay
});

//For the input field
const inputs = document.querySelectorAll("#myForm input");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("myForm");

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default Enter behavior
      
      if (index === inputs.length - 1) {
        // Show the submit button and animate
        submitBtn.style.display = "inline-block";
        submitBtn.classList.add("show"); // Trigger animation

        // Delay to complete the animation, then submit the form
        setTimeout(() => {
          form.submit(); // Submit the form directly
        }, 500); // Adjust to match the animation duration
      } else {
        // Move to the next input field
        inputs[index + 1].focus();
      }
    }
  });
});

