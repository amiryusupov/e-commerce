import axios from "axios";

const SET_FILTERED_PRODUCTS = "SET_FILTERED_PRODUCTS"
const SET_ONE_PRODUCT = "SET_ONE_PRODUCT"
const SET_LOADING = "SET_LOADING"

let initialState = {
    filteredProducts: [],
    oneProduct: {},
    loading: false
}


const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERED_PRODUCTS:
            state.filteredProducts = action.products
            return state
        case SET_ONE_PRODUCT:
            state.oneProduct = action.product
            return state
        case SET_LOADING:
            state.loading = action.loading
            return state
        default:
            return state
    }
}

export const setFilteredProducts = (payload) => ({type: SET_FILTERED_PRODUCTS, products: payload})
export const setOneProduct = (payload) => ({type: SET_ONE_PRODUCT, product: payload})
export const setLoading = (payload) => ({type: SET_LOADING, loading: payload})

export const getFilteredProducts = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        axios.get(`https://ecommerce-lesson.herokuapp.com/dev/client/product/list`).then((response) => {
            if (response.data.products) {
                dispatch(setFilteredProducts(response.data.products))
            }
                dispatch(setLoading(false))
        }).catch(error => {
            console.log(error)
        })
    }
}


export const getOneProduct = (slug) => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        axios.get(`https://ecommerce-lesson.herokuapp.com/dev/client/product/${slug}`).then((response) => {
            if (response.data.product) {
                dispatch(setOneProduct(response.data.product))
            }
            dispatch(setLoading(false))
        }).catch(error => {
            console.log(error)
        })
    }
}


export default ProductsReducer;