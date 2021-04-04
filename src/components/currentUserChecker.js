import useFech from '../hooks/useFech';
import { useEffect, useContext } from 'react';
import {CurrentUserContext} from '../contexts/currentUser'
const CurrentUserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFech('/user');
  const [,setCurrentUserState] = useContext(CurrentUserContext)

  useEffect(() => {
    console.log('init');
    doFetch();
    setCurrentUserState(state => ({
      ...state,
      isLoading: true,
    }));
  }, []);
  return children;
};

export default CurrentUserChecker;
