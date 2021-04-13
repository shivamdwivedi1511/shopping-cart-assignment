import { map } from "lodash";

const initialState = {
    products: [],
    store: []
};

const ALL_PRODUCTS = 'PRODUCT/saveproducts';
const ADD_TO_CART = 'PRODUCT/addtocart';
const REMOVE_FROM_CART = 'PRODUCT/removecart'

export const productActions = {
    saveProduct: (payload) => ({
        type: ALL_PRODUCTS,
        payload: payload
    }),
    addToCart: (id) => ({
        type: ADD_TO_CART,
        payload: id
    }),
    removeCart: (id) => ({
        type: REMOVE_FROM_CART,
        payload: id
    })
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ALL_PRODUCTS:
            return {...state, products: payload }
        case ADD_TO_CART:
            {

                return {
                    ...state,
                    products: map(state.products, function(i) {
                        return (i.id === payload) ? {...i, count: i.count + 1, stock: i.stock - 1 } : i
                    })
                }
            }
        case REMOVE_FROM_CART:
            {

                return {
                    ...state,
                    products: map(state.products, function(i) {
                        return (i.id === payload) ? {...i, count: i.count - 1, stock: i.stock + 1 } : i
                    })
                }
            }
        default:
            return state;
    }
};