import axios from 'axios';

const api = axios.create({
  baseURL: 'https://olimpi-app.herokuapp.com',
});

export async function createCliente(body) {
  const response = await api.post('/clientes', body);
  console.log(response);
  return response.data.msg;
}

export async function readCliente() {
  const response = await api.get('/clientes');
  return response.data.clientes;
}

export async function updateCliente(id, body) {
  await api.put(`/clientes/id/${id}`, body);
}

export async function deleteCliente(id) {
  await api.delete(`/clientes/id/${id}`);
}

export async function getClienteUnico(id) {
  const response = await api.get(`/clientes/id/${id}
  `);
  return response.data;
}
