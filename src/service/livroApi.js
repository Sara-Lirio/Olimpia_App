import axios from 'axios';

const api = axios.create({
  baseURL: 'https://olimpi-app.herokuapp.com',
});

export async function getLivros() {
  const response = await api.get('/livros');
  console.log(response)
  return response.data.livros;
}

export async function deletaLivro(idLivro) {
  await api.delete(`/livros/idLivro/${idLivro}`);
}

export async function putLivro(rota, idLivro) {
  await api.put(`/livros/idLivro/${rota}/${idLivro}`)
}

export async function postLivro(rota, idLivro){
  await api.post(`/livros`)
}