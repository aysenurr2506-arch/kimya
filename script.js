// 1. VERİ: Lise Müfredatı Element Listesi
const elementler = [
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
    { atomNo: 26, sembol: 'Fe', ad: 'Demir' },
    { atomNo: 29, sembol: 'Cu', ad: 'Bakır' },
    { atomNo: 30, sembol: 'Zn', ad: 'Çinko' },
    { atomNo: 47, sembol: 'Ag', ad: 'Gümüş' },
    { atomNo: 79, sembol: 'Au', ad: 'Altın' },
    { atomNo: 80, sembol: 'Hg', ad: 'Cıva' },
    { atomNo: 82, sembol: 'Pb', ad: 'Kurşun' }
];

let mevcutElementIndex = -1;

// 2. HTML Elemanlarını Seçme
const kart = document.getElementById('elementKarti');
const atomNoYuzu = document.getElementById('atomNumarasi');
const sembolYuzu = document.getElementById('elementSembolu');
const adYuzu = document.getElementById('elementAdi');
const sonrakiButonu = document.getElementById('sonrakiButonu');

// 3. Fonksiyon: Kartın içini yeni elementle doldur
function kartiGuncelle() {
    const element = elementler[mevcuElementIndex];
    
    atomNoYuzu.textContent = element.atomNo;
    sembolYuzu.textContent = element.sembol;
    adYuzu.textContent = element.ad;
    
    kart.classList.remove('dondu');
}

// 4. Fonksiyon: Rastgele yeni bir element seç ve göster
function sonrakiElementiGoster() {
    let yeniIndex = Math.floor(Math.random() * elementler.length);
    while (yeniIndex === mevcutElementIndex) {
        yeniIndex = Math.floor(Math.random() * elementler.length);
    }
    mevcutElementIndex = yeniIndex;
    kartiGuncelle();
}

// 5. Olay Dinleyicileri
kart.addEventListener('click', () => {
    kart.classList.toggle('dondu');
});
sonrakiButonu.addEventListener('click', sonrakiElementiGoster);

// 6. Başlangıç: Sayfa ilk yüklendiğinde hemen rastgele bir element göster
sonrakiElementiGoster();
