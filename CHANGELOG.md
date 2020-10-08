## Unreleased



## 1.1.2 (Octover 8, 2020)

### Add

- `Container-Order` 新增：「餐盒」、「單點」使菜單分類更清楚
- `Component-Report` 新增：「餐盒」、「單點」table header 分類

### Change

- `Container-Order` 使用 Grid 元件排版
- `Container-Meal` 調整文案：`金額 ${price} - 目前數量 ${num}` -> `金額 ${price} 元 - 已售出 ${num} 份`
- `Component-Totaling` 調整文案：`小記 - $(today)` -> `今日小記（${roday}）`
- `Component-Totaling` 調整文案：`總金額: ${props.sum} 元` -> `總金額：${props.sum} 元`，調整冒號
- `Component-Report` 調整 0 樣式，顯示較淡灰色，增加識別度
- `Component-Report` 調整表格文字排列為 `center`

### 其他

- 修正 sidebar 點擊不會觸動換頁的問題：調整觸發 click 事件層級位置
- 調整 menu config
- 新增 eslint