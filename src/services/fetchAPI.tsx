import { useState } from 'react';

const [isLoading, setIsLoading] = useState(false);
const [errors, setErrors] = useState(null);
const [stateApi, setStateApi] = useState(null);

const fetchData = async (url) => {
  try {
    setIsLoading(true);
    const response = await fetch(url);
    if (response.success == true) {
      const resultAPI = await response.json();
      setStateApi(resultAPI);
    } else {
      throw new Error('Erro ao carregar as informações');
    }
  } catch (e) {
    setErrors(e);
  } finally {
    setIsLoading(false);
  }
};

export default fetchData;
