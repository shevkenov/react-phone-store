import React, { Component } from 'react';

import {storeProducts,detailProduct} from '../data/data.js';

const ProductContext = React.createContext();
 
class ProductProvider extends Component {
    constructor(){
        super();

        this.state = {
            products: [],
            detailProducts: detailProduct,
            cart: [],
            modalDetails: detailProduct,
            modalOpen: false,
            cartSubTotal: 0,
            cartTotal: 0,
            cartTax: 0,
        };

        this.handleDetails = this.handleDetails.bind(this);
        this.getItem = this.getItem.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.clearCart = this.clearCart.bind(this);
        this.calcTotals = this.calcTotals.bind(this);
    }

    setProducts(){
        let tempProducts = [];
        storeProducts.forEach(product => {
          const item = {...product};
          tempProducts = [...tempProducts,item];
        });
        
        this.setState({
          products: tempProducts
        });
    }

    componentDidMount(){
      this.setProducts();
    }

    getItem(id){
      return this.state.products.find(prd => prd.id === id);
    }

    handleDetails(id){
      const product = this.getItem(id);
      this.setState({
        detailProducts: product
      });
    };

    addToCart(id){
      const tempProducts = [...this.state.products];
      const idx = tempProducts.indexOf(this.getItem(id));
      const item = tempProducts[idx];
      item.inCart = true;
      item.count = 1;
      item.total = item.price;

      this.setState({
        products: tempProducts,
        cart: [...this.state.cart, item],
      }, () => {
        this.calcTotals();
      });
    };

    openModal(id){
      const product = this.getItem(id);
      this.setState({
        modalDetails: product,
        modalOpen: true,
      });
    }

    closeModal(){
      this.setState({
        modalOpen: false
      });
    }

    increase(id){
      const tempCart = this.state.cart.map(item => {
        if(item.id === id){
          item.count += 1;
          item.total += item.price;
        }

        return item;
      });

      this.setState({
        cart: tempCart,
      }, () => {
        this.calcTotals();
      });
    }

    decrease(id){
      const tempCart = this.state.cart.map(item => {
        if(item.id === id && item.count > 1){
          item.count -= 1;
          item.total -= item.price;
        }

        return item;
      });

      this.setState({
        cart: tempCart,
      }, () => {
        this.calcTotals();
      });
    }

    removeItem(id){
      let tempCart = [...this.state.cart];
      const cartItem = this.getItem(id);
      const tempProducts = this.state.products.map(item => {
        if(item === cartItem){
          item.inCart = false;
          item.count = 0;
          item.total = 0;
        }
        return item;
      });

      tempCart = tempCart.filter(item => {
        return item !== cartItem;
      });
      
      this.setState({
        cart: tempCart,
        product: tempProducts
      }, () => {
        this.calcTotals();
      });
    }

    clearCart(){
      this.setState({
        cart: []
      }, () => {
        this.setProducts();
        this.calcTotals();
      });
    }

    calcTotals(){
      const subtotal = this.state.cart.reduce((acc,item) => {
        return acc += item.total; 
      },0);

      const tax = parseFloat(subtotal * 0.2).toFixed(2);
      const total = (+subtotal + +tax).toFixed(2);

      this.setState({
        cartSubTotal: subtotal,
        cartTax: tax,
        cartTotal: total
      });
    }

    render() {
    return (
      <ProductContext.Provider 
        value={
          {
            ...this.state, 
            handleDetails: this.handleDetails, 
            addToCart: this.addToCart,
            openModal: this.openModal,
            closeModal: this.closeModal,
            increase: this.increase,
            decrease: this.decrease,
            removeItem: this.removeItem,
            clearCart: this.clearCart
          }}>
        {this.props.children}       
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
