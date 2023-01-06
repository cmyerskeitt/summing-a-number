function sumDigits(number) {
    let array = Math.abs(number).toString().split('')
    let sum = 0
    for (let i = 0; i < array.length; i++){
      sum += parseInt(array[i])
    }
     return sum
   }
   