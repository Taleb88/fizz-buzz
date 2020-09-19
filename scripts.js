for(let i=1;i<=100;i++) {
    if(i%3===0&&i%5===0) {
        console.log('FizzBuzz' + '<br>');
    } else if (i%3==0) {
        console.log('Fizz' + '<br>');
    } else if (i%5===0) {
        console.log('Buzz' + '<br>');
    } else {
        console.log(i + '<br>')
    }
}