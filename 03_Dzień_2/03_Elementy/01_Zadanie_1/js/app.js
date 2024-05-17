const links = document.querySelector(".links").querySelectorAll("li");



function getDataInfo(elements) {
    // [...elemets]
    // Array.from(elemets)
    return [...elements].map((element) => element.dataset.color);
}


console.log(getDataInfo(links));