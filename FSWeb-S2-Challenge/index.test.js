import functions from './index';

const yenidizi = [
  'Annem ekmek almak için gitti.',
  'Babam her zaman çok sevdi.',
  "Annemin bugün 2'de doğum günü.",
  'Olanları unutup bir daha dönemem.',
  'Her zaman içinde yarası var.',
  'O zaman senin bu halindim.',
  'Artık içimden bir şey gelmiyor.',
  'Kader bizi her zaman ayırdı.',
  'Hiç bir zaman yazılanı silemedim.',
  'İçimden gel dedim ama gelmedin.',
  'Kader o defteri tekrar açamaz.',
  'Şarkılar seni bana hatırlatan gerçekti.',
  'Bu gece çok uykum vardı.',
  'Neden böyle yaptığına anlam veremedim.',
  'Benim boyum ondan bayağı kısaydı.',
  'Senin gibi birini sevdim.',
  'Kader seni yeniden yazamıyorum.',
  'Neden bu kadar acı?',
  'Ben böyle olmasını istemedim.',
  'Sonumu ve önümü bilemiyorum.',
  'Sana gel bile diyemiyorum.',
  'Onu çok seviyor.',
  'Olan oldu artık.',
  'Basım çok ağrıyor.',
  'Neden böyle olduk?',
  'Nereden nereye gelmiştik.',
  'Düşünmekten, kendimden yoruldum.',
  'Böyle yaptı.',
  'Suçlu değilsin.',
  'Neden yaptın?',
  'Sana değer.',
  'Acım içimde.',
  'Annen hazırdı.',
  'Bıktım.',
  'İstedim.',
  'Yaptım.',
  'Nedendi?',
  'Yoruldum.'
];

describe('saFunction', ()=>{
    it('sa, as döndürüyor', ()=>{
        expect(functions.sa()).toBe('as');
    })
});
//örnek görev
describe('bircumle stringi', ()=>{
    it('bircumle değişkeni istenilen cümleyi döndürüyor', ()=>{
	expect(functions.bircumle).toEqual("Ben iyi bir yazılımcı olacağım!");
    })
});
//görev 1

describe('cumlelereDonustur', ()=>{
    it('cumlelereDonustur cümleleri içeriyor', ()=>{
	expect(functions.cumlelereDonustur(functions.cumleler, " ")).toEqual(yenidizi);
	expect(functions.cumlelereDonustur(functions.cumleler)).toEqual([
  'Annem,ekmek,almak,için,gitti.',
  'Babam,her,zaman,çok,sevdi.',
  "Annemin,bugün,2'de,doğum,günü.",
  'Olanları,unutup,bir,daha,dönemem.',
  'Her,zaman,içinde,yarası,var.',
  'O,zaman,senin,bu,halindim.',
  'Artık,içimden,bir,şey,gelmiyor.',
  'Kader,bizi,her,zaman,ayırdı.',
  'Hiç,bir,zaman,yazılanı,silemedim.',
  'İçimden,gel,dedim,ama,gelmedin.',
  'Kader,o,defteri,tekrar,açamaz.',
  'Şarkılar,seni,bana,hatırlatan,gerçekti.',
  'Bu,gece,çok,uykum,vardı.',
  'Neden,böyle,yaptığına,anlam,veremedim.',
  'Benim,boyum,ondan,bayağı,kısaydı.',
  'Senin,gibi,birini,sevdim.',
  'Kader,seni,yeniden,yazamıyorum.',
  'Neden,bu,kadar,acı?',
  'Ben,böyle,olmasını,istemedim.',
  'Sonumu,ve,önümü,bilemiyorum.',
  'Sana,gel,bile,diyemiyorum.',
  'Onu,çok,seviyor.',
  'Olan,oldu,artık.',
  'Basım,çok,ağrıyor.',
  'Neden,böyle,olduk?',
  'Nereden,nereye,gelmiştik.',
  'Düşünmekten,,kendimden,yoruldum.',
  'Böyle,yaptı.',
  'Suçlu,değilsin.',
  'Neden,yaptın?',
  'Sana,değer.',
  'Acım,içimde.',
  'Annen,hazırdı.',
  'Bıktım.',
  'İstedim.',
  'Yaptım.',
  'Nedendi?',
  'Yoruldum.'
]);
    })
});
//görev 2

describe('paragrafOlustur', ()=>{
    it('paragrafOlustur fonksiyonu istenilen paragrafı üretiyor', ()=>{
	expect(functions.paragrafOlustur(functions.cumleler,functions.cumleKur,functions.cumlelereDonustur)).toEqual("Babam her zaman çok sevdi.Olanları unutup bir daha dönemem.O zaman senin bu halindim.Kader bizi her zaman ayırdı.İçimden gel dedim ama gelmedin.");
    })
});

//görev 3

describe('sebzeler meyveler', ()=>{
    it('meyveler son ve ilk elemanı diziden çıkarıldı', ()=>{
	expect(functions.meyveler).toEqual(['🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍐','🍑','🍒','🍓','🥝']);
    })
    it('sebzeler dizisinde aç bir tavşan ve kirpi tespit edildi', ()=>{
	expect(functions.sebzeler).toEqual(['🐇','🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑','🦔']);
    })
    it('manav dizisi sebzeler ve meyveleri içeriyor', ()=>{
	expect(functions.manav).toEqual(['🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍐','🍑','🍒','🍓','🥝','🐇','🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑','🦔']);
    })
});


describe('emojileriDonustur', ()=>{
	
    it('emojileriDonustur fonksiyonu verilen mesajdaki emojileri dönüştürüyor', ()=>{
	expect(functions.emojileriDonustur("Selam :) Nasılsın :D Bugünkü olay çok komikti :P ama sonra çok şaşırdık :o biraz da üzüldük :( ama yine de seviliyorsun <3",functions.emojiler)).toEqual("Selam 🙂 Nasılsın 😁 Bugünkü olay çok komikti 😛 ama sonra çok şaşırdık 😱 biraz da üzüldük 😔 ama yine de seviliyorsun ❤️");
    })
});