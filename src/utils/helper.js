const nameList = ['Aarav', 'Aaryan', 'Aditya', 'Agastya', 'Akshat', 'Aman', 'Amit', 'Anand', 'Anmol', 'Arjun', 'Aryan', 'Ayush', 'Dhruv', 'Ekansh', 'Harsh', 'Ishan', 'Ishaan', 'Jai', 'Jaidev', 'Karan', 'Krishna', 'Kunal', 'Madhav', 'Manish', 'Mohan', 'Naman', 'Om', 'Param', 'Pranav', 'Ravi', 'Rohan', 'Saahil', 'Sameer', 'Sahil', 'Saket', 'Sahil', 'Shivam', 'Shreyas', 'Siddharth', 'Soham', 'Tarun', 'Uday', 'Varun', 'Vihaan', 'Virat', 'Yash', 'Yashveer', 'Aahana', 'Aditi', 'Aloka', 'Aparajita', 'Avni', 'Charvi', 'Diya', 'Eesha', 'Gauri', 'Hiya', 'Ira', 'Jiya', 'Kiara', 'Kriti', 'Lakshmi', 'Maya', 'Meera', 'Naina', 'Neha', 'Priya', 'Radhika', 'Riya', 'Sanya', 'Sejal', 'Tara', 'Trisha', 'Uma', 'Vani', 'Veda', 'Zara'];

const messages = [
    "Great video!",
    "I learned a lot. 📚",
    "My favorite YouTuber!",
    "Can't wait for next! 🔥",
    "Thanks for sharing! 🙏",
    "Really helpful! 👍",
    "So glad I watched! 😊",
    "Best video in a while! 💯",
    "Subscribing now! 🔔",
    "Can't wait to see! 👀",
    "This is amazing! 🤩",
    "I love this! ❤️",
    "Best video ever! 🏆",
    "So glad I found! 🤗",
    "Very helpful! 💡",
    "Sharing with friends! 🤝",
    "So inspiring! ✨",
    "Can't stop watching! 👀",
    "Well-made! 💯",
    "Love the way you explain! 🗣️",
    "Best video on this topic! 🎓",
    "So glad I subscribed! 👍",
    "Very funny! 😂",
    "Can't wait to see what's next! 👀",
    "Best video in a long time! 💯",
    "Subscribing for sure! 💯",
    "Very informative! 💡",
    "Love the way you present! 🗣️",
    "Well-researched! 🔍",
    "So glad I found this! 🤗",
    "Very informative. 💡",
    "Glad I watched. 😊",
    "Great video, thanks! 🙏",
    "Learned a lot. 📚",
    "Will try this out. 🧪",
    "Very helpful. 👍",
    "Can't wait for next! 🔥",
    "Favorite YouTuber! 👑",
    "So glad I found! 🤗",
    "Very well-made. 💯",
    "Amazing production value! 🤩",
    "Top-notch editing! ✂️",
    "Perfect audio quality! 🎚️",
    "Stunning visuals! 🖼️",
    "So much work went into this! 💪",
    "Very talented creator! 👩‍🎨",
    "So glad I watched. 😊",
    "Truly enjoyable experience. 😌",
    "Would definitely recommend! 👍",
    "One of the best videos ever! 🏆",
    "So glad I found! 🤗",
    "Can't wait to see what they make next! 👀",
    "Very thought-provoking. 🤔",
    "Made me think in a new way. 💡",
    "I respect their opinion. 🤝",
    "Glad to learn something new. 😊",
    "How can apply it to my own life? 🧠",
    "This video has really opened my mind🙏",
];


export function generateRandomNames() {
    return nameList[Math.floor(Math.random() * nameList.length)];
};

export function generateRandomText() {
    return messages[Math.floor(Math.random() * messages.length)];
};

export const findPrime = num => {
    let i, primes = [2, 3], n = 5;
    const isPrime = n => {
        let i = 1, p = primes[i],
            limit = Math.ceil(Math.sqrt(n));
        while (p <= limit) {
            if (n % p === 0) {
                return false;
            }
            i += 1;
            p = primes[i];
        }
        return true;
    }
    for (i = 2; i <= num; i += 1) {
        while (!isPrime(n)) {
            n += 2;
        }
        primes.push(n);
        n += 2;
    };
    return primes[num - 1];
}