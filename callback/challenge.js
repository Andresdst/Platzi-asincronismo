const xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback) {
  let xmlhttp = new xmlhttprequest();
  //apertura de peticion
  xmlhttp.open("GET", url_api, true); //el parametro async viene por defecto true
  //metodo de escucha
  xmlhttp.onreadystatechange = function (event) {
    //espacio de validacion
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        callback(null, JSON.parse(xmlhttp.responseText));
      } else {
        let error = new Error("Error" + url_api);
        return callback(error, null);
      }
    }
  };
  xmlhttp.send();
}
fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
