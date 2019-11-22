//menghitung jumlah alphabet dalam suatu sentence dengan FUNCTION
//butuh penampung huruf
//penampung kalimatnya
//butuh penampung angka
// dari kalimat dikeluarin dulu per karakter
// baru di inisiasi per karakternya kalo karakter tertentu angkanya nambah 1

function countLetters(sentence, letter) {
      var penampung = "";
    var angka = 0 
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] == letter) {angka +=1 }
    }
        
    return (angka)
}
    






console.log (countLetters("Hai my name is marcel, and I'am the future full-stack developer", "a"))
console.log (countLetters("Hai my name is marcel, and I'am the future full-stack developer", "i"))

console.log (countLetters("Hai my name is marcel, and I'am the future full-stack developer", "i"))

console.log (countLetters("Hai my name is marcel, and I'am the future full-stack developer", "e"))
console.log (countLetters("Hai my name is marcel, and I'am the future full-stack developer", "d"))

