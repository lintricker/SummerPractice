// ТУТ лучше использовать axios библиотеку для запросов - будет проще и понятнее

const getData = async (url = '') => {
  const response = await fetch(`http://api.football-data.org/v2/${url}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'X-Auth-Token': '405fb14cdc2b47eca10a85b6f6d1a87e',
    },
  });
  return await response.json();
};

//апи тоже желательно затипизировать если это get с параметрами или put
export const getLeagues = () => {
  return getData('/competitions').then((response) => {
    debugger;
    return response.competitions;
  });
};
