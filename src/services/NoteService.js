
const URL_API = 'https://fake-keep-api.herokuapp.com';
const FCM_API_KEY =
  'AAAAW0ODb-w:APA91bEo4Xc5rDCkMXpd0KHzlaTgOGT3hA2e0CtFT7obATy3_cAMEfYxojzWSozc88ArdgBLy5ECNa9qUfWrSHBcx9FCH5zKUYFhSeYgPKg-WZ8ZZHOc94uLBJAo4JvoetQg-bvetLnD';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const notificationHeaders = {
  Authorization: `key=${FCM_API_KEY}`,
  Content: 'application/json',
  'Content-Type': 'application/json',
};

const sendNotification = (note, token) => {
  const raw = {
    to: token,
    notification: {
      title: note.title,
      body: note.note,
    },
    data: {
      _id: note._id,
    },
  };

  const requestOptions = {
    method: 'POST',
    headers: notificationHeaders,
    body: JSON.stringify(raw),
    redirect: 'follow',
  };

  return fetch(
    'https://fcm.googleapis.com/fcm/send',
    requestOptions,
  ).then((response) => response.json());
};

export const createNote = (note, token) => {
  token && sendNotification(note, token);
  return fetch(`${URL_API}/notes`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(note),
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const getNotes = (queryString = '') => {
  return fetch(`${URL_API}/notes${queryString}`, {
    method: 'GET',
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => data);
};
