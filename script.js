const elementlerData = [
    { atomNo: 1, sembol: 'H', ad: 'Hidrojen', periyot: 1, grup: 1, tip: 'ametal' },
    { atomNo: 2, sembol: 'He', ad: 'Helyum', periyot: 1, grup: 18, tip: 'soygaz' },
    { atomNo: 3, sembol: 'Li', ad: 'Lityum', periyot: 2, grup: 1, tip: 'alkali' },
    { atomNo: 4, sembol: 'Be', ad: 'Berilyum', periyot: 2, grup: 2, tip: 'toprak-alkali' },
    { atomNo: 5, sembol: 'B', ad: 'Bor', periyot: 2, grup: 13, tip: 'yari-metal' },
    { atomNo: 6, sembol: 'C', ad: 'Karbon', periyot: 2, grup: 14, tip: 'ametal' },
    { atomNo: 7, sembol: 'N', ad: 'Azot', periyot: 2, grup: 15, tip: 'ametal' },
    { atomNo: 8, sembol: 'O', ad: 'Oksijen', periyot: 2, grup: 16, tip: 'ametal' },
    { atomNo: 9, sembol: 'F', ad: 'Flor', periyot: 2, grup: 17, tip: 'halojen' },
    { atomNo: 10, sembol: 'Ne', ad: 'Neon', periyot: 2, grup: 18, tip: 'soygaz' },
    { atomNo: 11, sembol: 'Na', ad: 'Sodyum', periyot: 3, grup: 1, tip: 'alkali' },
    { atomNo: 12, sembol: 'Mg', ad: 'Magnezyum', periyot: 3, grup: 2, tip: 'toprak-alkali' },
    { atomNo: 13, sembol: 'Al', ad: 'Alüminyum', periyot: 3, grup: 13, tip: 'metal' },
    { atomNo: 14, sembol: 'Si', ad: 'Silisyum', periyot: 3, grup: 14, tip: 'yari-metal' },
    { atomNo: 15, sembol: 'P', ad: 'Fosfor', periyot: 3, grup: 15, tip: 'ametal' },
    { atomNo: 16, sembol: 'S', ad: 'Kükürt', periyot: 3, grup: 16, tip: 'ametal' },
    { atomNo: 17, sembol: 'Cl', ad: 'Klor', periyot: 3, grup: 17, tip: 'halojen' },
    { atomNo: 18, sembol: 'Ar', ad: 'Argon', periyot: 3, grup: 18, tip: 'soygaz' },
    { atomNo: 19, sembol: 'K', ad: 'Potasyum', periyot: 4, grup: 1, tip: 'alkali' },
    { atomNo: 20, sembol: 'Ca', ad: 'Kalsiyum', periyot: 4, grup: 2, tip: 'toprak-alkali' },
    { atomNo: 21, sembol: 'Sc', ad: 'Skandiyum', periyot: 4, grup: 3, tip: 'gecis' },
    { atomNo: 22, sembol: 'Ti', ad: 'Titanyum', periyot: 4, grup: 4, tip: 'gecis' },
    { atomNo: 23, sembol: 'V', ad: 'Vanadyum', periyot: 4, grup: 5, tip: 'gecis' },
    { atomNo: 24, sembol: 'Cr', ad: 'Krom', periyot: 4, grup: 6, tip: 'gecis' },
    { atomNo: 25, sembol: 'Mn', ad: 'Mangan', periyot: 4, grup: 7, tip: 'gecis' },
    { atomNo: 26, sembol: 'Fe', ad: 'Demir', periyot: 4, grup: 8, tip: 'gecis' },
    { atomNo: 27, sembol: 'Co', ad: 'Kobalt', periyot: 4, grup: 9, tip: 'gecis' },
    { atomNo: 28, sembol: 'Ni', ad: 'Nikel', periyot: 4, grup: 10, tip: 'gecis' },
    { atomNo: 29, sembol: 'Cu', ad: 'Bakır', periyot: 4, grup: 11, tip: 'gecis' },
    { atomNo: 30, sembol: 'Zn', ad: 'Çinko', periyot: 4, grup: 12, tip: 'gecis' },
    { atomNo: 31, sembol: 'Ga', ad: 'Galyum', periyot: 4, grup: 13, tip: 'metal' },
    { atomNo: 32, sembol: 'Ge', ad: 'Germanyum', periyot: 4, grup: 14, tip: 'yari-metal' },
    { atomNo: 33, sembol: 'As', ad: 'Arsenik', periyot: 4, grup: 15, tip: 'yari-metal' },
    { atomNo: 34, sembol: 'Se', ad: 'Selenyum', periyot: 4, grup: 16, tip: 'ametal' },
    { atomNo: 35, sembol: 'Br', ad: 'Brom', periyot: 4, grup: 17, tip: 'halojen' },
    { atomNo: 36, sembol: 'Kr', ad: 'Kripton', periyot: 4, grup: 18, tip: 'soygaz' },
    { atomNo: 37, sembol: 'Rb', ad: 'Rubidyum', periyot: 5, grup: 1, tip: 'alkali' },
    { atomNo: 38, sembol: 'Sr', ad: 'Stronsiyum', periyot: 5, grup: 2, tip: 'toprak-alkali' },
    { atomNo: 39, sembol: 'Y', ad: 'İtriyum', periyot: 5, grup: 3, tip: 'gecis' },
    { atomNo: 40, sembol: 'Zr', ad: 'Zirkonyum', periyot: 5, grup: 4, tip: 'gecis' },
    { atomNo: 41, sembol: 'Nb', ad: 'Niobyum', periyot: 5, grup: 5, tip: 'gecis' },
    { atomNo: 42, sembol: 'Mo', ad: 'Molibden', periyot: 5, grup: 6, tip: 'gecis' },
    { atomNo: 43, sembol: 'Tc', ad: 'Teknesyum', periyot: 5, grup: 7, tip: 'gecis' },
    { atomNo: 44, sembol: 'Ru', ad: 'Rutenyum', periyot: 5, grup: 8, tip: 'gecis' },
    { atomNo: 45, sembol: 'Rh', ad: 'Rodyum', periyot: 5, grup: 9, tip: 'gecis' },
    { atomNo: 46, sembol: 'Pd', ad: 'Paladyum', periyot: 5, grup: 10, tip: 'gecis' },
    { atomNo: 47, sembol: 'Ag', ad: 'Gümüş', periyot: 5, grup: 11, tip: 'gecis' },
    { atomNo: 48, sembol: 'Cd', ad: 'Kadmiyum', periyot: 5, grup: 12, tip: 'gecis' },
    { atomNo: 49, sembol: 'In', ad: 'İndiyum', periyot: 5, grup: 13, tip: 'metal' },
    { atomNo: 50, sembol: 'Sn', ad: 'Kalay', periyot: 5, grup: 14, tip: 'metal' },
    { atomNo: 51, sembol: 'Sb', ad: 'Antimon', periyot: 5, grup: 15, tip: 'yari-metal' },
    { atomNo: 52, sembol: 'Te', ad: 'Tellür', periyot: 5, grup: 16, tip: 'yari-metal' },
    { atomNo: 53, sembol: 'I', ad: 'İyot', periyot: 5, grup: 17, tip: 'halojen' },
    { atomNo: 54, sembol: 'Xe', ad: 'Ksenon', periyot: 5, grup: 18, tip: 'soygaz' },
    { atomNo: 55, sembol: 'Cs', ad: 'Sezyum', periyot: 6, grup: 1, tip: 'alkali' },
    { atomNo: 56, sembol: 'Ba', ad: 'Baryum', periyot: 6, grup: 2, tip: 'toprak-alkali' },
    // Lantanidler 57-71
    { atomNo: 57, sembol: 'La', ad: 'Lantan', periyot: 6, grup: 3, tip: 'lantanid' },
    { atomNo: 58, sembol: 'Ce', ad: 'Seryum', periyot: 6, grup: 4, tip: 'lantanid' },
    { atomNo: 59, sembol: 'Pr', ad: 'Praseodim', periyot: 6, grup: 5, tip: 'lantanid' },
    { atomNo: 60, sembol: 'Nd', ad: 'Neodim', periyot: 6, grup: 6, tip: 'lantanid' },
    { atomNo: 61, sembol: 'Pm', ad: 'Prometyum', periyot: 6, grup: 7, tip: 'lantanid' },
    { atomNo: 62, sembol: 'Sm', ad: 'Samaryum', periyot: 6, grup: 8, tip: 'lantanid' },
    { atomNo: 63, sembol: 'Eu', ad: 'Evropiyum', periyot: 6, grup: 9, tip: 'lantanid' },
    { atomNo: 64, sembol: 'Gd', ad: 'Gadolinyum', periyot: 6, grup: 10, tip: 'lantanid' },
    { atomNo: 65, sembol: 'Tb', ad: 'Terbiyum', periyot: 6, grup: 11, tip: 'lantanid' },
    { atomNo: 66, sembol: 'Dy', ad: 'Disprozyum', periyot: 6, grup: 12, tip: 'lantanid' },
    { atomNo: 67, sembol: 'Ho', ad: 'Holmiyum', periyot: 6, grup: 13, tip: 'lantanid' },
    { atomNo: 68, sembol: 'Er', ad: 'Erbiyum', periyot: 6, grup: 14, tip: 'lantanid' },
    { atomNo: 69, sembol: 'Tm', ad: 'Tulyum', periyot: 6, grup: 15, tip: 'lantanid' },
    { atomNo: 70, sembol: 'Yb', ad: 'İterbiyum', periyot: 6, grup: 16, tip: 'lantanid' },
    { atomNo: 71, sembol: 'Lu', ad: 'Lutesyum', periyot: 6, grup: 17, tip: 'lantanid' },
    { atomNo: 72, sembol: 'Hf', ad: 'Hafniyum', periyot: 6, grup: 4, tip: 'gecis' },
    { atomNo: 73, sembol: 'Ta', ad: 'Tantal', periyot: 6, grup: 5, tip: 'gecis' },
    { atomNo: 74, sembol: 'W', ad: 'Tungsten', periyot: 6, grup: 6, tip: 'gecis' },
    { atomNo: 75, sembol: 'Re', ad: 'Renyum', periyot: 6, grup: 7, tip: 'gecis' },
    { atomNo: 76, sembol: 'Os', ad: 'Osmiyum', periyot: 6, grup: 8, tip: 'gecis' },
    { atomNo: 77, sembol: 'Ir', ad: 'İridyum', periyot: 6, grup: 9, tip: 'gecis' },
    { atomNo: 78, sembol: 'Pt', ad: 'Platin', periyot: 6, grup: 10, tip: 'gecis' },
    { atomNo: 79, sembol: 'Au', ad: 'Altın', periyot: 6, grup: 11, tip: 'gecis' },
    { atomNo: 80, sembol: 'Hg', ad: 'Cıva', periyot: 6, grup: 12, tip: 'gecis' },
    { atomNo: 81, sembol: 'Tl', ad: 'Talyum', periyot: 6, grup: 13, tip: 'metal' },
    { atomNo: 82, sembol: 'Pb', ad: 'Kurşun', periyot: 6, grup: 14, tip: 'metal' },
    { atomNo: 83, sembol: 'Bi', ad: 'Bizmut', periyot: 6, grup: 15, tip: 'metal' },
    { atomNo: 84, sembol: 'Po', ad: 'Polonyum', periyot: 6, grup: 16, tip: 'yari-metal' },
    { atomNo: 85, sembol: 'At', ad: 'Astatin', periyot: 6, grup: 17, tip: 'halojen' },
    { atomNo: 86, sembol: 'Rn', ad: 'Radon', periyot: 6, grup: 18, tip: 'soygaz' },
    { atomNo: 87, sembol: 'Fr', ad: 'Fransiyum', periyot: 7, grup: 1, tip: 'alkali' },
    { atomNo: 88, sembol: 'Ra', ad: 'Radyum', periyot: 7, grup: 2, tip: 'toprak-alkali' },
    // Aktinidler 89-103
    { atomNo: 89, sembol: 'Ac', ad: 'Aktinyum', periyot: 7, grup: 3, tip: 'aktinid' },
    { atomNo: 90, sembol: 'Th', ad: 'Toryum', periyot: 7, grup: 4, tip: 'aktinid' },
    { atomNo: 91, sembol: 'Pa', ad: 'Protaktinyum', periyot: 7, grup: 5, tip: 'aktinid' },
    { atomNo: 92, sembol: 'U', ad: 'Uranyum', periyot: 7, grup: 6, tip: 'aktinid' },
    { atomNo: 93, sembol: 'Np', ad: 'Neptünyum', periyot: 7, grup: 7, tip: 'aktinid' },
    { atomNo: 94, sembol: 'Pu', ad: 'Plütonyum', periyot: 7, grup: 8, tip: 'aktinid' },
    { atomNo: 95, sembol: 'Am', ad: 'Amerikyum', periyot: 7, grup: 9, tip: 'aktinid' },
    { atomNo: 96, sembol: 'Cm', ad: 'Küriyum', periyot: 7, grup: 10, tip: 'aktinid' },
    { atomNo: 97, sembol: 'Bk', ad: 'Berkelyum', periyot: 7, grup: 11, tip: 'aktinid' },
    { atomNo: 98, sembol: 'Cf', ad: 'Kaliforniyum', periyot: 7, grup: 12, tip: 'aktinid' },
    { atomNo: 99, sembol: 'Es', ad: 'Aynştaynyum', periyot: 7, grup: 13, tip: 'aktinid' },
    { atomNo: 100, sembol: 'Fm', ad: 'Fermiyum', periyot: 7, grup: 14, tip: 'aktinid' },
    { atomNo: 101, sembol: 'Md', ad: 'Mendelevyum', periyot: 7, grup: 15, tip: 'aktinid' },
    { atomNo: 102, sembol: 'No', ad: 'Nobelyum', periyot: 7, grup: 16, tip: 'aktinid' },
    { atomNo: 103, sembol: 'Lr', ad: 'Lavrensiyum', periyot: 7, grup: 17, tip: 'aktinid' },
    { atomNo: 104, sembol: 'Rf', ad: 'Rutherfordiyum', periyot: 7, grup: 4, tip: 'gecis' },
    { atomNo: 105, sembol: 'Db', ad: 'Dubniyum', periyot: 7, grup: 5, tip: 'gecis' },
    { atomNo: 106, sembol: 'Sg', ad: 'Seaborgiyum', periyot: 7, grup: 6, tip: 'gecis' },
    { atomNo: 107, sembol: 'Bh', ad: 'Bohriyum', periyot: 7, grup: 7, tip: 'gecis' },
    { atomNo: 108, sembol: 'Hs', ad: 'Hassiyum', periyot: 7, grup: 8, tip: 'gecis' },
    { atomNo: 109, sembol: 'Mt', ad: 'Meitneriyum', periyot: 7, grup: 9, tip: 'bilinmiyor' },
    { atomNo: 110, sembol: 'Ds', ad: 'Darmstadtiyum', periyot: 7, grup: 10, tip: 'bilinmiyor' },
    { atomNo: 111, sembol: 'Rg', ad: 'Röntgenyum', periyot: 7, grup: 11, tip: 'bilinmiyor' },
    { atomNo: 112, sembol: 'Cn', ad: 'Kopernikyum', periyot: 7, grup: 12, tip: 'bilinmiyor' },
    { atomNo: 113, sembol: 'Uut', ad: 'Nihonyum', periyot: 7, grup: 13, tip: 'bilinmiyor' },
    { atomNo: 114, sembol: 'Fl', ad: 'Flerovyum', periyot: 7, grup: 14, tip: 'bilinmiyor' },
    { atomNo: 115, sembol: 'Uup', ad: 'Moskovyum', periyot: 7, grup: 15, tip: 'bilinmiyor' },
    { atomNo: 116, sembol: 'Lv', ad: 'Livermoryum', periyot: 7, grup: 16, tip: 'bilinmiyor' },
    { atomNo: 117, sembol: 'Uus', ad: 'Tennesin', periyot: 7, grup: 17, tip: 'bilinmiyor' },
    { atomNo: 118, sembol: 'Uuo', ad: 'Oganesson', periyot: 7, grup: 18, tip: 'bilinmiyor' },
];

