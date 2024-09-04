const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar dados');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Erro:', err.message);
    throw err;
  }
};


export default fetchData