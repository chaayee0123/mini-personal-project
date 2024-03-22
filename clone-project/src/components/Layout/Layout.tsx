// import styled from "styled-components";
import Banner from "../Main/Banner/Banner";
import Email from "../Main/Email/Email";
import FreeWatch from "../Main/FreeWatch";
import Watchtv from "../Main/Watchtv";
import Nav from "../Nav/Nav";

import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className='back-wrapper'>
        <Nav />
        <div className='wrapper'>
          <h3>영화, 시리즈 등을 무제한으로</h3>
          <span className='sentence1'>
            어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.
          </span>
        </div>
        <Email />
      </div>
      <Banner />
      <Watchtv />
      <FreeWatch />
    </>
  );
};

export default Layout;

// const Wrapper = styled.div`
//   margin: 0;
//   padding: 0;
//   width: 100vw;
//   height: 456px;
//   background-image: url("../../picture/background.jpg");
// `;
