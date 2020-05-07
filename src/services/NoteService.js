const URL_API = 'https://fake-keep-api.herokuapp.com';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const createNote = (note) => {
  return fetch(`${URL_API}/notes`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(note),
  })
  .then((response) => response.json())
  .then((data) => data);
};

export const getNotes = () => {
  return fetch(`${URL_API}/notes`, {
    method: 'GET',
    headers: headers,
  })
  .then((response) => response.json())
  .then((data) => data);
};
