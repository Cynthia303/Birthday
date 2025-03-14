document.getElementById("openBtn").addEventListener("click", function() {
    // Hide the "Open" button and show the cake and other content
    document.getElementById("openBtn").style.display = "none";
    document.getElementById("birthdayContent").style.display = "block";
    
    // Show the cake and play the birthday song
    document.getElementById("cake").style.display = "block";
    document.getElementById("birthdaySong").play();
    
    // Show the "Blow it" button after the song starts playing
    setTimeout(function() {
        document.getElementById("blowBtn").style.display = "inline-block";
    }, 3000); // Wait 3 seconds before showing the "Blow it" button
});

document.getElementById("blowBtn").addEventListener("click", function() {
    // When the "Blow it" button is clicked, simulate the candle going out
    document.getElementById("cake").src = "birthday_cake_no_candle.jpg"; // Change to cake without candles
    document.getElementById("happyBirthday").style.display = "block"; // Show "Happy Birthday!"
    document.getElementById("birthdaySong").pause(); // Stop the song
    document.getElementById("birthdaySong").currentTime = 0; // Reset song to start
});