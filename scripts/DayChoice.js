import { setDayChoice } from "./transientState.js"

document.addEventListener(
    "click",
    (clickityClickEvent) => {
        const whatWasClicked = clickityClickEvent.target

        if (whatWasClicked.id === "good" || whatWasClicked.id === "bad") {
            setDayChoice(whatWasClicked.id)
        }
    }
)


export const DayChoice = () => {
    return `
        <h1>What kind of day are you having?</h1>

        <article>
            <section>
                <button id="good">Good Day</button>
            </section>
            <section>
            <button id="bad">Bad Day</button>
            </section>
        </article>
    `
}