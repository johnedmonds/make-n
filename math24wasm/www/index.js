import * as wasm from "math24wasm";

function parseInput() {
    return {
        target: parseInt(document.getElementById("target").value),
        numbers: document.getElementById("numbers").value.split(" ").map((number) => parseInt(number)),
        limit: parseInt(document.getElementById("limit").value)
    }
}

function removeNoResults() {
    const noresults = document.getElementById("noresults");
    if (noresults != null) {
        noresults.parentElement.removeChild(noresults);
    }
}

document.getElementById("search").onclick = function() {
    removeNoResults();
    const request = parseInput();
    const iterator = wasm.compute_match_iterator({target: request.target, numbers: request.numbers});
    const resultsElement = document.getElementById("results");
    resultsElement.innerHTML = "";
    for (let i = 0; i < request.limit; i++) {
        const nextMatch = wasm.next_match(iterator);
        if (nextMatch.length == 0) {
            break;
        }
        const listItem = document.createElement("li");
        listItem.innerText = nextMatch;
        resultsElement.appendChild(listItem);
    }
    wasm.free_match_iterator(iterator);
};
