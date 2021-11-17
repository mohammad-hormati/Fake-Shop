

export const handleCart = (state=[] , action) => {
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((item) => item.id === action.payload.id)
            if(exist){
                return (
                    state.map((item) => (
                        item.id === action.payload.id ? {...item , qty : item.qty + 1} : item
                    ))
                )
            }else{
                return[
                    ...state,
                    {
                        ...action.payload,
                        qty: 1,
                    }
                ]
            }
        case "DELITEM":
            const exist_1 = state.find((item) => item.id === action.payload.id);
            if(exist_1.qty === 1){
                return state.filter((item) => item.id !== exist_1.id);
            }else{
                return state.map((item) => (
                    item.id === action.payload.id ? {...item , qty: item.qty - 1} : item
                ))
            }
        case "QTYPLUS":
            const exist_plus = state.find((item) => item.id === action.payload.id);
            if(exist_plus){
                return state.map((item) => (
                    item.id === action.payload.id ? {...item , qty : item.qty += 1} : item
                ))
            }else{
                return[
                    ...state
                ]
            }
        case "QTYMINUS":
            const exist_minus = state.find((item) => item.id === action.payload.id);
            if(exist_minus){
                return state.map((item) => (
                    item.id === action.payload.id ? {...item , qty : item.qty -= 1} : item
                ))
            }else{
                return[
                    ...state
                ]
            }
        default:
           return state;
    }
}