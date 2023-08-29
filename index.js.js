var sayi1 = 0;
var sayi2 = 1;
var dizi = [sayi1,sayi2];
var n = prompt("sayi giriniz: ")
for(var sayi3 = 0 ; sayi1 + sayi2 < n ; ){
 sayi3 = sayi1 + sayi2;
 sayi2 = sayi3;
 sayi1 = sayi2 - sayi1;
 dizi.push(sayi3);
}
console.log(dizi);