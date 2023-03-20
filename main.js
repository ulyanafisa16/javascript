
// let usia = prompt('Berapa usia anda?')
//untuk memasukkan apa yg diinginkan
// alert('usia anda adalah = ' +usia);

// about variabel
// .var kemudian cons (untuk yg tetap)dan let (bisa berubah)


//conditional statement
// let nama = 'ulya nafisa'
// let usia = 18
// let pacar = 1

// if(pacar == null){
//     pacar = 'belum punya'
// } else {
//  pacar ='sudah punya'
// }

// switch (pacar) {
//     case 1 :
//         pacar = 'punya pacar 1'
//         break
//     case 2 :
//         pacar = 'punya pacar 2'
//         break
//         default:
//             pacar = 'belum punya pacar'
//             break
// }

// let saldoA = 300000
// let saldoAkh = 200000
// let total = saldoA + saldoAkh
// alert(`Nama saya ${nama}  Usia saya ${usia} status saya ${pacar}`)

// alert(`Saldo awal saya ${saldoA} dan Saldo akhir saya ${saldoAkh} jadi total saldo saya adalah ${total}`)

// Array

// let namaSiswa = ['Ulya','nafisa', 'saniyah', 'ainun']
// namaSiswa.push('bila','dea') //cara menambahkan string pada array
// namaSiswa.shift() //menghilangkan nama pertama
// namaSiswa.pop() //menghilangkan nama terakhir
// alert(namaSiswa)

// for loop

// const namaSiswa =['ulya', 'nafis', 'saniya', 'bia', 'vania']
// console.log(namaSiswa.length) //untuk mengetahui panjang array
// for (let i=0; i<= namaSiswa.length; i++) {
//     console.log(namaSiswa[i])
// }

//while
// let i = 10
// while (i<10) {
//     i++
//     console.log('ulya')
// }

//tugas
//1. prompt untk mengetahui saldo akhir dri apa yg diinput user
//2.menentukan hari dri tanggal yg ada saat ini

// let hari = new Date().getDay()
// alert(`hari ini adalah hari ${hari}`)

// let saldo1 = Number(prompt ('Berapa saldo awal anda?'))
// let saldo2 = Number(prompt ('Berapa saldo terakhir anda?'))
// let jumlah = saldo1 + saldo2
//  alert ('jumlah saldo saya sebesar'+ jumlah);


document.title = 'nafisa'
const body = document.body
body.append('WELCOME TO THE WORLD')
const h1 = document.createElement('h1')
h1.textContent = 'THE WORLD IS BEAUTIFUL'

const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee>ULYA NAFISATUSSANIYAH</marquee>'//tulisannya bergerak jalan

body.append(namaSaya)
body.append(h1)

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

const defaultText = 'Klik disini'
btn1.textContent= defaultText

btn1.style.border = 'none'
btn1.style.padding = '7px'
btn1.style.fontSize = '23px'
btn1.style.background = 'red'
btn2.style.background = 'orange'

function Warna() {
    btn1.style.background ='aqua'
    const newText =document.createElement('p')
    newText.textContent = "Hallo girl"
    body.append(newText)
}

function ubahText() {
    btn1.textContent ="you are beautiful"
}

function ori() {
    btn1.textContent = defaultText
}

function ganti() {
   btn2.style.background='yellow'
   style.background.color='blue'(newText)
}


//membuat array
//dengan memanggil objek
const myName = new Array ('kila','devan')
console.log(myName)

//untuk mengecek masuk dalam array atau tidak
const arraySaya = ['alpukat','pisang','semangka']
const semangka = arraySaya.includes('semangka')
if (semangka) {
const posisiSemangka = arraySaya.indexOf('semangka')
const indexBefore = posisiSemangka - 1
const before = arraySaya[indexBefore]
console.log(`buah sebelum semangka adalah ${before}`)
const awal = arraySaya.shift()
console.log(`buah awal adalah buah ${awal}`)
    
}else{
    console.log('saya tidak tahu posisinya dimana')
}
//benilai true krn semangka termasuk dalam arraysaya
const arrayKamu = ['alpukat','pisang','semangka']
const melon = arrayKamu.includes('melon')
console.log(melon)
//bernilai false krn melon gk termasuk dalam arraykamu

 const arrayWe = ['nangka','labu','bayam','brokoli','tomato']
 const newArrayWe = arrayWe.slice() //digunakan untuk mengcopy dg tanpa mengganti keoriginalnya
 newArrayWe[0] = 'bawang'
 console.log({arrayWe})
 console.log({newArrayWe})