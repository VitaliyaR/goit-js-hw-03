function filterArray(numbers, value) {
    let newArray =[]; // можно використати const заміть let
   for (let i=0; i < numbers; i++) {
    if ( numbers[i] > value) {
        newArray.push(numbers[i]);

    }
   }
}


