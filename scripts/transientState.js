const state = {
    kindOfDay: "",
    numberOfResponses: 0
}

export const getKindOfDay = () => {
    return state.kindOfDay
}

export const getNumberOfResponses = () => {
    return state.numberOfResponses
}

export const setDayChoice = (choice) => {
    state.kindOfDay = choice
    console.log(state)

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setResponses = (number) => {
    state.numberOfResponses = number
    console.log(state)

    document.dispatchEvent(new CustomEvent("stateChanged"))
}