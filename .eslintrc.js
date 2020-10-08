module.exports = {
    env: {
      browser: true,
      es2020: true,
    },
    extends: [
      'standard',
      'react-app',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      strict: 'off', // 要求或禁止使用严格模式指令
      'no-console': 'off', // 禁用 console
      'react/jsx-uses-vars': 'error', // 檢查未使用的jsx組件
      'react-hooks/rules-of-hooks': 'error', // 檢查 Hook 的規則
      semi: ['error', 'always'], // 要求在语句末尾使用分号
      'comma-dangle': ['error', 'always-multiline'], // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号
      'one-var': 'off', // 默認 要求每个变量有一个声明
      'no-case-declarations': 'error', // 禁止在 case 或 default 子句中出现词法声明
      'react-hooks/exhaustive-deps': 'off', // 檢查 effect 的相依性
      'no-useless-escape': 'off', // 禁用不必要的转义
      'no-control-regex': 'off', // 禁止在正则表达式中使用控制字符
      'linebreak-style': 'off', // 强制使用一致的换行符风格
    },
  };
  