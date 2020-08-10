function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve("done"), 3000) : reject(new Error("error"));
  });
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};
console.log("before");

doSomething();

console.log("after");

const another = async () => {
  try {
    const something1 = await doSomethingAsync();
    console.log(something1);
  } catch (error) {
    console.error(error);
  }
};

console.log("before 1");

another();

console.log("after 1");
