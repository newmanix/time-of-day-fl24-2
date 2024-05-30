window.onload = function() {
    const date = new Date();
    const hour = date.getHours();
    const content = document.getElementById(`content`);
    const timeImage = document.getElementById(`timeImage`);
    const message = document.getElementById(`message`);
    const currentTimeElement = document.getElementById('currentTime');

    // Function to display current time
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? `PM` : `AM`;

        hours = hours % 12;
        hours = hours ? hours : 12; // Convert hour '0' to '12'
        hours = String(hours).padStart(2, '0');
        currentTimeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    

    if (hour >= 5 && hour <12) {
        // Function for Morning
        document.body.className= `morning`;
        timeImage.src = `images/morning.jpg`;
        message.textContent = `Good morning, hope you slept well!`;
    } else if (hour >= 12 && hour < 18) {
        // Function for Afternoon
        document.body.className = `afternoon`;
        timeImage.src = `images/afternoon.jpg`;
        message.textContent = `Good afternoon, make sure to eat lunch!`;
    } else if (hour >= 18 && hour < 23) {
        // Function for Evening
        document.body.className = `evening`;
        timeImage.src = `images/evening.jpg`;
        message.textContent = `Good evening, time to finally relax!`;
    } else {
        // Function for Night
        document.body.className = `night`;
        timeImage.src = `images/night.jpg`;
        message.textContent = `Good night, sleep well!`;
    }

        // Initial call to display the time immediately on load
        updateTime();
        // Update the time every second
        setInterval(updateTime, 1000);
};