const xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;

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
