import React from 'react';

const BackendErrorMessage = ({ backendError }) => {
  console.log(backendError);
  const errorMessages = Object.keys(backendError).map(name => {
    const message = backendError[name].join(' ')
    return `${name} ${message}`
  })
  return (
    <ul className='error-message'>
      {errorMessages.map(msg => {
        return <li key={msg}>{msg}</li>
      })}
    </ul>
  );
};

export default BackendErrorMessage;
