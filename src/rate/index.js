import { Decimal } from 'decimal.js';

// Decimal 小教室

// ----- 四捨五入
// y = new Decimal(9.499)
// y.toNearest(0.5, Decimal.ROUND_UP)       // '9.5'
// y.toNearest(0.5, Decimal.ROUND_DOWN)     // '9'

export const toPercentString = (num) => {

    return Decimal.mul(num, 100).toString() + "%"
}

// # 投資報酬率（return on investment，ROI）
// 標價率（Mark-up Ratio）的 投資報酬率 = (銷售收入－銷售成本) / 銷售成本。
// 投資標的賺（或賠）相當於投資金額的百分比

export class ROI {
    markupRatio(cost, revenue) {
        // (revenue - cost) / cost
        return Decimal.sub(revenue, cost).div(cost).toFixed(4, Decimal.ROUND_HALF_EVEN)
    }
}

// # 年化報酬率(Annualized rate of return, ARR)
// 年化收益率是指投資期限為一年所獲的收益率。
// 年化報酬率 = ((1+RM)^1/m - 1) * 12
// RM 投資報酬率
// M 投資月數
// 「銀行定存牌告年利率」是年化報酬率

export class ARR {
    calculate(RM, totalMounth) {
        // ((1+RM)^1/totalMounth - 1) * 12
        return Decimal.add(1, RM).pow(Decimal.div(1, totalMounth)).sub(1).mul(12).toFixed(4, Decimal.ROUND_HALF_EVEN)
    }
}

// # 複利（ompound interest）
// 假設年化報酬率為 r，則月利率為 r / 12
// 滿期拿回金額 = 本金 * ( 1 + r/12 )^m
export class CI {
    calculate(cost, RM, totalMounth) {
        // cost * ( 1 + (RM / 12)) ^ totalMounth
        return Decimal.mul(cost, Decimal.add(1, Decimal.div(RM, 12))).pow(totalMounth)
    }
}