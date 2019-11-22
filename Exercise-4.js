// SET hari VALUE bilangan1
// SET bulan VALUE bilangan2
// SET tahun VALUE bilangan3
// SET bilangan2(bulan) dengan SWITCH jadi nama bulannya
// SET hasil

var tanggal = 31  ; 
var bulan = 12   ;
var tahun =  1900  ;
if (tanggal>0 && tanggal<=31 && bulan>0 && bulan<=12 && tahun>=1900 && tahun<=2200) {
    switch (bulan) {
        case 1:
            bulan= "January"
            break;
        case 2:
            bulan= "February"
            break;
        case 3:
            bulan= "March"
            break;
        case 4:
            bulan= "April"
            break;
        case 5:
            bulan= "May"
            break;
        case 6:
            bulan= "June"
            break;
        case 7:
            bulan= "July"
            break;
        case 8:
            bulan= "August"
            break;
        case 9:
            bulan= "September"
            break;
        case 10:
            bulan= "October"
            break;
        case 11:
            bulan= "November"
            break;
        case 12:
            bulan= "December"
            break;
}
    console.log (`${tanggal} `+` ${bulan} `+` ${tahun}`)
}else {
    console.log (false)
}