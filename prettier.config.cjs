/** @type {import("prettier").Config} */
const config = {
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  printWidth: 80,
  importOrder: [
    '^(react/(.*)$)|^(react-(.*)$)|^(react$)|^(next/(.*)$)|^(next$)|^(@next/(.*)$)|^(next-(.*)$)',
    '<THIRD_PARTY_MODULES>',
    '^@/hooks/(.*)$',
    '^@/components/(.*)$',
    '^@/utils/(.*)$',
    '^@/',
    '^[./]',
    '^[.]/[-a-zA-Z0-9_]+[.](css|scss|less)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindConfig: './tailwind.config.ts',
};

module.exports = config;
