var b=Buffer.alloc(20);


var noOfbyteWritten=b.write("This is my sample and place");

console.log("byte written " + noOfbyteWritten)
console.log(b.toString())