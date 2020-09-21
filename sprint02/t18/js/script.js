let sortEvenOdd = (arr) => {
    arr.sort(function(a, b) { return a % 2 - b % 2 || a - b; });
}

/*
   function sortEvenOdd(arr) {
       let oddNumber = [],
           evenNumber = [];
       let d = 0,
           b = 0;

       for (let i = 0; i < arr.length; i++) {
           if (arr[i] % 2 == 0) {
               evenNumber[d] = arr[i];
               d++;
           } else {
               oddNumber[b] = arr[i];
               b++
           }
       }
       evenNumber.sort(function(a, b) { return a - b });
       oddNumber.sort(function(a, b) { return a - b });
       arr = oddNumber;
   let ar=[...evenNumber, ...oddNumber]
       arr += evenNumber;
       return console.log(ar);
   }


   const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
   sortEvenOdd(arr);
   console.log(arr); // (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15]
   */