import YouTube from "react-youtube";
import styled from "styled-components";
import "./Watchtv.css";

const Watchtv = () => {
  return (
    <DivBoxWrap>
      <div className='main-wrap2'>
        <div>
          <h2 className='enjoytv'>TV로 즐기세요</h2>
          <div className='main-sent'>
            스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 <br />
            플레이어 등 다양한 디바이스에서 시청하세요.
          </div>
        </div>
        <YouTube
          videoId='https://youtu.be/EsOjpf0JHEA?si=FJ9YSkCr7EtNpgNx' //동영상 주소
          opts={{
            width: "294px",
            height: "200px",
            playerVars: {
              autoplay: 1, //자동 재생 여부
              modestbranding: 0, //컨트롤 바에 유튜브 로고 표시 여부
              loop: 1, //반복 재생
            },
          }}
          onReady={(e) => {
            e.target.mute(); //소리 끔
          }}
        />
        {/* <Iframe
          src='https://www.youtube.com/embed/EsOjpf0JHEA?si=QUM8x2Iod7PXAbpV'
          allowfullscreen
        ></Iframe> */}
        <img className='tv' src='../../picture/tv.png' />
      </div>
    </DivBoxWrap>
  );
};

export default Watchtv;

export const DivBoxWrap = styled.div`
  width: 100%;
  height: 456px;
  padding: 68px 0;
  background-color: black;
  display: flex;
  flex-direction: row;
  vertical-align: middle;
`;
const Iframe = styled.iframe`
  position: fixed;
  left: 596px;
  bottom: 380px;
  width: 294px;
  height: 200px;
  z-index: 0;
`;
