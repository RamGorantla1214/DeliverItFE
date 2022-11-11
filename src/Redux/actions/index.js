export const addToState = (address) => ({
    type: 'SET_STATE',
    payload: address
})

export const setEircode = (eircode) => ({
    type: 'SET_EIRCODE',
    payload: eircode
})

export const setPickupAddress = (pickup) => ({
    type: 'SET_PICKUP',
    payload: pickup
})

export const setDropAddress = (drop) => ({
    type: 'SET_DROP',
    payload: drop
})

export const setDate = (date) => ({
    type: 'SET_DATE',
    payload: date
})

export const setInstructions = (instructions) => ({
    type: 'SET_INSTRUCTIONS',
    payload: instructions
})