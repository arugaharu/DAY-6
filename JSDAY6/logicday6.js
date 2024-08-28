/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
    if (n <= 1){
        return false;
    } //bilangan krg dari 1 bukan prima

    if (n === 2) {
        return true;
    } //bilangan 2 prima

    if (n % 2 === 0){
        return false;
    }// tp bilangan genap selain 2 bukan prima

    for (let i = 3; i <= Math.sqrt(n); i+=2){
        if(n % 2 === 0){
            return false;
        }
    }// cek bilangan 3 dst apkah prima atau bukan

    return true;

  }
  
  console.log(isPrime(10));
  console.log(isPrime(43));