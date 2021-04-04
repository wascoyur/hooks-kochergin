import { useState, useEffect } from 'react';
import axios from 'axios';
import useLocalStorage from './useLocalStorage';

const useFetch = url => {
  const baseUrl = 'https://conduit.productionready.io/api';

  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage('token');

  console.log(token);

  const doFetch = (options = {}) => {
    setOptions(options);
    setLoading(true);
  };

  useEffect(() => {
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : ''
        },
      },
    };
    if (!isLoading) {
      return;
    }
    //console.log('opt', options);

    axios(baseUrl + url, requestOptions)
      .then(res => {
        // console.log('success:', res);
        setLoading(false);
        setResponse(res.data);
      })
      .catch(err => {
        console.log('err:', err);
        setLoading(false);
        setError(err.response.data);
      });
  }, [isLoading, options, url, token]);

  return [{ isLoading, response, error }, doFetch];
};
export default useFetch;
