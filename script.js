const quotes = [
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Study hard, for the well is deep, and our brains are shallow. - Richard Baxter",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    "The roots of education are bitter, but the fruit is sweet. - Aristotle",
    "An investment in knowledge pays the best interest. - Benjamin Franklin",
    "What we learn with pleasure we never forget. - Alfred Mercier",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Your education is a dress rehearsal for a life that is yours to lead. - Nora Ephron",
    "The mind is not a vessel to be filled, but a fire to be kindled. - Plutarch",
    "Learning is a treasure that will follow its owner everywhere. - Chinese Proverb",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "In learning, you will teach, and in teaching, you will learn. - Phil Collins",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
    "The only thing worse than being blind is having sight but no vision. - Helen Keller",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The best revenge is massive success. - Frank Sinatra",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson"
];

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = ((hours % 12) + minutes / 60) * 30; // 360 / 12 = 30 degrees per hour
    const minuteDeg = (minutes + seconds / 60) * 6; // 360 / 60 = 6 degrees per minute
    const secondDeg = seconds * 6; // 360 / 60 = 6 degrees per second

    document.querySelector('.hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.querySelector('.minute').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.querySelector('.second').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

function toggleLight() {
    const body = document.body;
    const content = document.querySelector('.content');
    const isHidden = content.classList.toggle('hidden');
    body.style.backgroundColor = isHidden ? 'black' : ''; // Change background color to black when hidden
}

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.querySelector('.quote').textContent = quotes[randomIndex];
}

setInterval(updateClock, 1000);
window.onload = function() {
    updateClock(); // Initialize clock on load
    displayRandomQuote(); // Display a random quote on load
};