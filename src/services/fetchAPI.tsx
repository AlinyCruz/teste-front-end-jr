const fetchData = async (url) => {
  const response = await fetch(url);
  const resultAPI = await response.json();

  return resultAPI.products;
};

export default fetchData;
