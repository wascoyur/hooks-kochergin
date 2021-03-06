import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import useFetch from '../../hooks/useFech';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CurrentUserContext } from '../../contexs/currentUser';
import BackendErrorMessage from './components/BackendErrorMessage.js'

const Auth = props => {
  const isLogin = props.match.path === '/login';
  const pageTitle = isLogin ? 'Вход' : 'Регистрация';
  const descriptionLink = isLogin ? '/login' : '/register';
  const descriptionText = isLogin ? 'Нужен аккаунт?' : 'Уже есть аккаунт?';
  const apiUrl = isLogin ? '/users/login' : '/users';
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  const [isSuccessSubmit, setSuccessSubmit] = useState(false);
  const [, setToken] = useLocalStorage('token');
  const [currentUserState, setCurrentUserState] = useContext(
    CurrentUserContext
  );

  // console.log('currentUserState', currentUserState);


  const handleEvent = e => {
    e.preventDefault();
    const user = isLogin ? { email, password } : { email, password, username };
    // console.log('user', user);

    doFetch({
      method: 'post',
      data: {
        user,
      },
    });
  };

  useEffect(() => {
    if (!response) return;
    console.log('resp', response);
    setToken(response.user.token);
    setSuccessSubmit(true);
    setCurrentUserState(state =>( {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: response.user
    }))
  }, [response, setToken, setCurrentUserState]);

  if (isSuccessSubmit) {
    return <Redirect to='/' />;
  }

  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>{pageTitle}</h1>
            <p className='text-xs-center'>
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>
            <form onSubmit={handleEvent}>
              {error && <BackendErrorMessage backendError={error.errors} />}
              {isLogin ? null : (
                <fieldset className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Задайте username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  ></input>
                </fieldset>
              )}

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
                  disabled={isLoading}
                >
                  {pageTitle}
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
