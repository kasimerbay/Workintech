const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

// Navigation Bar
let navigation = document.querySelectorAll("nav a");

navigation.forEach((a,count) =>{
  var sira = count + 1;
  a.textContent = siteContent.nav["nav-item-"+sira];
  a.setAttribute('class', 'italic');
})

// navigation image
document.querySelectorAll("#logo-img")[0].setAttribute("src", siteContent.images["logo-img"]);


// cta h1 - button - img
document.querySelectorAll(".cta-text h1")[0].textContent = siteContent.cta.h1;
document.querySelectorAll("button")[0].textContent = siteContent.cta.button;
document.querySelectorAll("#cta-img")[0].setAttribute("src", siteContent.images["cta-img"]);

// main-content
document.querySelectorAll("#middle-img")[0].setAttribute("src", siteContent.images["accent-img"]);

document.querySelectorAll(".main-content .top-content .text-content h4")[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
document.querySelectorAll(".main-content .top-content .text-content h4")[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

document.querySelectorAll(".main-content .top-content .text-content p")[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
document.querySelectorAll(".main-content .top-content .text-content p")[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

document.querySelectorAll(".main-content .bottom-content .text-content h4")[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
document.querySelectorAll(".main-content .bottom-content .text-content h4")[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
document.querySelectorAll(".main-content .bottom-content .text-content h4")[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];

document.querySelectorAll(".main-content .bottom-content .text-content p")[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
document.querySelectorAll(".main-content .bottom-content .text-content p")[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
document.querySelectorAll(".main-content .bottom-content .text-content p")[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

// contact
document.querySelectorAll(".contact h4")[0].textContent = siteContent.iletisim["iletişim-h4"];
document.querySelectorAll(".contact p")[0].textContent = siteContent.iletisim.adres;
document.querySelectorAll(".contact p")[1].textContent = siteContent.iletisim.telefon;
document.querySelectorAll(".contact p")[2].textContent = siteContent.iletisim.email;

// footer
document.querySelectorAll("footer a")[0].setAttribute("class", "bold");
document.querySelectorAll(".bold")[0].textContent = siteContent.footer.copyright;