const initialState = {
    show: false,
};

const SHOW_CART = 'CART/show';
const HIDE_CART = 'CART/hide';
const TOOGLE_CART = 'CART/toggle';

const toggleCartOverflow = (val) => {
    let body = document.body;
    if (val)
        body.classList.add("showCart");
    else body.classList.remove('showCart')
}

export const cartActions = {
    showcart: {
        type: SHOW_CART,
    },
    hidecart: () => {
        toggleCartOverflow(false);
        return {
            type: HIDE_CART,
        }
    },
    toggleCart: (payload) => {
        toggleCartOverflow(payload)
        return {
            type: TOOGLE_CART,
            payload: payload
        }
    }
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