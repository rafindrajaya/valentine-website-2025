// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Michelle Priscillia Pramajaya",

    // The title that appears in the browser tab
    pageTitle: "Will You Be My Valentine, baby? 💖",

    // Floating images that appear in the background (Replace with your URLs)
    floatingImages: [
        "https://drive.google.com/drive/folders/1Ou2FIYXwCJxP1JK3rVE3layzbgu4se3N?usp=sharing",
        "https://drive.google.com/drive/folders/1Ou2FIYXwCJxP1JK3rVE3layzbgu4se3N?usp=sharing"
         "https://drive.google.com/drive/folders/1Ou2FIYXwCJxP1JK3rVE3layzbgu4se3N?usp=sharing",
         "https://drive.google.com/drive/folders/1Ou2FIYXwCJxP1JK3rVE3layzbgu4se3N?usp=sharing",
        "https://drive.google.com/drive/folders/1Ou2FIYXwCJxP1JK3rVE3layzbgu4se3N?usp=sharing",
        "https://drive.google.com/drive/folders/1Ou2FIYXwCJxP1JK3rVE3layzbgu4se3N?usp=sharing",
    "https://drive.google.com/drive/folders/1Ou2FIYXwCJxP1JK3rVE3layzbgu4se3N?usp=sharing"
    ],

    // Questions and answers
    questions: {
        first: {
            text: "Do you like me?",                                   
            yesBtn: "Yes",                                            
            noBtn: "No",                                              
            secretAnswer: "I don't like you, I love you! ❤️"           
        },
        second: {
            text: "How much do you love me?",                          
            startText: "This much!",                                   
            nextBtn: "Next ❤️"                                         
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹",
            yesBtn: "Yes!",                                            
            noBtn: "No"                                                
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  
        high: "To infinity and beyond! 🚀💝",              
        normal: "And beyond! 🥰"                           
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#ffafbd",     
        backgroundEnd: "#ffc3a0",       
        buttonBackground: "#ff6b6b",     
        buttonHover: "#ff8787",          
        textColor: "#ff4757"             
    },

    // Animation settings
    animations: {
        floatDuration: "15s",           
        floatDistance: "50px",          
        bounceSpeed: "0.5s",            
        heartExplosionSize: 1.5         
    },

    // Background Music (Optional)
    music: {
        enabled: true,                     
        autoplay: true,                    
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", 
        startText: "🎵 Play Music",        
        stopText: "🔇 Stop Music",         
        volume: 0.5                        
    }
};

// ===============================
// 💖 FLOATING IMAGES LOGIC 💖
// ===============================

function createFloatingImages() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.pointerEvents = "none";
    document.body.appendChild(container);

    CONFIG.floatingImages.forEach((imgSrc) => {
        for (let i = 0; i < 5; i++) {
            const img = document.createElement("img");
            img.src = imgSrc;

            // Ensures images fit well on the screen
            img.style.width = "10vw"; // Responsive size
            img.style.height = "auto"; // Keep aspect ratio
            img.style.maxWidth = "150px"; // Prevents being too large
            img.style.minWidth = "50px"; // Prevents being too small

            img.style.position = "absolute";
            img.style.opacity = "0.8";
            img.style.left = `${Math.random() * 90}vw`; // Random position
            img.style.top = `${Math.random() * 90}vh`;

            // Floating animation
            img.style.animation = `floatUp ${10 + Math.random() * 10}s linear infinite`;

            container.appendChild(img);
        }
    });

    // Define floating animation
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes floatUp {
            0% {
                transform: translateY(100vh);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateY(-10vh);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===============================
// 💖 INITIALIZE WEBSITE 💖
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    createFloatingImages();
    window.VALENTINE_CONFIG = CONFIG;
});
