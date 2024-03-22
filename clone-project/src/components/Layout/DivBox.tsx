import styled from "styled-components";
import "./DivBox.css";

const DivBox = () => {
  return (
    <DivBoxWrap>
      <div className='div2'></div>
      <div className='div3'></div>
    </DivBoxWrap>
  );
};

export default DivBox;

const DivBoxWrap = styled.div`
  width: 100%;
  height: 456px;
  padding: 72px 0;
  background-color: black;
`;
