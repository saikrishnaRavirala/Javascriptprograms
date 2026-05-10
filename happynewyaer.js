function alarm(countdown) {
  if (countdown > 0) {
    console.log(countdown);
    setTimeout(() => alarm(countdown - 1), 1000);
  } else {
    console.log("Happy New Year");
  }
}

alarm(3);