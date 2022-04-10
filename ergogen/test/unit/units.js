const u = require('../../src/units')

describe('Units', function() {

    it('defaults', function() {
        // check that an empty config has the default units (and nothing more)
        const def = u.parse({})
        Object.keys(def).length.should.equal(4)
        def.U.should.equal(19.05)
        def.u.should.equal(19)
        def.cx.should.equal(18)
        def.cy.should.equal(17)
    })

    it('units', function() {
        // check that units can contain formulas, and reference each other
        const res = u.parse({
            units: {
                a: 'cx / 2',
                b: 'a + 1'
            }
        })
        Object.keys(res).length.should.equal(6)
        res.a.should.equal(9)
        res.b.should.equal(10)
        // also check that order matters, which it should
        u.parse.bind(this, {
            units: {
                a: 'b + 1',
                b: 'cx / 2'
            }
        }).should.throw()
    })

    it('variables', function() {
        // check that variables work, and can override units
        const res = u.parse({
            units: {
                a: 'cx / 2',
            },
            variables: {
                a: 'U + 1'
            }
        })
        Object.keys(res).length.should.equal(5)
        res.a.should.equal(20.05)
    })

})