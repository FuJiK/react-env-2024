import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// import { settings } from "./.eslintrc.cjs"; //こうはCommonJSでは書かない
import react from "@vitejs/plugin-react-swc";
// import react from "eslint-plugin-react";
import pkg from './.eslintrc.cjs';
const { settings } = pkg;
//commonJSはこの書き方でImport

export default [
  {
  settings: {
    react: {
      version: 'detect', // Reactバージョンを自動的に検出
    },
  },
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "@typescript-eslint/eslint-plugin";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// import react from "@vitejs/plugin-react-swc";
// import pkg from './.eslintrc.cjs';
// const { settings } = pkg;

// export default {
//   settings: {
//     react: {
//       version: 'detect', // Reactバージョンを自動的に検出
//     },
//   },
//   parser: '@typescript-eslint/parser',  // TypeScriptのパーサーを設定
//   parserOptions: {
//     ecmaVersion: 2020,  // ECMAScriptのバージョンを指定
//     sourceType: 'module',  // モジュールタイプを指定
//     ecmaFeatures: {
//       jsx: true,  // JSXの解析を有効にする
//     },
//   },
//   languageOptions: {
//     globals: globals.browser,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',  // TypeScript用の推奨設定を適用
//     'plugin:react/recommended',  // React用の推奨設定を適用
//     'plugin:react-hooks/recommended',  // React Hooks用の推奨設定を適用
//   ],
//   plugins: [
//     'react',
//     '@typescript-eslint',
//   ],
//   rules: {
//     'react/react-in-jsx-scope': 'off',
//     'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
//   },
// };
