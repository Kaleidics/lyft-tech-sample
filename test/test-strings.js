const expect = require('chai').expect;
const Thirder = require('../stringSamples')

describe('Thirder', function () {

    it('return a string with every 3rd letter', function() {
        const cases = [
            { a: '123123123', expected: '333' },
            { a: 'iamyourlyftdriver', expected: 'muydv' },
            { a: '12m[]y{}n..a@@m./eabi55s#1e./dald;!i""e', expected: 'mynameiseddie' }
        ];

        cases.forEach(function(input) {
            const answer = Thirder.iterativeOne(input.a);
            expect(answer).to.equal(input.expected);
        });
    });
});