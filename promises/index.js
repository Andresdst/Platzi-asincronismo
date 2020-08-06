const somethigWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Heey!");
    } else {
      reject("Whoops!");
    }
  });
};

somethigWillHappen()
  .then((resolve) => console.log(resolve))
  .catch((err) => console.error(err));

//al declarar funcion y retornar promesa, la promesa se ejecuta cuando se llama la funcion
//si se declara como variable se ejecuta la promesa al definir la variable
const somethigWillHappen2 = () => {
  return new Promise((res, rej) => {
    if (true) {
      setTimeout(() => {
        res("resuelto");
      }, 2000);
    } else {
      const error = new Error("whoops!"); //objeto error
      rej(error);
    }
  });
};

somethigWillHappen2()
  .then((resolve) => console.log(resolve))
  .catch((err) => console.error(err));

Promise.all([somethigWillHappen(), somethigWillHappen2()])
  .then((res) => {
    console.log("arreglo de results", res);
  })
  .catch((err) => {
    console.error(err);
  });
