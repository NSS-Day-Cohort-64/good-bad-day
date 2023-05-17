import { BadDay } from "./BadDay.js"
import { DayChoice } from "./DayChoice.js"
import { GoodDay } from "./GoodDay.js"
import { getKindOfDay } from "./transientState.js"

const target = document.querySelector("#container")

let UI = ""

const renderMainHTML = async () => {
    const dayChoice = getKindOfDay()

    if (dayChoice === "") {
        // Invoke the DayChoice() function
        UI = DayChoice()
    }
    else if (dayChoice === "good") {
        UI = GoodDay()
    }
    else if (dayChoice === "bad") {
        UI = await BadDay()
    }
    target.innerHTML = UI
}
renderMainHTML()


document.addEventListener("stateChanged", renderMainHTML)