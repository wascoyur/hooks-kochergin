import useFech from '../hooks/useFech';
import { useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/currentUser';
import  useLocalStorage  from '../hooks/useLocalStorage';

const CurrentUserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFech('/user');
  const [, setCurrentUserState] = useContext(CurrentUserContext);
  const [token] = useLocalStorage('token');

  useEffect(() => {
    if (!token) {
      setCurrentUserState(state => ({
        ...state,
        isLoggedIn:false
      }))
      return
    }
    doFetch();
    setCurrentUserState(state => ({
      ...state,
      isLoading: true,
    }));
  }, [doFetch, setCurrentUserState, token]);

  useEffect(() => {
    if (!response) return;
    setCurrentUserState(state => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user,
    }));
  }, [response, setCurrentUserState]);
  return children;
};

export default CurrentUserChecker;
