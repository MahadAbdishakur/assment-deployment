const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("check to see if shuffle array returns array", () => {
        expect(shuffleArray).toBe(shuffleArray);
    })
    let shuffleItems = shuffleArray.length;
    test("test to see if shufflearry has the same amount", ()=>{
        expect(shuffleArray).toEqual(shuffleItems);
    });
    test('items are present in array', () => {
        expect(shuffleArray)
        console.log(shuffleArray);
    });
})
