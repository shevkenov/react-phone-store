import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import StyledButton from './Button';
import styled from 'styled-components';
import logo from '../logo.svg';

export default class Navbar extends Component{
    render(){
        return(
            <NavWrapper className='navbar navbar-expand-sm primary-dark px-sm-5'>
                <NavLink to='/' className='nav-link'>
                    <img src={logo} alt='store' height="62" 
                    width="62" className='navbar-brand'/>
                </NavLink>
                <ul className="navbar-nav align-items-center">
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Product
                        </Link>
                    </li>
                </ul>
                <NavLink to='/cart' className='ml-auto'>
                    <StyledButton>
                        <span className='mr-2'>
                            <i className="fas fa-cart-plus"> My cart</i>
                        </span>
                    </StyledButton>
                </NavLink>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
      color: var(--mainWhite)!important;
      font-size: 1.5rem;
      text-transform: capitalize;
  }
`;
