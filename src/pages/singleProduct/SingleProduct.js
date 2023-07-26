import React, { useEffect, useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { useParams, useNavigate } from 'react-router-dom';
import { products_url as url } from '../../utils/constants';
// import {
//   // AddToCart,
//   // Stars,
// } from '../components';
import Error from '../../components/error/Error';
import Loading from '../../components/loading/Loading';
import Stars from '../../components/stars/Stars';
import ProductImage from '../../components/productImage/ProductImage';
import AddToCart from '../../components/addToCart/AddToCart';
import AddToWishlist from '../../components/addToWishlist/AddToWishlist';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SingleProduct() {
  const { productId } = useParams();
  const {
    singleProductLoading,
    singleProductError,
    singleProduct,
    fetchSingleProduct,
  } = useContext(ProductsContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(`${url}/${productId}`);
  }, [productId]);

  useEffect(() => {
    if (singleProductError) {
      setTimeout(() => navigate('/'), 3000);
    }
  }, [singleProductError]);

  const {
    title,
    director,
    price,
    releaseYear,
    rating,
    description,
    image,
    genres,
  } = singleProduct;

  return (
    <>
      {singleProductLoading && <Loading />}
      {singleProductError && <Error />}
      {!singleProductLoading && !singleProductError && (
        <Wrapper>
          <div className="section section-center page">
            <div className="product-center">
              <ProductImage image={image} />
              <section className="content">
                <h2>{title}</h2>
                <Stars rating={rating} />
                <h5 className="price">₹{price}</h5>
                <p className="desc">{description}</p>
                <p className="info">
                  <span>Year : </span>
                  {releaseYear}
                </p>
                <p className="info">
                  <span>Genres : </span>
                  {genres?.map((genre, index) => (
                    <React.Fragment key={index}>{genre} </React.Fragment>
                  ))}
                </p>
                <p className="info">
                  <span>Director : </span>
                  {director}
                </p>
                <hr />
                <div className="btns">
                  <AddToCart singleProduct={singleProduct} />
                  <AddToWishlist singleProduct={singleProduct} />
                </div>
              </section>
            </div>
            <Link to="/products" className="btn">
              back to movies
            </Link>
          </div>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.main`
  .section {
    padding: 2rem 0;
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    h2 {
      color: var(--clr-purple);
    }
  }
  .price {
    color: var(--clr-blue-light);
  }
  .desc {
    color: var(--clr-grey-6);
    line-height: 2;
    max-width: 45em;
  }
  .info {
    color: var(--clr-grey-7);
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .btns {
    display: flex;
  }
  .btn {
    margin-top: 1rem;
  }

  @media (min-width: 850px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
