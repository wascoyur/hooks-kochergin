import { createContext, useState } from 'react';

export const CurrentUserContext = createContext([{}, () => {}]);

export const CurrentuserProvider = ({ childen }) => {
  const [state, setState] = useState({
    isLoadinf: false,
    isLoggedIn: null,
    currentUser: null
  })
  return (
    <CurrentUserContext.Provider value={[state, setState]}>
      {childen}
    </CurrentUserContext.Provider>
  );
};
