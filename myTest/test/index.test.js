const sinon = require('sinon');
const should = require('should');

describe('hello sinon', function () {
    before('before', function () {
        console.log('before all');
    });

    beforeEach('beforeEach', function () {
        console.log('before each');
    });

    it('hello world', function () {
        console.log('hello world');
        should.equal(1, 1);
    });

    it('sinon mock', function () {
        let obj = {
            action: function () {
                console.log('do nothing');
            }
        };

        let mock = sinon.mock(obj);
        //期待的调用情况，预先设定的，而不是调用后检查
        let expections = mock.expects('action');
        expections.atLeast(1).atMost(2).once().withArgs(1);

        obj.action(1);
        
        mock.verify();
        should.ok(expections.calledOnce, 'not called once');
        should.equal(expections.callCount, 1);
        should.ok(expections.calledWith(1));
    });
});