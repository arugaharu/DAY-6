function pembelianbuku(judulbuku,hargabuku,diskon,pajak){

    //deklarasi variabel
    const pajakdasar = 27;
    let kenapajak = true;
    let jumlahdiskon,hargastlhdiskon,hargapajak,hargaakhir;
    let stringharga = "Total : ";

    //ammoun diskon
    jumlahdiskon = (hargabuku * diskon) / 100;
    //price after diskon
    hargastlhdiskon = hargabuku - jumlahdiskon;
    //ammoun tax
    hargapajak = (hargastlhdiskon * pajak) / 100;
    //price after tax
    hargaakhir = hargastlhdiskon + hargapajak;


    console.log("Judul Buku: " + judulbuku);
    console.log("Harga Normal: Rp" + hargabuku);
    console.log("Diskon (Berapa Persen): " + diskon + "%");
    console.log("Diskon (Berapa Ribu): Rp" + jumlahdiskon);
    console.log("Harga Promo: Rp" + hargastlhdiskon);

    if (kenapajak) {
        console.log("Persentase Pajak: " + pajak + "%");
        console.log("Harga Pajak: Rp" + hargapajak);
        console.log(stringharga + "Rp" + hargaakhir);
    } else {
        console.log(stringharga + "Rp" + hargastlhdiskon);
    }

}

pembelianbuku("Lima Sekawan", 500000, 15, 10);