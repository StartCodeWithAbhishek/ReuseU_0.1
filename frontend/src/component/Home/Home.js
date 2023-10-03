import React, { Fragment, useEffect } from "react";
import { CgLaptop, CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";





const Home = () => {
  const alert = useAlert();
const { loading, error, products } = useSelector((state) => state.products);

const dispatch = useDispatch();
  useEffect(() => {
if(error){
  return alert.error(error);
}


    dispatch(getProduct());
  }, [dispatch,error,alert]);

return (
  <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title="HOME" />

        <div className="banner">
          <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>

          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
          {products && products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </Fragment>
    )}
  </Fragment>
);
};
export default Home;
