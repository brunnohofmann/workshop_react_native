const url = 'https://fake-keep-api.herokuapp.com/notes';
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export const getNotes = (pagination = '') => {
  return fetch(`${url}${pagination}`, requestOptions).then((response) => response.json());
};
