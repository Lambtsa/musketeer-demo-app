






const orderSlip = new Promise((resolve, reject) => {
  orderPizza((err, pizza) => {
    if (err) {
      reject(err);
    } else {
      resolve(pizza)
    }
  })
});











