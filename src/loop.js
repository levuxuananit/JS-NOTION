// How to use "Break"
// Example of printing from 1 to 5 when n = 10
for (var i = 0; i < 10; i++){
    if(i>5){
        break; // End the loop imediately
    }
    console.log(i)
}

// How to use "Continue"
// Example of printing the odd number when n = 10
for (var i = 0; i< 10; i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}