// 2. HTML Elemanlarını Seçme
const tablo = document.getElementById('periyodik-tablo');
const lantanidlerKonteyner = document.getElementById('lantanidler');
const aktinidlerKonteyner = document.getElementById('aktinidler');

// 3. Tabloyu Oluşturan Fonksiyon
function tabloyuOlustur() {
    // Tüm element verilerini dön
    elementlerData.forEach(element => {
        // Bir div elementi oluştur
        const elDiv = document.createElement('div');
        elDiv.className = 'element'; // Temel sınıf
        elDiv.classList.add(element.tip); // Renk için tip sınıfı

        // Elementin iç HTML'ini ayarla (Atom No, Sembol ve gizli Ad)
        elDiv.innerHTML = `
            <span class="atom-no">${element.atomNo}</span>
            <span class="sembol">${element.sembol}</span>
            <span class="ad">${element.ad}</span>
        `;

        // Tıklama olay dinleyicisini ekle
        elDiv.addEventListener('click', elementeTikla);

        // Elementi grid'de doğru yere yerleştir
        if (element.tip === 'lantanid') {
            elDiv.style.gridColumn = element.grup - 2; 
            lantanidlerKonteyner.appendChild(elDiv);
        } else if (element.tip === 'aktinid') {
            elDiv.style.gridColumn = element.grup - 2; 
            aktinidlerKonteyner.appendChild(elDiv);
        } else {
            elDiv.style.gridRow = element.periyot;
            elDiv.style.gridColumn = element.grup;
            tablo.appendChild(elDiv);
        }
    });
}

// 4. Elemente Tıklama Fonksiyonu
function elementeTikla(e) {
    // e.currentTarget, olayı dinleyenin (yani 'elDiv') kendisidir
    const tiklananElement = e.currentTarget;
    
    // "Büyüme" (aktif) efekti yönetimi
    // Önce, varsa başka bir aktif elementi bul
    const mevcutAktif = document.querySelector('.element.aktif');
    
    if (mevcutAktif && mevcutAktif !== tiklananElement) {
        // Başka bir element aktifti, onu kapat.
        mevcutAktif.classList.remove('aktif');
    }
    
    // Tıklanan elementin 'aktif' sınıfını ekle veya kaldır (toggle).
    // Bu sayede aktif olana tekrar tıklayınca kapanır.
    tiklananElement.classList.toggle('aktif');
}

// 5. Başlangıç: Sayfa yüklendiğinde tabloyu oluştur
tabloyuOlustur();
