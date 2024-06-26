document.getElementById("discover").addEventListener("click", function() {
    var artifacts = document.getElementById("discover-artifacts");
    if(artifacts.style.display == "flex") {
        artifacts.style.display = "none";
    }else {
        artifacts.style.display = "flex";
    }
});

document.getElementById("more").addEventListener("click", function() {
    var information = document.getElementById("more-info");
    if(information.style.display === "block") {
        information.style.display = "none";
    }else {
        information.style.display = "block";
    }
});

document.getElementById("contact").addEventListener("click", function() {
    var contacts = document.getElementById("contacts");
    if(contacts.style.display === "flex") {
        contacts.style.display = "none";
    }else {
        contacts.style.display = "flex";
    }
});

document.getElementById("view-all").addEventListener("click", function() {
    var noveltyBlocks = document.getElementById("novelty-block-2");
    if(noveltyBlocks.style.display === "flex") {
        noveltyBlocks.style.display = "none";
    }else {
        noveltyBlocks.style.display = "flex";
    }
});

document.getElementById("next").addEventListener("click", function() {
    var noveltyBlock1 = document.getElementById("novelty-block-1");
    var noveltyBlock2 = document.getElementById("novelty-block-2");
    if(noveltyBlock1.style.display === "none") {
        noveltyBlock1.style.display = "flex";
        noveltyBlock2.style.display = "none";
    }else {
        noveltyBlock2.style.display = "flex";
        noveltyBlock1.style.display = "none";
    }
});

document.getElementById("prev").addEventListener("click", function() {
    var noveltyBlock1 = document.getElementById("novelty-block-1");
    var noveltyBlock2 = document.getElementById("novelty-block-2");
    if(noveltyBlock1.style.display === "none") {
        noveltyBlock1.style.display = "flex";
        noveltyBlock2.style.display = "none";
    }else {
        noveltyBlock2.style.display = "flex";
        noveltyBlock1.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const novelties = document.querySelectorAll(".novelty");
    const total = document.getElementById("total");
    let count = 0;

    novelties.forEach(novelty => {
        novelty.addEventListener("click", () => {
            count++;
            total.textContent = count;
        });
    });
});
