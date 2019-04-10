import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ProductConsumer } from "./context.js";
import Button from "./Button";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { closeModal, modalOpen} = value;
          const { img, price, title } = value.modalDetails;

          if (!modalOpen) {
            return null;
          } else {
              return(
                <ModuleWrapper>
                    <div className='container'>
                        <div className='row'>
                            <div id='modal' className='col-8 max-auto col-md-6 col-lg-4 tex-center text-capitalize p-5'>
                                <h5>
                                    item added to the cart
                                </h5>
                                <img src={img} alt="product" className='img-fluid'/>
                                <h5>{title}</h5>
                                <h5 className='text-muted'>price : ${price}</h5>
                                <Link to='/'>
                                    <Button onClick={closeModal}>continue shoping</Button>
                                </Link>
                                <Link to='/cart'>
                                    <Button onClick={closeModal} cart>go to cart</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ModuleWrapper>
              );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModuleWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background: var(--mainWhite);
    }
`;
