const productList = async () => {
  const response = await fetch('http://localhost:3001/products');
  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }
  return await response.json();
};

const createProduct = async (name, price, image) => {
  const response = await fetch('http://localhost:3001/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, price, image })
  });
  if (!response.ok) {
    throw new Error('Erro ao criar produto');
  }
  return await response.json();
};

const deleteProduct = async (id) => {
  const response = await fetch(`http://localhost:3001/products/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Erro ao deletar produto');
  }
};

export const servicesProducts = {
  productList,
  createProduct,
  deleteProduct
};