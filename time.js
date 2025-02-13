document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const maybeBtn = document.getElementById("maybeBtn");
    const question = document.getElementById("question");
    const forceChoice = document.getElementById("forceChoice");
    const calculating = document.getElementById("calculating");
    const result = document.getElementById("result");
    const timeCount = document.getElementById("timeCount");
    const wordsContainer = document.getElementById("wordsContainer");
    const foreverBtn = document.getElementById("foreverBtn");
    const replayBtn = document.getElementById("replayBtn");

    const startDate = new Date("July 26, 2023 22:09:00 GMT+0800");

    function updateTime() {
        const now = new Date();
        let diff = now - startDate;

        let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        diff -= years * (1000 * 60 * 60 * 24 * 365);
        let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
        diff -= months * (1000 * 60 * 60 * 24 * 30);
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);
        let hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);
        let minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);
        let seconds = Math.floor(diff / 1000);

        timeCount.innerHTML = `
            <div class='time-box'>
                <p>Time We've Spent Together</p>
                <div class='time-values'>
                    <p>${years} Year</p>
                    <p>${months} Months</p>
                    <p>${days} Days</p>
                    <p>${hours} Hours</p>
                    <p>${minutes} Minutes</p>
                    <p>${seconds} Seconds</p>
                </div>
            </div>`;
    }

    setInterval(updateTime, 1000);

    function showRandomWords() {
        wordsContainer.classList.remove("hidden");
        wordsContainer.classList.add("fade-in");

        const words = ["Remember our first kiss?", "So many memories!", "You are my babii!", "I Love You FOREVER!", "Thanks for being here!", "So many memories!", "You're my everything!", "You're the Greatest blessing that came", "You will love me forever right?", "Forever and always!", "Counting every moment!", "It will be 100 years in the future!", "You make my heart smile!", "Every second counts!!", "I love you always & forever", "My favorite story is ours!", "Our time is priceless!!", "I want to be with you every second!", "I LOVE YOU", "HAPPY VALENTINES!!"];

        setTimeout(() => {
            words.forEach((word, index) => {
                setTimeout(() => {
                    const wordBox = document.createElement("div");
                    wordBox.classList.add("word-box", "fade-in-slow");
                    wordBox.textContent = word;

                    let randomX = Math.random() * (window.innerWidth - 150);
                    let randomY = Math.random() * (window.innerHeight - 100);

                    wordBox.style.position = "absolute";
                    wordBox.style.left = `${randomX}px`;
                    wordBox.style.top = `${randomY}px`;
                    wordBox.style.opacity = "0";
                    wordBox.style.transition = "opacity 2s ease-in-out"; // Smooth fade-in

                    document.body.appendChild(wordBox);

                    setTimeout(() => {
                        wordBox.style.opacity = "1"; // Show word
                    }, 100);

                    // ⏳ Word stays for 5 seconds before fading out
                    setTimeout(() => {
                        wordBox.style.opacity = "0"; // Start fading out
                        setTimeout(() => {
                            wordBox.remove(); // Remove from DOM
                        }, 2000);
                    }, 5000);
                }, index * 2000); // ⏳ 2-second gap before next word appears
            });

            // 🎯 Show "Forever" button after last word animation
            setTimeout(() => {
                foreverBtn.classList.remove("hidden");
                foreverBtn.classList.add("fade-in");
            }, words.length * 2000 + 1500);
        }, 1500); // ⏳ 3-second delay before the first word appears
    }

    yesBtn.addEventListener("click", function () {
        question.classList.add("fade-out");
        setTimeout(() => {
            question.classList.add("hidden");
            calculating.classList.remove("hidden");
            calculating.classList.add("fade-in");
        }, 500);

        setTimeout(() => {
            calculating.classList.add("hidden");
            result.classList.remove("hidden");
            result.classList.add("fade-in");

            setTimeout(() => {
                showRandomWords(); // ⏳ 3-second delay before first word
            }, 1500);
        }, 1500);
    });

    maybeBtn.addEventListener("click", function () {
        question.classList.add("fade-out");
        setTimeout(() => {
            question.classList.add("hidden");
            forceChoice.classList.remove("hidden");
            forceChoice.classList.add("fade-in");
        }, 50);

        setTimeout(() => {
            forceChoice.classList.add("hidden");
            calculating.classList.remove("hidden");
            calculating.classList.add("fade-in");

            setTimeout(() => {
                calculating.classList.add("hidden");
                result.classList.remove("hidden");
                result.classList.add("fade-in");

                setTimeout(() => {
                    showRandomWords(); // ⏳ 3-second delay before first word
                }, 1500);
            }, 1500);
        }, 2000);
    });

    // ✅ Redirect "Forever" button to askDate.html
    foreverBtn.addEventListener("click", function () {
        result.classList.add("fade-out");

        setTimeout(() => {
            result.classList.add("hidden");

            const loadingDiv = document.createElement("div");
            loadingDiv.classList.add("loading-screen");
            loadingDiv.innerHTML = `
                <p>Loading...</p>
                <div class="progress-bar">
                    <div class="progress"></div>
                </div>
            `;
            document.body.appendChild(loadingDiv);

            let progress = 0;
            const progressBar = loadingDiv.querySelector(".progress");

            const interval = setInterval(() => {
                progress += 10;
                progressBar.style.width = progress + "%";

                if (progress >= 100) {
                    clearInterval(interval);
                    window.location.href = "askDate.html";
                }
            }, 300);
        }, 500);
    });

    replayBtn.addEventListener("click", function () {
        location.reload();
    });
});
