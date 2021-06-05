import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosRequest = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchNow = () => {
    axios
      .get(url)
      .then((data) => {
        setIsPending(false);
        setData(data);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchNow();
  }, [url]);

  return { data, isPending, error, fetchNow };
};

export default useAxiosRequest;
