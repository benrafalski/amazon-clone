export const initialState = {
    cart: [],
}

// selector
export const getCartTotal = (cart) => {
    return cart?.reduce((amount, item) => item.price + amount, 0)
}

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state, cart: [...state.cart, action.item],
            }
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex((cartItem) => 
                cartItem.id === action.id
            )
            let newCart = [...state.cart]

            index >= 0
                ? newCart.splice(index, 1)
                : console.warn(`Can't remove product (id: ${action.id}), not found in cart`)

            return { ...state, cart: newCart }
        default:
            return state
    }
}

export default reducer