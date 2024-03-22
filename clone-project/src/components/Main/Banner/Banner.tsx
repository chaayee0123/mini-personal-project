import { SlArrowRight } from "react-icons/sl";
import styled from "styled-components";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <BannerWrap>
        <div className='membership-wrap'>
          <div className='img-wrap'>
            <img
              className='popcorn'
              src='../../picture/popcorn.jpg'
              alt='왜 안뜰까요?'
            />
          </div>
          <div className='main-wrap1'>
            <div>5,500원이면 만날 수 있는 넷플릭스.</div>
            <div>광고형 스탠다드 멤버십에 가입하세요.</div>
            <button role='link' className='detail-btn'>
              자세히 알아보기 <SlArrowRight size='10px' />
            </button>
          </div>
        </div>
      </BannerWrap>
    </>
  );
};

export default Banner;

const BannerWrap = styled.div`
  width: 100%;
  height: 140px;
  align-items: center;
  line-height: 1.5;
  background: radial-gradient(
    51.39% 511.66% at 47.68% -217.91%,
    #ff9900 0%,
    #e50914 17.27%,
    #0e1b4f 79.44%,
    #000413 100%
  );
`;
