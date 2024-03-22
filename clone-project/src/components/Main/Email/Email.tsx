import { SlArrowRight } from "react-icons/sl";
import "./Email.css";

const Email = () => {
  return (
    <div className='email-wrapper'>
      <span className='sentence2'>
        시청할 준비가 되셨나요?멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </span>
      <div className='email-input'>
        <input placeholder='이메일 주소' className='input-box' />
        <button className='start'>
          시작하기 <SlArrowRight size='13px' />
        </button>
      </div>
    </div>
  );
};

export default Email;
