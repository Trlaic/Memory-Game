import { useNavigate } from 'react-router-dom';
import style from './ErrorPage.module.scss';

const ErrorPage = () => {

    const navigate = useNavigate()
    function handleClick() {
        navigate('/')
    }

  return (
    <div className={style.error_page}>
      <div className= {style.error_container}>
        <h1 className={style.error_code}>Non-existent page</h1>
        <button className={style.button} onClick={handleClick}>HOME PAGE</button>
      </div>
    </div>
  );
};

export default ErrorPage;
