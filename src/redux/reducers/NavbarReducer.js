import axios from "axios";

let initialState = {
    categories: [],
    searchedProducts: [],
    loading: false,
}

const SET_CATEGORIES = "SET_CATEGORIES"

const NavbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            state.categories = action.categories
            return state
        default:
            return state
    }
}

export const setCategories = (payload) => ({type: SET_CATEGORIES, categories: payload})

export const getCategories = () => {
    return async (dispatch) => {
        axios.get('https://ecommerce-lesson.herokuapp.com/dev/client/category/list').then(response => {
            if (response.data.categories) {
                dispatch(setCategories(response.data.categories))
            }
        }).catch(error => {
            console.log(error)
        })
    }
}


export default NavbarReducer;