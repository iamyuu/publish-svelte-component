const rewire = require("rewire")
const preprocess = rewire("./preprocess")
const main = preprocess.__get__("main")
const preprocessSvelte = preprocess.__get__("preprocessSvelte")
// @ponicode
describe("main", () => {
    test("0", async () => {
        await main()
    })
})

// @ponicode
describe("preprocessSvelte", () => {
    test("0", async () => {
        await preprocessSvelte("/var/up_pink.stl.atx")
    })

    test("1", async () => {
        await preprocessSvelte("/net/panel.dvi.crd")
    })

    test("2", async () => {
        await preprocessSvelte("/usr/sbin/tan_district.geo.qxt")
    })

    test("3", async () => {
        await preprocessSvelte("/etc/ppp/pre_emptive_manager.efif.bcpio")
    })

    test("4", async () => {
        await preprocessSvelte("/tmp/payment_invoice.ogg.cmc")
    })

    test("5", async () => {
        await preprocessSvelte(undefined)
    })
})
