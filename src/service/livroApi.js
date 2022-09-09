import axios from 'axios';

const api = axios.create({
  baseURL: 'https://olimpi-app.herokuapp.com',
});

export async function postLivro(body){
  const response = await api.post('/livros', body);
  console.log(response);
  return response.data;
}

export async function getLivros() {
  const response = await api.get('/livros');
  console.log(response)
  return response.data.livros;
}

export async function getLivroUnico(idLivro) {
  const response = await api.get(`/clientes/idLivro/${idLivro}`);
  return response.data;
}

export async function putLivro(idLivro, body) {
  await api.put(`/livros/idLivro/${idLivro}`, body)
}

export async function deletaLivro(idLivro) {
  await api.delete(`/livros/idLivro/${idLivro}`);
}