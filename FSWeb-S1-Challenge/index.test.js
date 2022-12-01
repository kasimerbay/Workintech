import functions from "./index";
let fenomenler;
beforeEach(() => {
  fenomenler = [
    {
      "number": 1,
      "profile": "Instagram",
      "followers": 539446645,
      "posts": 7202,
      "platform": "Instagram"
    },
    {
      "number": 2,
      "profile": "Cristiano Ronaldo",
      "followers": 473864939,
      "posts": 3338,
      "platform": "Instagram"
    },
    {
      "number": 3,
      "profile": "Kylie",
      "followers": 364542529,
      "posts": 6935,
      "platform": "Instagram"
    },
    {
      "number": 4,
      "profile": "Leo Messi",
      "followers": 355790796,
      "posts": 890,
      "platform": "Instagram"
    },
    {
      "number": 5,
      "profile": "Selena Gomez",
      "followers": 341579063,
      "posts": 1828,
      "platform": "Instagram"
    },
    {
      "number": 1,
      "profile": "Barack Obama",
      "followers": 132473746,
      "posts": 16563,
      "platform": "Twitter"
    },
    {
      "number": 2,
      "profile": "Justin Biber",
      "followers": 114165664,
      "posts": 31371,
      "platform": "Twitter"
    },
    {
      "number": 3,
      "profile": "KATY PERRY",
      "followers": 108950737,
      "posts": 11715,
      "platform": "Twitter"
    },
    {
      "number": 4,
      "profile": "Rihanna",
      "followers": 106989611,
      "posts": 10632,
      "platform": "Twitter"
    },
    {
      "number": 5,
      "profile": "Elon Musk",
      "followers": 102819963,
      "posts": 18921,
      "platform": "Twitter"
    },
    {
      "number": 1,
      "profile": "Ninja",
      "followers": 18296006,
      "posts": "NA",
      "platform": "Twitch"
    },
    {
      "number": 2,
      "profile": "auronplay",
      "followers": 13377575,
      "posts": "NA",
      "platform": "Twitch"
    },
    {
      "number": 3,
      "profile": "Rubius",
      "followers": 12524137,
      "posts": "NA",
      "platform": "Twitch"
    },
    {
      "number": 4,
      "profile": "Tfue",
      "followers": 11145556,
      "posts": "NA",
      "platform": "Twitch"
    },
    {
      "number": 5,
      "profile": "shroud",
      "followers": 10244388,
      "posts": "NA",
      "platform": "Twitch"
    },
    {
      "number": 1,
      "profile": "charli damelio",
      "followers": 141200000,
      "posts": 2211,
      "platform": "TikTok"
    },
    {
      "number": 2,
      "profile": "Khabane lame",
      "followers": 139700000,
      "posts": 1055,
      "platform": "TikTok"
    },
    {
      "number": 3,
      "profile": "Bella Poarch",
      "followers": 89900000,
      "posts": 470,
      "platform": "TikTok"
    },
    {
      "number": 4,
      "profile": "Addison Rae",
      "followers": 87700000,
      "posts": 1683,
      "platform": "TikTok"
    },
    {
      "number": 5,
      "profile": "Will Smith",
      "followers": 72200000,
      "posts": 136,
      "platform": "TikTok"
    },
  ];
});

describe("sa", () => {
  it("sa -> as", () => {
    expect(functions.sa()).toBe("as");
  });
});

describe("indekseGoreFenomen", () => {
  it("indekseGoreFenomen ->  `{indeks}. indekste bulunan fenomen: {profile}` şeklinde sonuç döndürür", () => {
    expect(functions.indekseGoreFenomen(fenomenler, 3)).toBe(
      "3. indekste bulunan fenomen: Leo Messi"
    );
  });

  it("indekseGoreFenomen ->  `{indeks}. indekste bulunan fenomen: {profile}` şeklinde sonuç döndürür", () => {
    expect(functions.indekseGoreFenomen(fenomenler, 5)).toBe(
      "5. indekste bulunan fenomen: Barack Obama"
    );
  });
});

