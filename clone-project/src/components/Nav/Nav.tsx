import styled from "styled-components";
import "./Nav.css";

const Nav = () => {
  return (
    <NavWrapper>
      <h1 className='title'>NETNET</h1>
      <button className='login'>로그인</button>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  z-index: 100;
`;
