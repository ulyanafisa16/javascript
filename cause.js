const string =["nama, saya, ulya", "felicia" , 5] //bisa pake string , bisa pake numbers
let txt = "";
string.forEach(myFunction);
document.getElementById("demo").innerHTML= txt;

function myFunction(value, index, array) {
    txt += value + "<br>";
}

//position string method hitungnya mulai daari 1
let text = "dalam Visit dalam a  W3Schools!"; //hitungnya dari sini
let n = text.search("W3Schools!");
document.getElementById("no").innerHTML = n;

//regular expresss
let texts = document.getElementById("p02").innerHTML;
const pattern = /2/; // ini itu hurufnya sesuai yg ada di texts atau teks yg mau di cek
document.getElementById("demo").innerHTML = pattern.test(texts);