import axios from 'axios';

const api = axios.create({
  baseURL: 'https://olimpi-app.herokuapp.com',
});

export async function getLivros() {
  const response = await api.get('/livros');
  return response.livros;
}

export async function postLivro(itemLivro) {
  const response = await api.post("/livros", itemLivro);
  return response;
}

export async function putLivro(idLivro, itemLivro) {
  const response = await api.put(`/livros/idLivro/${idLivro}`, itemLivro);
  return response;
}

export async function deleteLivro(idLivro) {
  await api.delete(`/livros/idLivro/${idLivro}`);
  return response.livros;
}