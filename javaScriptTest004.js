

let n =4;
let size = 2*n-1;
for (let 1=0;i<size;i++){
    let row ="";
      for (let j=0; j<size;j++){
            let top = i;
            let left = j;
            let bottom = size-1-i;
            let right = size-1-j;
            let min= Math.min(top,bottom,left,right);
            row +=(n-min)+" ";
      }
   console.log(row);
}
