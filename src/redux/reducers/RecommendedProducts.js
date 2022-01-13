import axios from "axios";

let initialState = {
    products: [],
    loading: false,
}

const SET_RECOMMENDED = "SET_RECOMMENDED"

const RecommendedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECOMMENDED:
            state.products = action.products
            return state

        default:
            return state
    }
}

export const setRecommended = (payload) => ({type: SET_RECOMMENDED, products: payload})

export const getRecommended = () => {
    return async (dispatch) => {
        axios.get('https://ecommerce-lesson.herokuapp.com/dev/client/product/recommended').then(response => {
            if (response.data.products) {
                dispatch(setRecommended(response.data.products))
            }
        }).catch(error => {
            console.log(error)
        })
    }
}


export default RecommendedReducer;