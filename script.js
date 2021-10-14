function pageLoad() {
    console.log("Az oldal betoltodott");
    document.getElementById("root").classList.add("loaded");

    function rootClicked() {
        console.log("A root ID-ju div-re kattintottunk")
    }

    document.getElementById("root").addEventListener("click", rootClicked);
}

window.addEventListener("load", pageLoad);