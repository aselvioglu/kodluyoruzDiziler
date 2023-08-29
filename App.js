let dizi = [2,5,8,11,15,17];

// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

let yeniDizi=dizi.filter(function(sayi){
return sayi>10;}).map(function(num){

    return num*5;
});

console.log(yeniDizi);

let dizim = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
function indirgeyici (acum, sayi){
 return acum*sayi;

}

let carpim= dizim.reduce(indirgeyici, 1);

console.log(carpim);


let dizin = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizin){
if(dizin.some(function(sayi){
return sayi>5;})){console.log("Beşten büyük bir eleman mevcut.");}
else {console.log("5'ten büyük eleman mevcut değil.");}
}

myFunction(dizi);