document.getElementById("animateBtn").addEventListener("click", function() {
    let box = document.querySelector(".box");
    box.style.transform = "translateY(-50px)";
    setTimeout(() => {
        box.style.transform = "translateY(0)";
    }, 500);
});
