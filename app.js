function toggleEmail() {
    const emailElement = document.getElementById("email-address");
    if (emailElement.style.display === "none") {
        emailElement.style.display = "block";
    } else {
        emailElement.style.display = "none";
    }
}

        // // Function to set and animate the typewriter text
        // function typeWriter(text, speed) {
        //     let i = 0;
        //     const typeInterval = setInterval(function() {
        //         if (i < text.length) {
        //             typewriterText.textContent += text.charAt(i);
        //             i++;
        //         } else {
        //             clearInterval(typeInterval); // Stop typing when text is complete
        //         }
        //     }, speed);
        // }

        // // Call the typewriter function with the desired text and speed
        // const textToType = ''; // Change this to your desired text
        // const typingSpeed = 100; // Adjust typing speed here (milliseconds)
        // typeWriter(textToType, typingSpeed);