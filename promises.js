function makeLunch() {
  return new Promise((resolve, reject) => {
    console.log('start making lunch ... ');
    const error = true;
    setTimeout(() => {
      console.log('finish making lunch ...');
      if (error) {
        reject('Error: someting went wrong ');
      } else {
        resolve();
      }
    }, 2000);
  });
}

makeLunch()
  .then(() => {
    console.log('eat lunch');
  })
  .catch((err) => console.log(err, 'so hungary'));
