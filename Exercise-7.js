// MEMBUAT 1 BINTANG DENGAN DERET 5
var rows1 = 5;
var stars 
var penampung_bintang = ""
for (stars = 1;  stars <= rows1; stars++) {
    penampung_bintang += '*'
    penampung_bintang += '\n'
}
console.log (penampung_bintang)


// MEMBUAT BINTANG 5 DENGAN DERET 5//
var bintang1 = ''
var rows2   = 5
for (var i = 0; i < rows2; i++) {
    for (var k = 0; k < rows2; k++){
        bintang1 += '*'
    }
    bintang1 += '\n'
}
console.log (bintang1)


// MEMBUAT BINTANG SEGITIGA 1 SAMPAI DENGAN 5//
var bintang2 = '';
var rows3   = 5 ;
for (var i = 1; i <= rows3; i++) {
    for (var k = 1; k <= i; k++){
        bintang2 += '*'
    }
    bintang2 += '\n'
}
console.log (bintang2)