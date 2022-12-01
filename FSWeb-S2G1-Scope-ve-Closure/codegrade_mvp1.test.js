import functions from './index.js';

const takimSkoru = function() {
    return Math.floor(Math.random() * Math.floor(3));
  }


describe('as', ()=>{
    it('as returns sa', ()=>{
        expect(functions.sa()).toBe('as');
    })
});

describe('takimSkoru', ()=>{
    it('takimSkoru returns a random number', ()=>{
        expect(functions.takimSkoru()).toBeLessThanOrEqual(25);
    })
});

describe('macSonucu', ()=>{
    it('macSonucu returns an object', ()=>{
        expect(functions.macSonucu(takimSkoru, 4)).toEqual(expect.objectContaining({
            EvSahibi: expect.any(Number),
            KonukTakim: expect.any(Number),
          }))
    })
});

describe('periyotSkoru', ()=>{
    it('periyotSkoru returns an object', ()=>{
        expect(functions.periyotSkoru(takimSkoru)).toEqual(expect.objectContaining({
            EvSahibi: expect.any(Number),
            KonukTakim: expect.any(Number),
          }));
    });
});


