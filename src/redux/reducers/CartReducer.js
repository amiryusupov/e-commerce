let AddToCard = 'ADD_TO_CARD'
let DeleteToCard = 'DELETE_TO_CARD'
let ChangeQty = 'ChangeQty'

let initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse((localStorage.getItem('cart'))): [],
}


let CardReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddToCard:
            let isTrue = state.cart.find(item => item.id === action.item.id ? true : false)
            state.cart = isTrue ? state.cart.map(item => item.id === action.item.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...action.item, qty: 1}]
            localStorage.setItem("cart", JSON.stringify(state.cart))
            return state
        case DeleteToCard:
            state.cart = state.cart.filter((item) => item.id !== action.item);
            localStorage.setItem("cart", JSON.stringify(state.cart))
            return state
        case ChangeQty:
            state.cart = state.cart.map(item => item.id === action.id ? {...item, qty: action.id} : item);
            localStorage.setItem("cart", JSON.stringify(state.cart))
            return state
        default:
            return state
    }
}

export const AddToCart = (item) => ({type: AddToCard, item: item})
export const DeleteToCart = (id) => ({type: DeleteToCard, item: id})
export const CHANGE_QTY = (id, qty) => ({type: ChangeQty, id: id, qty: qty})

export default CardReducer;