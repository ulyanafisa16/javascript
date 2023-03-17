
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

let saldo1 = prompt ('Berapa saldo awal anda?')
let saldo2 = prompt ('Berapa saldo terakhir anda?')
let jumlah = saldo1 + saldo2
 alert ('jumlah saldo saya sebesar'+ jumlah);
