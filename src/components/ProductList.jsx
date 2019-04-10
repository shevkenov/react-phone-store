import React, { Component, Fragment } from 'react';

import Title from './Title';
import {ProductConsumer} from './context.js';
import Product from './Product';

export default class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='our' title='product'/>
            <div className='row'>
              <ProductConsumer>
                {(data) => {
                  const {products} = data;
                  return products.map(p => {
                    return <Product key={p.id} product={p}/>;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
