//!--menghitung resultan gaya--!//
//STORE percepatan_benda WITH VALUE 2
//STORE massa_benda WITH VALUE 600
//STORE resultan_gaya WITH VALUE hasil
//STORE hasil by CALCULATE 'a' times 'm'
//STORE area VALUE WITH calculation result (hasil)


//STORE a= '2'
//STORE m= '600'
//STORE hasil = a * m
//DISPLAY ("Resultan Gaya adalah",hasil)



//--!menghitung tahun kabisat--!//
//SET tahun WITH VALUE number
//SET tahun WITH CONDITION jika tahun habis di /4 (kelipatan 4) 
//SET tahun WITH CONDITION jika tidak habis di /100 (bukan kelipatan 100)
//SET area WITH VALUE jika memenuhi semua persyaratan maka DISPLAY "tahun kabisat" 
//SET area WITH VALUE jika tidak memenuhi persyaratan DISPLAY "bukan tahun kabisat"

// var tahun= '2012'
// IF (tahun%4==0 && tahun%100!=0) {DISPLAY ('tahun kabisat')} 
//ELSE {DISPLAY ('bukan tahun kabisat')}


//--!menghitung tahun kabisat 2--!//
//SET tahun WITH VALUE number
//SET if WITH CONDITION jika tahun habis di /4 (kelipatan 4)
//SET if WITH CONDITION jika tahun  habis di /100 (kelipatan 100)
//SET if WITH CONDITION jika tahun habis di /400 (kelipatan 400)
//SET area WITH VALUE jika memenuhi semua persyaratan maka DISPLAY "tahun kabisat" 
//SET area WITH VALUE jika tidak memenuhi persyaratan DISPLAY "bukan tahun kabisat"

// var tahun= '2012'
// IF (tahun%4==0 && tahun%100==0 && tahun%400==0){DISPLAY ('tahun kabisat')} 
//ELSE {console.log ('bukan tahun kabisat')}


//--!menghitung jumlah pakaian!--//
// SET pakaian WITH VALUE number
// SET hasil1 WITH CONDITION jika pakaian kurang dari 20 (<20) maka false (mesin belum bisa menyala)
// SET pakaian WITH VALUE bila pakaian sama dengan 20 (pakaian = 20)
// SET hasil2 WITH VALUE "Mesin Sudah Siap Jalan"

// STORE "laundry" with 0
// WHILE "laundry" <20
//   ADD "laundry" by 1
// DISPLAY "Laundry process"  
// var laundry = 0;
// while(laundry < 20)
// laundry++

// DISPLAY(laundry)



//--!memeriksa kuku!--//
// ** Tugas 4 **
// STORE "count" to 0
// WHILE "count" < 40
//   ADD "count" by 1
// DISPLAY "count"

// IF "kuku pendek"
//   DISPLAY "mendapat pujian dari guru"
// ELSE
//   DISPLAY "mendapat hukuam dari guru"