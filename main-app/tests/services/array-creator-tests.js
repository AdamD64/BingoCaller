(function () {
    'use strict';
    describe('ensure array creation & shuffling',function() {
        var arrayCreator;

        beforeEach(function() {
            module('Tombola.BingoCaller.ArrayCreator');
            inject(function($injector) {
                arrayCreator = $injector.get('ArrayCreator');
            });
        });

        it('numbers array begins empty',function() {
            expect(arrayCreator.numbers).to.equal('');
        });
    });
})();