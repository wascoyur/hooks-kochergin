import { Link } from 'react-router-dom';
import { useState } from 'react';

const Auth = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    console.log(count);
    setCount(count +1)
  };
  return (
    <div className='auth-page'>
      <button onClick={() => handleCount()}>Count {count}</button>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Вход</h1>
            <p className='text-xs-center'>
              <Link to='/register'>Нужен аккаунт?</Link>
            </p>
            <form>
              <fieldset>
                <fieldset className='form-group'>
                  <input
                    type='email'
                    className='form-control form-control-lg'
                    placeholder='Введите email'
                  ></input>
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    type='password'
                    className='form-control form-control-lg'
                    placeholder='Введите пароль'
                  ></input>
                </fieldset>
                <button
                  className='btn btn-lg btn-primary pull-xsright'
                  type='submit'
                >
                  Войти
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
