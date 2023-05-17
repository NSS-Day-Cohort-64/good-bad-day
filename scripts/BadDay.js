import { getNumberOfResponses, setResponses } from "./transientState.js"

let numberOfResponses = 0

const fetchInsult = async () => {
    const insult = await fetch("https://www.foaas.com/horse/Jonathan", {
        headers: {
            "Accept": "application/json"
        }
    }).then(response => response.json())

    numberOfResponses++

    return insult
}

const handleRegenerateClick = (event) => {
    if (event.target.id === "regenerateBad") {
        let currentResponseCount = getNumberOfResponses()
        currentResponseCount++
        setResponses(currentResponseCount)
    }
}

export const BadDay = async () => {
    const text = await fetchInsult()
    let currentResponseCount = getNumberOfResponses()

    document.addEventListener("click", handleRegenerateClick)


    return `<h1>Evil Insult</h1>

        <article class="insultText">${currentResponseCount} ${text.message} ${text.subtitle}</article>
        <button id="regenerateBad">Regenerate</button>
    `
}