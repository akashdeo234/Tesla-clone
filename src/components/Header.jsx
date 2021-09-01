import React, { useContext, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link, useHistory} from "react-router-dom";
import { userContext } from "./Context/Context";
function Header() {
  const history = useHistory();
  const {name,setName} = useContext(userContext);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const signOutHandler = () => {

    history.push('/login')
    setName('');
  }
  return (
    <Container>
      <Link to='/'>
        <img src="/images/logo.svg" alt="tesla-logo" />
      </Link>
      <MenuGroup>
        <div>
          <Link to='/TeslaS'>Model S</Link>
        </div>
        <div>
          <Link to='/TeslaX'>Model X</Link>
        </div>
        <div>
          <Link to='TeslaY'>Model Y</Link>
        </div>
      </MenuGroup>
      <RightMenu>
        <a href="#">Shop</a>
       {name ? <Link>Welcome {name}</Link> : <Link onClick={()=> history.push('/login')}>Sign In</Link>} 
      {name ? <Link onClick={signOutHandler}>SignOut</Link> : ''} 

        <MenuIconContainer>
          <MenuIcon onClick={() => setBurgerMenu(true)} />
        </MenuIconContainer>
      </RightMenu>
      <BurgerNav show={burgerMenu}>
        <CloseWrapper>
          <CloseIcon onClick={() => setBurgerMenu(false)} />
        </CloseWrapper>
        <li>
          <a href="#">EXISTING INVENTORY</a>
        </li>
        <li>
          <a href="#">USED INVENTORY</a>
        </li>
        <li>
          <a href="#">TRADE IN</a>
        </li>
        <li>
          <a href="#">TEST DRIVE</a>
        </li>
        <li>
          <a href="#">CYBERTRUCK</a>
        </li>
        <li>
          <a href="#">ROADSTER</a>
        </li>
        <li>
          <a href="#">SEMI</a>
        </li>
        <li>
          <a href="#">POWERWALL</a>
        </li>
        <li>
          <a href="#">COMMERCIAL ENERGY</a>
        </li>
        <li>
          <a href="#">UTILITES</a>
        </li>
        <li>
          <a href="#">FIND US</a>
        </li>
        <li>
          <a href="#">SUPPORT</a>
        </li>
        <li>
          <a href="#">INVESTOR RELATION</a>
        </li>
        <li>
          <a href="#">INDIA</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  display: flex;
  text-transform: uppercase;
  a img {
    height: 15px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 10px;

    a img {
      height: 15px;
    }
  }
`;

const MenuGroup = styled.div`
  display: flex;
  text-transform: uppercase;
  margin-left: 90px;

  div {
    font-weight: 600;
    padding: 0 10px;
    cursor: pointer;
    font-size: 14px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding-right: 10px;
    font-size: 14px;
  }

  @media only screen and (max-width: 600px) {
    a {
      font-size: 12px;
    }
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;

  top: 5px;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
  transition: 0.5s ease;

  li {
    padding: 15px 0;
    border-bottom: 1px solid black;
  }
  a {
    font-weight: 600;
    font-size: 11px;
    letter-spacing: 2px;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
export default Header;
