adjectives = ["quick", "lazy", "sleepy", "noisy", "hungry", "happy", "sad", "angry", "bright", "dark", "shiny", "dull", "brave", "cowardly", "fierce", "gentle", "kind", "cruel", "funny", "serious"];
nouns = ["dog", "cat", "car", "tree", "house", "river", "mountain", "book", "computer", "phone", "city", "village", "ocean", "forest", "desert", "bird", "fish", "flower", "star", "planet"];
verbs = ["runs", "jumps", "swims", "flies", "drives", "writes", "reads", "sings", "dances", "eats", "drinks", "sleeps", "talks", "listens", "watches", "plays", "works", "studies", "laughs", "cries"];
adverbs = ["quickly", "slowly", "loudly", "quietly", "happily", "sadly", "angrily", "eagerly", "bravely", "carefully", "recklessly", "gently", "roughly", "kindly", "cruelly", "funnily", "seriously", "brightly", "darkly", "sharply"];

function RandomIndex(ceiling) {
    if (!Number.isInteger(ceiling)) {alert("Non-integer made its way into the system!"); return;}
    
    const max = Math.floor(ceiling);
    return Math.floor(Math.random() * max)
}

let btn = document.getElementById("btn-gen");
let text = document.getElementById("text");
let div = document.getElementById("div-btn-container");

btn.addEventListener("click", () => {
    text.innerHTML = "The " + adjectives[RandomIndex(adjectives.length)] + " " + nouns[RandomIndex(nouns.length)] + " " + verbs[RandomIndex(verbs.length)] + " " + adverbs[RandomIndex(adverbs.length)] + ".";

    let w_offset = Math.random() * div.clientWidth;
    let h_offset = Math.random() * div.clientHeight;
    text.style.left = w_offset + "px"
    text.style.top = h_offset + "px"
})