describe("profilListesi", () => {
  it("profilListesi -> sadece fenomen profil adları kapsayan bir dizi döndürür.", () => {
    expect(functions.profilListesi(fenomenler)).toEqual([
      "Instagram",
      "Cristiano Ronaldo",
      "Kylie",
      "Leo Messi",
      "Selena Gomez",
      "Barack Obama",
      "Justin Biber",
      "KATY PERRY",
      "Rihanna",
      "Elon Musk",
      "Ninja",
      "auronplay",
      "Rubius",
      "Tfue",
      "shroud",
      "charli damelio",
      "Khabane lame",
      "Bella Poarch",
      "Addison Rae",
      "Will Smith",
    ]);
  });
});

describe("fenomenSil", () => {
  it("fenomenSil -> istenen indeksteki fenomeni çıkarır", () => {
    expect(functions.fenomenSil(fenomenler, 0)).toStrictEqual([
      {
        "number": 2,
        "profile": "Cristiano Ronaldo",
        "followers": 473864939,
        "posts": 3338,
        "platform": "Instagram"
      },
      {
        "number": 3,
        "profile": "Kylie",
        "followers": 364542529,
        "posts": 6935,
        "platform": "Instagram"
      },
      {
        "number": 4,
        "profile": "Leo Messi",
        "followers": 355790796,
        "posts": 890,
        "platform": "Instagram"
      },
      {
        "number": 5,
        "profile": "Selena Gomez",
        "followers": 341579063,
        "posts": 1828,
        "platform": "Instagram"
      },
      {
        "number": 1,
        "profile": "Barack Obama",
        "followers": 132473746,
        "posts": 16563,
        "platform": "Twitter"
      },
      {
        "number": 2,
        "profile": "Justin Biber",
        "followers": 114165664,
        "posts": 31371,
        "platform": "Twitter"
      },
      {
        "number": 3,
        "profile": "KATY PERRY",
        "followers": 108950737,
        "posts": 11715,
        "platform": "Twitter"
      },
      {
        "number": 4,
        "profile": "Rihanna",
        "followers": 106989611,
        "posts": 10632,
        "platform": "Twitter"
      },
      {
        "number": 5,
        "profile": "Elon Musk",
        "followers": 102819963,
        "posts": 18921,
        "platform": "Twitter"
      },
      {
        "number": 1,
        "profile": "Ninja",
        "followers": 18296006,
        "posts": "NA",
        "platform": "Twitch"
      },
      {
        "number": 2,
        "profile": "auronplay",
        "followers": 13377575,
        "posts": "NA",
        "platform": "Twitch"
      },
      {
        "number": 3,
        "profile": "Rubius",
        "followers": 12524137,
        "posts": "NA",
        "platform": "Twitch"
      },
      {
        "number": 4,
        "profile": "Tfue",
        "followers": 11145556,
        "posts": "NA",
        "platform": "Twitch"
      },
      {
        "number": 5,
        "profile": "shroud",
        "followers": 10244388,
        "posts": "NA",
        "platform": "Twitch"
      },
      {
        "number": 1,
        "profile": "charli damelio",
        "followers": 141200000,
        "posts": 2211,
        "platform": "TikTok"
      },
      {
        "number": 2,
        "profile": "Khabane lame",
        "followers": 139700000,
        "posts": 1055,
        "platform": "TikTok"
      },
      {
        "number": 3,
        "profile": "Bella Poarch",
        "followers": 89900000,
        "posts": 470,
        "platform": "TikTok"
      },
      {
        "number": 4,
        "profile": "Addison Rae",
        "followers": 87700000,
        "posts": 1683,
        "platform": "TikTok"
      },
      {
        "number": 5,
        "profile": "Will Smith",
        "followers": 72200000,
        "posts": 136,
        "platform": "TikTok"
      },
    ]);
  });
});

