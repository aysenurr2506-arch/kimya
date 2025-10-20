// 1. VERİ: Lise Müfredatı Element Listesi
const elementler = [
    // İlk 20 Element
    { atomNo: 1, sembol: 'H', ad: 'Hidrojen' },
    { atomNo: 2, sembol: 'He', ad: 'Helyum' },
    { atomNo: 3, sembol: 'Li', ad: 'Lityum' },
    { atomNo: 4, sembol: 'Be', ad: 'Berilyum' },
    { atomNo: 5, sembol: 'B', ad: 'Bor' },
    { atomNo: 6, sembol: 'C', ad: 'Karbon' },
    { atomNo: 7, sembol: 'N', ad: 'Azot' },
    { atomNo: 8, sembol: 'O', ad: 'Oksijen' },
    { atomNo: 9, sembol: 'F', ad: 'Flor' },
    { atomNo: 10, sembol: 'Ne', ad: 'Neon' },
    { atomNo: 11, sembol: 'Na', ad: 'Sodyum' },
    { atomNo: 12, sembol: 'Mg', ad: 'Magnezyum' },
    { atomNo: 13, sembol: 'Al', ad: 'Alüminyum' },
    { atomNo: 14, sembol: 'Si', ad: 'Silisyum' },
    { atomNo: 15, sembol: 'P', ad: 'Fosfor' },
    { atomNo: 16, sembol: 'S', ad: 'Kükürt' },
    { atomNo: 17, sembol: 'Cl', ad: 'Klor' },
    { atomNo: 18, sembol: 'Ar', ad: 'Argon' },
    { atomNo: 19, sembol: 'K', ad: 'Potasyum' },
    { atomNo: 20, sembol: 'Ca', ad: 'Kalsiyum' },

    // Yaygın Kullanılan Diğer Elementler
    { atomNo: 24, sembol: 'Cr', ad: 'Krom' },
    { atomNo: 25, sembol: 'Mn', ad: 'Mangan' },
    { atomNo: 26, sembol: 'Fe', ad: 'Demir' },
    { atomNo: 27, sembol: 'Co', ad: 'Kobalt' },
    { atomNo: 28, sembol: 'Ni', ad: 'Nikel' },
    { atomNo: 29, sembol: 'Cu', ad: 'Bakır' },
    { atomNo: 30, sembol: 'Zn', ad: 'Çinko' },
    { atomNo: 35, sembol: 'Br', ad: 'Brom' },
    { atomNo: 47, sembol: 'Ag', ad: 'Gümüş' },
    { atomNo: 50, sembol: 'Sn', ad: 'Kalay' },
    { atomNo: 53, sembol: 'I', ad: 'İyot' },
    { atomNo: 56, sembol: 'Ba', ad: 'Baryum' },
    { atomNo: 78, sembol: 'Pt', ad: 'Platin' },
    { atomNo: 79, sembol: 'Au', ad: 'Altın' },
    { atomNo: 80, sembol: 'Hg', ad: 'Cıva' },
    { atomNo: 82, sembol: 'Pb', ad: 'Kurşun' }
];

// O an gösterilen elementin index'ini saklamak için
let mevcutElementIndex = -1; // Başlangıçta -1 yapıyoruz ki ilk seçilen hep farklı olsun

// 2. HTML Elemanlarını Seçme
const kart = document.getElementById('elementKarti');
const atomNoYuzu = document.getElementById('atomNumarasi');
const sembolYuzu = document.getElementById('elementSembolu');
const adYuzu = document.getElementById('elementAdi');
const sonrakiButonu = document.getElementById('sonrakiButonu');

// 3. Fonksiyon: Kartın içini yeni elementle doldur
function kartiGuncelle() {
    // Veri dizisinden o anki elementi al
    const element = elementler[mevcutElementIndex];
    
    // HTML içindeki yazıları güncelle
    atomNoYuzu.textContent = element.atomNo;
    sembolYuzu.textContent = element.sembol;
    adYuzu.textContent = element.ad;
    
    // Kartı tekrar ön yüzüne çevir (eğer dönmüşse)
    kart.classList.remove('dondu');
}

// 4. Fonksiyon: Rastgele yeni bir element seç ve göster
function sonrakiElementiGoster() {
    // Rastgele yeni bir index oluştur
    let yeniIndex = Math.floor(Math.random() * elementler.length);

    // Yeni seçilen, bir öncekİyle aynıysa, farklı bir tane bulana kadar tekrar seç
    while (yeniIndex === mevcutElementIndex) {
        yeniIndex = Math.floor(Math.random() * elementler.length);
    }
    
    // Yeni index'i mevcut olarak ayarla
    mevcutElementIndex = yeniIndex;
    
    // Kartı bu yeni element bilgisiyle güncelle
    kartiGuncelle();
}

// 5. Olay Dinleyicileri (Kullanıcı etkileşimleri)

// Karta tıklandığında 'dondu' sınıfını ekle/kaldır (CSS animasyonu tetikler)
kart.addEventListener('click', () => {
    kart.classList.toggle('dondu');
});

// Butona tıklandığında sonraki elementi göster
sonrakiButonu.addEventListener('click', sonrakiElementiGoster);

// 6. Başlangıç: Sayfa ilk yüklendiğinde hemen rastgele bir element göster
sonrakiElementiGoster();
