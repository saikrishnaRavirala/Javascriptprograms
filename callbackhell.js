function first(cb) {
  setTimeout(() => {
    console.log('one');
    cb();
  }, 1000);
}
function second(cb) {
  setTimeout(() => {
    console.log('second');
    cb();
  }, 1000);
}
function third(cb) {
  setTimeout(() => {
    console.log('third');
    cb();
  }, 1000);
}

first(() => {
  second(() => {
    third(() => {
      console.log('completed');
    });
  });
});
