import React , {useState , useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import {useDispatch} from 'react-redux';
import {addCart} from './../actions';

function Product() {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (item) => {
        dispatch(addCart(item));
    }

    const getProduct = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false);
    }

    useEffect(() => {
        getProduct();
    },[]);

    const Loading = () => {
        return(
            <>
                <div className="col-sm-12 col-lg-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-sm-12 col-lg-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft: 6}} />
                </div>
            </>
        )
    };

    const ShowProduct = () => {
        return(
            <>
                <div className="col-sm-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center">
                    <img src={product.image} alt={product.title} height="400px" width="80%" />
                </div> 
                <div className="col-sm-12 col-lg-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="dispaly-5">
                        {product.title}
                    </h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2 me-2" onClick={() => addProduct(product)} >Add To Cart</button>
                    <NavLink to="/cart" className="btn btn-dark px-4 py-2">Go To Cart</NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product
