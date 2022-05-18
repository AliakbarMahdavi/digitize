export const add_item = (data) => {
    return{type:"ADD_ITEM", payload:data};
}

export const reamove_item = (data) => {
    return{type:"REAMOVE", payload:data};
}

export const decrease_item = (data) => {
    return{type:"DECREASE", payload:data}
}

export const increase_item = (data) => {
    return{type:"INCREASE", payload:data}
}

export const checkOut_item = () => {
    return{type:"CHECKOUT"}
}