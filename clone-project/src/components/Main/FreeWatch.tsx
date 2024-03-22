import styled from "styled-components";
import "./FreeWatch.css";

const FreeWatch = () => {
  return (
    <DivBoxWrap>
      <div className='main-wrap3'>
        <img className='tv1' src='../../picture/tv.png' />
        <div>
          <h2 className='enjoytv1'>TV로 즐기세요</h2>
          <div className='main-sent1'>
            스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 <br />
            플레이어 등 다양한 디바이스에서 시청하세요.
          </div>
        </div>
      </div>
    </DivBoxWrap>
  );
};

export default FreeWatch;

const DivBoxWrap = styled.div`
  width: 100%;
  height: 456px;
  padding: 68px 0;
  background-color: black;
  display: flex;
  flex-direction: row;
  vertical-align: middle;
`;
