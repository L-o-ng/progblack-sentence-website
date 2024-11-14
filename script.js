adjectives = ["quick", "lazy", "sleepy", "noisy", "hungry", "happy", "sad", "angry", "bright", "dark", "shiny", "dull", "brave", "cowardly", "fierce", "gentle", "kind", "cruel", "funny", "serious"];
nouns = ["dog", "cat", "car", "tree", "house", "river", "mountain", "book", "computer", "phone", "city", "village", "ocean", "forest", "desert", "bird", "fish", "flower", "star", "planet"];
verbs = ["runs", "jumps", "swims", "flies", "drives", "writes", "reads", "sings", "dances", "eats", "drinks", "sleeps", "talks", "listens", "watches", "plays", "works", "studies", "laughs", "cries"];
adverbs = ["quickly", "slowly", "loudly", "quietly", "happily", "sadly", "angrily", "eagerly", "bravely", "carefully", "recklessly", "gently", "roughly", "kindly", "cruelly", "funnily", "seriously", "brightly", "darkly", "sharply"];

let btn = document.getElementById("btn-gen");
let text = document.getElementById("text");
let div = document.getElementById("div-btn-container");
let adj_in = document.getElementById("adjective-input");
let noun_in = document.getElementById("noun-input");
let verb_in = document.getElementById("verb-input");
let adv_in = document.getElementById("adverb-input");
let submit = document.getElementById("submit");

btn.addEventListener("click", () => {
    text.innerHTML = "The " + adjectives[RandomIndex(adjectives.length)] + " " + nouns[RandomIndex(nouns.length)] + " " + verbs[RandomIndex(verbs.length)] + " " + adverbs[RandomIndex(adverbs.length)] + ".";

    let w_offset = Math.random() * div.clientWidth;
    let h_offset = Math.random() * div.clientHeight;
    text.style.left = w_offset + "px"
    text.style.top = h_offset + "px"
})

submit.addEventListener("click", () => {
    if (adj_in.value != "") {adjectives.push(adj_in.value);}
    if (noun_in.value != "") {nouns.push(noun_in.value);}
    if (verb_in.value != "") {verbs.push(verb_in.value);}
    if (adv_in.value != "") {adverbs.push(adv_in.value);}
    adj_in.value = "";
    noun_in.value = "";
    verb_in.value = "";
    adv_in.value = "";
})

function RandomIndex(ceiling) {
    if (!Number.isInteger(ceiling)) {alert("Non-integer made its way into the system!"); return;}
    
    const max = Math.floor(ceiling);
    return Math.floor(Math.random() * max)
}
