export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}

export const qtyPlus = (product) => {
    return{
        type : "QTYPLUS",
        payload : product
    }
}

export const qtyMinus = (product) => {
    return{
        type : "QTYMINUS",
        payload : product
    }
}

export const toggleHandler = () => {
    return{
        type : "TOGGLE_NAV",
    }
}