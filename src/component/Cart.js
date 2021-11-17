import React from 'react';
import {useSelector ,useDispatch} from 'react-redux';
import {qtyPlus , qtyMinus} from './../actions'


function Cart() {


    const carts = useSelector(state => state.handleCart);
    const dispatch = useDispatch();

    const handleButtonPlus = (cart) => {
        dispatch(qtyPlus(cart))
    };

    const handleButtonMinus = (cart) => {
        dispatch(qtyMinus(cart))
    }

    return (
        <div>
            <div className="container py-5">
                {carts.length !== 0 ? (
                                    <div className="row">
                                    {carts.map((cart) => {
                                        return(
                                            <>
                                                <div className="col-md-6 mb-4 d-flex justify-content-center align-item-center">
                                                    <img src={cart.image} alt={cart.title} width="180px" height="200px" />
                                                </div>
                                                <div className="col-md-6 mb-4 d-flex flex-column justify-content-center align-item-center">
                                                    <h3 className="text-center">{cart.title}</h3>
                                                    <p className="lead fw-bold text-center">
                                                        {cart.qty} X $ {cart.price} = $ {cart.qty * cart.price}
                                                    </p>
                                                    <div className="bottons text-center">
                                                        <button className="btn btn-outline-dark me-4" onClick={() => handleButtonMinus(cart)}>
                                                            <i className="fa fa-minus"></i>
                                                        </button>
                                                        <button className="btn btn-outline-dark " onClick={() => handleButtonPlus(cart)}>
                                                            <i className="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                ) : (
                    <div className="row">
                        <div className="col-12">
                            <h3 className="display3 fw-bold">YOUR CART IS EMPTY</h3>
                            <p className="lead">Please Select Item And Click BUY</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
