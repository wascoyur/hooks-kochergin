import { Link } from 'react-router-dom';
import { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEvent = e => {
    e.preventDefault();
    console.log('data:', email, password);

  };
  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Вход</h1>
            <p className='text-xs-center'>
              <Link to='/register'>Нужен аккаунт?</Link>
            </p>
            <form onSubmit={handleEvent}>
              <fieldset>
                <fieldset className='form-group'>
                  <input
                    type='email'
                    className='form-control form-control-lg'
                    placeholder='Введите email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  ></input>
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    type='password'
                    className='form-control form-control-lg'
                    placeholder='Введите пароль'
                    onChange={e => setPassword(e.target.value)}
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
