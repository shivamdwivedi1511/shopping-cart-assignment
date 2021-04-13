const initialState = {
    show: false,
};

const SHOW_CART = 'CART/show';
const HIDE_CART = 'CART/hide';
const TOOGLE_CART = 'CART/toggle';

export const cartActions = {
    showcart: {
        type: SHOW_CART,
    },
    hidecart: {
        type: HIDE_CART,
    },
    toggleCart: (payload) => ({
        type: TOOGLE_CART,
        payload: payload
    })
};

export const CartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_CART:
            {
                return { show: true };
            }
        case HIDE_CART:
            {
                return { show: false };
            }
        case TOOGLE_CART:
            {
                return { show: payload }
            }
        default:
            return state;
    }
};