const URL_API = 'https://fake-keep-api.herokuapp.com';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

export const getNotes = (pagination = '') => {
  return fetch(`${URL_API}/notes${pagination}`, requestOptions).then(response => response.json());
};
