import {  NavLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <div>
      <nav className='navbar navbar-light'>
        <div className='container'>
          <NavLink to='/' className='navbar-brand'>
            Medium
          </NavLink>
          <ul className='nav navbar-nav pull-xs-right'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link' exact>
                Домой
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/register' className='nav-link' exact>
                Регистрация
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/login' className='nav-link' exact>
                Вход
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default TopBar;
