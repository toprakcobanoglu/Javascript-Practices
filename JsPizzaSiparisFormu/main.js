var liste, secenek;
var i;

liste = document.getElementById("listePizza");
liste.addEventListener("change", pizzaHesapla)

function toogle()  {
    liste = document.getElementById("grupIndirim");
    for(i=0; i<liste.length; i++)   {
        if(liste[i].checked)    {
            if(liste[i].value=="Aktif") {
                document.getElementById("txtIndirimKodu").disabled=false;
            } else if(liste[i].value=="Pasif")  {
                document.getElementById("txtIndirimKodu").value("");
                document.getElementById("txtIndirimKodu").disabled=true;
            }
        }
    }
    
    document.getElementById("txtIndirimKodu").disabled=false;
}

function pizzaHesapla()  {
    var pizzaFiyati, girilenKod, odenecekTutar;
    const indirimKodu = "PROMO";    //Sabit degiskenler (const)

    liste = document.getElementById("listePizza");
    secenek = liste[liste.selectedIndex].value;
    pizzaFiyati = Number(secenek);

    liste = document.getElementsByName("grupEkMalzeme");

    for(i=0; i<liste.length; i++)   {
        if(liste[i].checked)    {
            pizzaFiyati = pizzaFiyati + 2;
        }
    }

    girilenKod = document.getElementById("txtIndirimKodu").value;
    if(indirimKodu==girilenKod) {
        odenecekTutar = pizzaFiyati - 5;
    } else  {
        document.getElementById("sonuc").innerHTML="Girdiginiz kod gecersiz !"
        odenecekTutar = pizzaFiyati;
    }

    document.getElementById("sonuc").innerHTML="Odenecek tutar : "+odenecekTutar;
}