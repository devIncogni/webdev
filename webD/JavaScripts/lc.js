let sum = 0;
for (let m = 0; m < 2000; m++) {
    console.log(m);
  for (let l = 0; l < m; l++) {
    for (let k = 0; k < l; k++) {
      for (let j = 0; j < k; j++) {
        for (let i = 0; i < j; i++) {
          sum += 2;
        //   console.log(sum);
        }
      }
    }
  }
}
console.log(sum);
