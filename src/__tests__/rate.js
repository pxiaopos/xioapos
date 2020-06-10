import expectExport from 'expect';

import { 
    ROI,
    ARR,
    CI,
    toPercentString,
} from '../rate'

describe('Financial', () => {
    test('ROI', () => {
        const roi = new ROI()

        // 投資 100 萬於某基金，投資「三個月」，基金現值 103 萬
        expectExport(toPercentString(roi.markupRatio(100, 103))).toEqual('3%')
        // 投資 50 萬於某基金，投資「三年」，基金現值 60 萬
        expectExport(toPercentString(roi.markupRatio(50, 60))).toEqual('20%')
        // 投資 100 萬於某基金，「一年」後連本帶利領回 102.5 萬
        expectExport(toPercentString(roi.markupRatio(100, 102.5))).toEqual('2.5%')
    })

    test('ARR', () => {
        /*
            Q: 上述三個案例的「計算時間」都不同，我們要怎麼知道哪個投資表現比較好呢？
            A: 必須換成等值的「一年報酬率」，又稱「年化報酬率」，才可以知道哪個表現比較好。但投資行為是以「月複利」計算，無法直接用除法來計算，需要透過公式來換算
        */

        const roi = new ROI()
        const arr = new ARR()

        // 11.881960859953178
        expectExport(
            toPercentString(
                arr.calculate(roi.markupRatio(100, 103), 3)
            )
        ).toEqual('11.88%')

        // 6.0928006605666285
        expectExport(
            toPercentString(
                arr.calculate(roi.markupRatio(50, 60), 36)
            )
        ).toEqual('6.09%')

        // 2.4718035238114267
        expectExport(
            toPercentString(
                arr.calculate(roi.markupRatio(100, 102.5), 12)
            )
        ).toEqual('2.47%')

        /*
            進行計算後可以看出投資 100 萬於某基金，投資「三個月」最後拿回 103 萬的 ARR 最好，為 11.88%
        */
    })

    test('Complex', () => {
        /*
            簡單的投資從年化報酬率就能看出結果，但真實世界的投資往往更複雜
            如股票通常會：
                - 股票每年固定配息
                - 同一檔股票不定期多次買賣
            債券基金：
                - 淨值頗動
                - 每月配息
        */

        /*
            案例：用 ROI 看股票

                假設今天以 100 萬買入台積電，三年後賺了 100 萬，所以投資報酬率為 100%。
                此時加碼 100 萬，總報酬率該如何計算？
        */

        const roi = new ROI()

        // 以 100 萬買入台積電，三年後股票價值 200 萬
        expectExport(
            toPercentString(roi.markupRatio(100, 200))
        ).toEqual('100%')

        // 此時加碼 100 萬，股票價值為 300 萬，但 ROI 立刻下降為 50%
        expectExport(
            toPercentString(roi.markupRatio(200, 300))
        ).toEqual('50%')

        /*
            Q: 投資報酬率立刻下降 50% 這是為什麼呢
            A: 沒有考慮「金錢的時間價值」
        */

        /*
            案例：用 ROI 看股票

            年初時以每股 100 買入 2 張台積電（2,000 股），
            第 6 個月的時候再以每股 110 買入 1 張，
            第 12 個月的時候以 120 的價錢賣出 3 張。

            此時的整體投資報酬率為多少？
        */

        expectExport(
            toPercentString(
                roi.markupRatio(
                    (100 * 2 * 1000) + (110 * 1 * 1000),
                    (120 * 3 * 1000)
                )
            )
        ).toEqual('16.13%')

        /*
            這樣算法是不對的！
            第一次買的投資期間是 12 個月，但第二次買的卻只有 6 個月，不同時期投入的資金不可以簡單的相加來計算 ARR。
            如果把同樣的錢拿去銀行定存，銀行會用「複利」的方式來計算你的投資金額
        */

        // const ci = new CI()
        // expectExport(ci.calculate(100 * 2 * 1000, ) + ci.calculate(110 * 1 * 1000)).toEqual('16.13%')

    })
})
