module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'plugin:react-redux/recommended',
    // 'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'react-hooks', 'react-redux'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md
    ecmaFeatures: {
      jsx: true,
    },
    // project: './tsconfig.eslint.json',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    // jest: true,
  },
  settings: {
    // importタグの拡張子がらみTS対応
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {},
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
    // importの際にあーだこーだ言われたくないものを
    'import/core-modules': ['enzyme', '@storybook/react'],
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
  rules: {
    // クラスメンバーは改行で区切るが、1行の場合はスルー
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          {
            name: 'react-redux',
            importNames: ['useDispatch', 'useSelector'],
            message: 'useDispatch and useSelector have a huge power. are you really want?',
          },
        ],
      },
    ],
    // yoda記法をrangeに限り有効化
    yoda: ['error', 'never', { exceptRange: true }],
    // default exportを押す 無効化
    'import/prefer-default-export': 'off',
    // ~が機能しないため外す
    'import/no-unresolved': 'off',
    // import演算子に使用する拡張子をちゃんと明示的にする js系以外は強要
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // いくつかの設定ファイルはdevDependenciesをimportしても警告しない
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'gatsby-*.js',
          'test/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          '**/*{.,_}{test,spec,story}.{js,jsx,ts,tsx}',
          '**/*.config.js',
          '**/*.config.*.js',
        ],
        optionalDependencies: false,
      },
    ],

    // 端折った名前を禁止するのは管理しづらいのでやめ
    'unicorn/prevent-abbreviations': 'off',
    // ファイル名縛りは融通がきかないのでやめ
    'unicorn/filename-case': 'off',
    // getElementByIdとかを一切禁止してquerySelectorオンリーにするのはやりすぎでは
    'unicorn/prefer-query-selector': 'off',

    /*
     * react
     */
    // prop typesはTSなので使わない
    'react/prop-types': 'off',
    // JSXが入ってる拡張子はtsx 一応jsxも入れとく
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    // propsとか使うときにあらかじめ分割代入して使う クラスフィールドの場合は無視でほかは強制
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    // メソッドやらプロパティやらの順序を縛る 無効化 いろいろめんどくさい
    'react/sort-comp': 'off',
    // stateをクラスプロパティの宣言と同時に初期化するようにする
    'react/state-in-constructor': ['error', 'never'],
    // propsを渡す際にspread operatorで渡すやり方を一部コンポーネントを除いて禁止 初見殺しなので
    'react/jsx-props-no-spreading': ['error', { exceptions: ['Head', 'Component'] }],
    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 'warn',

    /*
     * typescript
     */
    // publicとかprivateなどのアクセス修飾子を強要 無効化 JSに寄せたいし、そもそもなるべくなくてもいいように書きたい
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // 関数のexportの並び順をしばる 有効化
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    // 関数の戻り値を強制 無効化 voidのみ無効にできたら有効にしたいができないので全部OFF
    '@typescript-eslint/explicit-function-return-type': 'off',
    // interfaceの命名をIはじまりに 無効化 C#じゃないんで
    '@typescript-eslint/interface-name-prefix': 'off',
    // 空のinterfaceをしばる 無効化 アクセス修飾子の代わりに使うことがあるんで
    '@typescript-eslint/no-empty-interface': 'off',
    // 未使用の変数を警告 無効化 tscではねる
    '@typescript-eslint/no-unused-vars': 'off',
    // any禁止 無効化 tscに任せる
    '@typescript-eslint/no-explicit-any': 'off',
    // requireを蹴る 無効化 global-requireって設定があるからいらん
    '@typescript-eslint/no-var-requires': 'off',
    // interfaceでOKなものをtypeで書いてたら怒る 無効化 今っぽくない
    '@typescript-eslint/prefer-interface': 'off',
  },
};
