import { DayChoice } from "./DayChoice.js"
import { getKindOfDay } from "./transientState.js"

const target = document.querySelector("#container")
const dayChoice = getKindOfDay()

let UI = ""

if (dayChoice === "") {
    // Invoke the DayChoice() function
    UI = DayChoice()
}

target.innerHTML = UI