import React, { Component } from 'react';
import {ProductConsumer} from './context.js';
import {Link} from 'react-router-dom';

import StyledButton from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          (value) => {
            const {id,title,img,price,info,inCart,company} = value.detailProducts;

            return(
              <div className='container py-5'>
                <div className='row'>
                  <div className='cal-10 max-auto text-center text-slanted text-blue my-5'>
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className='row'>
                  <div className='cal-10 max-auto col-md-6 my-3'>
                    <img src={img} alt={title} className='img-fluid'/>
                  </div>
                  <div className='cal-10 max-auto col-md-6 my-3 text-capitalize'> 
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                      made by: <span className='text-uppercase'>{company}</span>
                    </h4>
                    <h4 className='text-blue'>
                      <strong>
                        price: <span>$</span>{price}
                      </strong>
                    </h4>
                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                      some info about product:
                    </p>
                    <p className='text-muted lead'>
                      {info}
                    </p>
                    <div>
                      <Link to='/'>
                        <StyledButton>
                          back to products
                        </StyledButton>
                      </Link>
                      <StyledButton
                        disabled={inCart ? true : false}
                        onClick={() => {value.addToCart(id); value.openModal(id);}}
                        cart
                      >
                        {inCart? 'inCart':'add to cart'}
                      </StyledButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }
      </ProductConsumer>
    );
  }
}
