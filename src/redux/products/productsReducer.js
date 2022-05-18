
const initialstate = {
    products:[],
    itemsCounter: 0,
    total: 0,
    checkOut:true
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => total + parseInt(product.price) * product.quantity, 0);
    return {itemsCounter, total}
}

const reducer = (state=initialstate, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.products.find(items => items.id === action.payload.id)) {
                state.products.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            else{
                const index = state.products.findIndex(items => items.id === action.payload.id);
                state.products[index].quantity++;
            }
            return{
                ...state,
                ...sumItems(state.products),
                checkOut:false
            }
        
        case "REAMOVE":
            const newProducts = state.products.filter(items => items.id !== action.payload.id);
            return{
                ...state,
                products:newProducts,
                ...sumItems(newProducts),
            }

        case "INCREASE":
            const indexI = state.products.findIndex(item => item.id === action.payload.id)
            state.products[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.products)
            }

        case "DECREASE":
            const index2 = state.products.findIndex(item => item.id === action.payload.id)
            state.products[index2].quantity--;
            return {
                ...state,
                ...sumItems(state.products)
            }
        case "CHECKOUT":
            return{
                products:[],
                itemsCounter: 0,
                total: 0,
                checkOut:true
            }
    
        default:
            return state;
    }
}

export default reducer;