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

function validateRequest({target, numbers, limit}) {
    const errors = [];
    if (isNaN(target)) {
        errors.push("Target must be a number.");
    }
    if (isNaN(limit)) {
        errors.push("Limit must be a number.");
    }
    if (numbers.length == 0) {
        errors.push("Must enter some numbers.");
    }
    if (numbers.some(isNaN)) {
        errors.push("Numbers must be valid and separated by spaces.");
    }
    return errors;
}

function makeResultElement(s) {
    const listItem = document.createElement("li");
    listItem.innerText = s;
    return listItem;
}

document.getElementById("search").onclick = function() {
    removeNoResults();
    const request = parseInput();   
    const resultsElement = document.getElementById("results");
    resultsElement.innerHTML = "";
    
    const errors = validateRequest(request);
    if (errors.length != 0) {
        errors.forEach(error => {
            resultsElement.appendChild(makeResultElement("Error: " + error));
        });
        return;
    }

    let matchCount = 0;
    const iterator = wasm.compute_match_iterator(request.target, request.numbers);
    for (let i = 0; i < request.limit; i++) {
        const nextMatch = wasm.next_match(iterator);
        if (!nextMatch) {
            break;
        }
        matchCount++;
        if (matchCount > request.limit) {
            break;
        }
        resultsElement.appendChild(makeResultElement(nextMatch));
    }
    wasm.free_match_iterator(iterator);
};
