import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Вход</h1>
            <p className='text-xs-center'>
              <Link to='/register'>Нужен аккаунт?</Link>
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