describe("fenomenEkle", () => {
  it("fenomenEkle -> yeni oluşturulan nesneyi kopyalanan diziye ekler", () => {
    expect(functions.fenomenEkle(fenomenler, 6, "Workintech", 10000000, 2022, "Instagram")).toEqual([{
      "number": 1,
      "profile": "Instagram",
      "followers": 539446645,
      "posts": 7202,
      "platform": "Instagram"
    },
    {
      "number": 2,
      "profile": "Cristiano Ronaldo",
      "followers": 473864939,
      "posts": 3338,
      "platform": "Instagram"
    },
    {
      "number": 3,
      "profile": "Kylie",
      "followers": 364542529,
      "posts": 6935,
      "platform": "Instagram"
    },
    {
      "number": 4,
      "profile": "Leo Messi",
      "followers": 355790796,
      "posts": 890,
      "platform": "Instagram"
    },
    {
      "number": 5,
      "profile": "Selena Gomez",
      "followers": 341579063,
      "posts": 1828,
      "platform": "Instagram"
    },
    {
      "number": 1,
      "profile": "Barack Obama",
      "followers": 132473746,
      "posts": 16563,
      "platform": "Twitter"
    },
    {
      "number": 2,
      "profile": "Justin Biber",
      "followers": 114165664,
      "posts": 31371,
      "platform": "Twitter"
    },
    {
      "number": 3,
      "profile": "KATY PERRY",
      "followers": 108950737,
      "posts": 11715,
      "platform": "Twitter"
    },
    {
      "number": 4,
      "profile": "Rihanna",
      "followers": 106989611,
      "posts": 10632,
      "platform": "Twitter"
    },
    {
      "number": 5,
      "profile": "Elon Musk",
      "followers": 102819963,
      "posts": 18921,
      "platform": "Twitter"
    },
    {
      "number": 1,
      "profile": "Ninja",
      "followers": 18296006,
      "posts": "NA",
      "platform": "Twitch"
    },
    {
      "number": 2,
      "profile": "auronplay",
      "followers": 13377575,
      "posts": "NA",
      "platform": "Twitch"
    },
    {
      "number": 3,
      "profile": "Rubius",
      "followers": 12524137,
      "posts": "NA",
      "platform": "Twitch"
    },
    {
      "number": 4,
      "profile": "Tfue",
      "followers": 11145556,
      "posts": "NA",
      "platform": "Twitch"
    },
    {
      "number": 5,
      "profile": "shroud",
      "followers": 10244388,
      "posts": "NA",
      "platform": "Twitch"
    },
    {
      "number": 1,
      "profile": "charli damelio",
      "followers": 141200000,
      "posts": 2211,
      "platform": "TikTok"
    },
    {
      "number": 2,
      "profile": "Khabane lame",
      "followers": 139700000,
      "posts": 1055,
      "platform": "TikTok"
    },
    {
      "number": 3,
      "profile": "Bella Poarch",
      "followers": 89900000,
      "posts": 470,
      "platform": "TikTok"
    },
    {
      "number": 4,
      "profile": "Addison Rae",
      "followers": 87700000,
      "posts": 1683,
      "platform": "TikTok"
    },
    {
      "number": 5,
      "profile": "Will Smith",
      "followers": 72200000,
      "posts": 136,
      "platform": "TikTok"
    },
    {
      "number": 6,
      "profile": "Workintech",
      "followers": 10000000,
      "posts": 2022,
      "platform": "Instagram"
    }
  ]);
    expect(functions.fenomenEkle(fenomenler)).toHaveLength(++fenomenler.length);
  });
});

describe("enFenomenler", () => {
  it("enFenomenler -> yüzmilyon'dan (100000000) fazla takipçisi olan fenomenleri döndürür", () => {
    expect(functions.enFenomenler(fenomenler)).toEqual([
      "Instagram",
      "Cristiano Ronaldo",
      "Kylie",
      "Leo Messi",
      "Selena Gomez",
      "Barack Obama",
      "Justin Biber",
      "KATY PERRY",
      "Rihanna",
      "Elon Musk",
      "charli damelio",
      "Khabane lame"
    ]);
  });
});

describe("fenomenGonderimSayisi", () => {
  it("fenomenGonderimSayisi -> istenen fenomenin gönderim(posts) sayısını döndürür", () => {
    expect(functions.fenomenGonderimSayisi(fenomenler, "Will Smith")).toEqual(136);
  });
});

describe("platformaGoreCokGonderiYapanFenomen", () => {
  it("platformaGoreCokGonderiYapanFenomen ->  Verilen platform da en çok gönderi yapan fenomen adını döndürür", () => {
    expect(functions.platformaGoreCokGonderiYapanFenomen(fenomenler, "TikTok")).toEqual("charli damelio");
  });
});

describe("platformaGoreCokGonderiYapanFenomen", () => {
  it("platformaGoreCokGonderiYapanFenomen ->  Verilen platform da en çok gönderi yapan fenomen adını döndürür", () => {
    expect(functions.platformaGoreCokGonderiYapanFenomen(fenomenler, "Twitter")).toEqual("Justin Biber");
  });
});
