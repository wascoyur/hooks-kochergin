import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = url => {
  const baseUrl = 'https://conduit.productionready.io/api';

  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setOptions(options);
    setLoading(true)
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    console.log('triggert', );
    axios(baseUrl + url, options)
      .then(res => {
        console.log('success:', res);
        setLoading(false);
        setResponse(res.data);
      })
      .catch(err => {
        console.log('err:', err);
        setLoading(false);
        setError(err.response.data);
      });
  },[isLoading]);

  return [{ isLoading, response, error }, doFetch];
};
export default useFetch;
