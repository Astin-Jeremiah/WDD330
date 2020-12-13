export function getJSON(url2) {
  return fetch(url2)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        //console.log(response.json());
        return res.json();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}