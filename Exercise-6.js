var flag = 0;
console.log ("LOOPING PERTAMA")
while(flag < 20) { flag +=2;
    console.log(flag + '- I love coding'); 
}
var flag = 22;
console.log ("LOOPING KEDUA")
while (flag > 2) { flag -=2;
    console.log (flag + '- I will become fullstack developer') 
}


var g
console.log("LOOPING PERTAMA")
for ( g=1; g<=20 ; g++)
console.log (g+" - I love coding")

console.log ("LOOPING KEDUA")
for (g=20; g>0 ; g--)
console.log (g+ " - I will become fullstack developer")




// MEMBUAT PROGRAM GANJIL GENAP 
var h
for ( h=1;h<=100; h++) {
if (h%2==0) { 
    console.log ("genap")    
}else if (h%1==0) {
    console.log("ganjil")
} } 

//  MEMBUAT  KELIPATAN 3
var i
for (i=1; i<=100; i+=2){
    if (i%3==0) {
        console.log (i + " KELIPATAN 3")    
    }
    else if (i%1==0) {
        console.log (i)    
    }
}


// MEMBUAT KELIPATAN 6 
var j
for (j=1; j<=100; j+=5){
    if (i%6==0) {
        console.log (j + " KELIPATAN 6")    
    }
    else if (j%1==0) {
        console.log (j)    
    }
}


// MEMBUAT KELIPATAN 10
var k
for (k=1; k<=100; k+=9){
    if (k%10==0) {
        console.log (k + " KELIPATAN 10")    
    }
    else if (k%1==0) {
        console.log (k)    
    }
}