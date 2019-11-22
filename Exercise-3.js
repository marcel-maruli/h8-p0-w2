/* Psuedocodenya
SET variabel Valuenya Nama
SET peran Valuenya peran
SET untuk menampung peran menjadi 3 jenis (Ksatria, Tabib, Penyihir)
SET Hasilnya

/* CARA PERTAMA */

// var nama = `Marcel`;
// var peran = ``;
// if (nama==0 && peran==0) {
//     console.log ('Anda belum memberi nama')    
// } else if (nama!=0 && peran==0) {
//     console.log (`Hai ${nama}, Tolong pilih peranmu. Peran yang tersedia adalah Ksatria, Tabib, atau Penyihir.`) 
// } else if (nama!=0 && peran!=0) {
//     switch (peran) {
//             case `Ksatria`:
//                     console.log (`Halo Ksatria ${nama}, Selamat datang di Dunia Proxytia.`+
//                     ` Kamu dapat menyerang dengan senjatamu!`)
//                 break;
//                 case `Tabib`:
//                     console.log (`Halo Tabib ${nama}, Selamat datang di Dunia Proxytia.` +
//                     ` Kamu akan membantu temanmu yang terluka.`)
//                 break;
//                 case `Penyihir`:
//                     console.log (`Halo Penyihir ${nama}, Selamat datang di Dunia Proxytia.` +
//                     ` Ciptakan keajaiban yang membantu kemenanganmu!`)
//                 break;
//                 default:
//                 console.log (`Halo ${nama}, Tolong pilih peran yang tersedia, peran yang tersedia adalah Ksatria, Tabib, atau Penyihir.`)
//                 break;
//     } 
// }





/* CARA KEDUA */

// var nama =`marcel`;
// var peran = `Penyihir`;
// if (nama==0 && peran==0) {
//     console.log (`Tolong masukkan nama anda!`)    
// } else if (nama!=0 && peran==0) {
//     console.log (`Hai ${nama}, Tolong pilih peranmu. Peran yang tersedia adalah Ksatria, Tabib, atau Penyihir.`)    
// } else if (nama!=0 && peran==`Ksatria`) {
//     console.log (`Selamat datang di Dunia Proxytia, ${nama}.
//     Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)    
// } else if (nama!=0 && peran===`Tabib`) {
//     console.log (`Selamat datang di Dunia Proxytia, ${nama}
//     Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`)    
// } else if (nama!=0 && peran===`Penyihir`) {
//     console.log (`Selamat datang di Dunia Proxytia, ${nama}
//     Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
// } else {
//     console.log (`Halo ${nama}, Tolong pilih peran yang tersedia, peran yang tersedia adalah Ksatria, Tabib, atau Penyihir.`)
// }