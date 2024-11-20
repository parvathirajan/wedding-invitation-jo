(function ($) {
    "use strict";
    // Initialize Sakura Falling animation
    $('.sakura-falling').sakura();
})(jQuery);

// Play audio on any click event on the document
$(document).on('click', function () {
    document.getElementById("my_audio").play();
});

// Set the countdown target date
var countDownDate = new Date("November 28, 2024 18:30:00").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();
    
    // Calculate the distance between now and the countdown date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update the countdown in the element with id="time"
    document.getElementById("time").innerHTML = `
    <div class="countdown-timer">
        <div class="time-block">
            <div class="time-number">${days}</div>
            <div class="time-label">Days</div>
        </div>
        <div class="separator">:</div>
        <div class="time-block">
            <div class="time-number">${hours}</div>
            <div class="time-label">Hours</div>
        </div>
        <div class="separator">:</div>
        <div class="time-block">
            <div class="time-number">${minutes}</div>
            <div class="time-label">Minutes</div>
        </div>
        <div class="separator">:</div>
        <div class="time-block">
            <div class="time-number">${seconds}</div>
            <div class="time-label">Seconds</div>
        </div>
    </div>`;


    
    // Handle countdown completion
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("time").innerHTML = "The wait is over! Join us in celebrating the joy of new beginnings and the arrival of our little bundle of joy!";
    }
}, 1000);

// Cool console message styling
var styles = [
    'background: linear-gradient(#D33106, #571402)',
    'border: 4px solid #3E0E02',
    'color: white',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');


// Function to change the text every few seconds
function changeText() {
    const h3Element = document.querySelector('h3');
    const originalText = "Celebrating Tiny Kicks and Big Dreams";
    const newText = "Baby Shower Ceremony";

    setInterval(() => {
        // Change to the new text
        h3Element.textContent = newText;

        // After 2 seconds, change it back to the original text
        setTimeout(() => {
            h3Element.textContent = originalText;
        }, 2000);
    }, 4000); // Change text every 4 seconds
}

document.addEventListener("DOMContentLoaded", changeText);
