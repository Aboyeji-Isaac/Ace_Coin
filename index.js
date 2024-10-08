// const circle = document.querySelector('.progress-ring__circle');
// const radius = circle.r.baseVal.value;
// const circumference = 2 * Math.PI * radius;

// circle.style.strokeDasharray = `${circumference} ${circumference}`;
// circle.style.strokeDashoffset = circumference;

// function setProgress(percent) {
//     const offset = circumference - (percent / 100) * circumference;
//     circle.style.strokeDashoffset = offset;
// }

// // Set progress to 50% (as an example)
// setProgress(50);

// function updateTimer() {
//     const now = new Date();
    
//     let hours = now.getHours();
//     let minutes = now.getMinutes();

//     // Convert hours and minutes into individual digits
//     const hourTens = Math.floor(hours / 10);
//     const hourOnes = hours % 10;
//     const minuteTens = Math.floor(minutes / 10);
//     const minuteOnes = minutes % 10;

//     // Update the spans with the new time
//     document.getElementById('hour-tens').innerText = hourTens;
//     document.getElementById('hour-ones').innerText = hourOnes;
//     document.getElementById('minute-tens').innerText = minuteTens;
//     document.getElementById('minute-ones').innerText = minuteOnes;
// }

// // Update the timer immediately and every second
// updateTimer();
// setInterval(updateTimer, 1000);


function updateTimer() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();

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


document.getElementById('pay-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action if needed
    
    const btnText = document.getElementById('btn-text');
    const loader = document.getElementById('btn-loader');

    // Show the loader and hide the text
    btnText.innerText = 'Processing...';
    loader.classList.add('active');

    // Simulate a delay of 3 seconds (e.g., simulating payment processing)
    setTimeout(function() {
        // Hide the loader and change the button text to "Successful"
        loader.classList.remove('active');
        btnText.innerText = 'Successful';
        
        // You can also change the color to indicate success
        document.querySelector('.submit-btn').style.backgroundColor = '#28a745'; // Green color for success
    }, 3000); // 3 seconds delay
});

