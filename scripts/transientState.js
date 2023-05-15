const state = {
    kindOfDay: ""
}

export const getKindOfDay = () => {
    return state.kindOfDay
}

export const setDayChoice = (choice) => {
    state.kindOfDay = choice
    console.log(state)
}