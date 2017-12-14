/*var age = Number(prompt("Yasinizi girin"));

if(age>=18){
    console.log("Giris ede biler");
}else{
    console.log("Giris ede bilmez");
}*/

//Maas hesablama

/*var gunSayi = Number(prompt("Gun sayini girin: "));
var gunlukGelir = Number(prompt("Gunluk geliri girin: "));
var faiz = 0;

if (gunSayi >= 1 && gunSayi <= 31) {
    var gelir = gunSayi * gunlukGelir;

    if (gelir > 1000) {
        faiz = (gelir - 1000) * 0.04;
    } else {
        faiz = gelir * 0.18;
    }

    var xalisGelir = gelir - faiz;

    console.log("Xalis gelir : " + xalisGelir);
    console.log("Vergi : " + faiz);
}else{
    console.log("Duzgun gun sayi girin");
}*/

// Ayin fesilini tapmaq

// var month = parseInt(Number(prompt("Ayi girin")));

// if(month==12){
//     console.log("qis basladi");
// }

// if (month >= 1 && month <= 12) {

//     if (month >= 3 && month <= 5) {
//         console.log("Yaz");
//     } else if (month >= 6 && month <= 8) {
//         console.log("Yay");
//     } else if (month >= 9 && month <= 11) {
//         console.log("Payiz");
//     } else {
//         console.log("Qis");
//     }

// } else {
//     console.log("Duzgun ayi girin");
// }

// Gunun adi ve hefte ici yada sonu olmasi

// var day = Number(prompt("Heftenin gununu girin"));

// var dayName = "";
// var dayType = "";

// if (day >= 1 && day <= 7) {
//     if (day == 1) {
//         dayName = "BE";
//         dayType = "HI";
//     } else if (day == 2) {
//         dayName = "CA";
//         dayType = "HI";
//     } else if (day == 3) {
//         dayName = "CE";
//         dayType = "HI";
//     } else if (day == 4) {
//         dayName = "CHA";
//         dayType = "HI";
//     } else if (day == 5) {
//         dayName = "CU";
//         dayType = "HI";
//     } else if (day == 6) {
//         dayName = "SE";
//         dayType = "HS";
//     } else {
//         dayName = "BA";
//         dayType = "HS";
//     }

//     console.log(dayName, dayType);
// } else {
//     console.log("Duzgun gunu girin");
// }



var x = Number(prompt("X deyerini girin"));
var y = Number(prompt("Y deyerini girin"));

if (x != 0 && y != 0) {
    if (x > 0 && y > 0) {
        console.log("Kesisme 1 rube dusur");
    } else if (y > 0 && x < 0) {
        console.log("Kesisme 2 rube dusur");
    } else if (y < 0 && x < 0) {
        console.log("Kesisme 3 rube dusur");
    }else{
        console.log("Kesisme 4 rube dusur");
    }
} else {
    console.log("Kesisme 0 xetine dusur")
}