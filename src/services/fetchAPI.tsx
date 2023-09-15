const fetchData = async (url) => {
  const response = await fetch(url);

  if (response.ok) {
    const resultAPI = await response.json();
    return resultAPI.products;
  }
  throw new Error('Erro ao carregar as informações');
};

export default fetchData;
