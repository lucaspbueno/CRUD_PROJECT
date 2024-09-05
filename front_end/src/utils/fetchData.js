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

const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Especifica que estamos enviando JSON
      },
      body: JSON.stringify(data), // Converte o objeto para uma string JSON
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar dados');
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.error('Erro:', err.message);
    throw err;
  }
};

const deleteData = async (url, ids) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids }), // Enviando a lista de IDs como JSON
    });

    if (!response.ok) {
      throw new Error('Erro ao excluir dados');
    }

    const result = response.status === 204 ? {} : await response.json();
    return result;
  } catch (err) {
    console.error('Erro:', err.message);
    throw err;
  }
};

const patchOrPutData = async (url, data) => {
  try {
    // Verifica o número de chaves no objeto de dados
    const method = Object.keys(data).length === 6 ? 'PUT' : 'PATCH';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Envia o objeto convertido para uma string JSON
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar dados com método ${method}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.error('Erro:', err.message);
    throw err;
  }
};

export {fetchData, postData, deleteData, patchOrPutData}