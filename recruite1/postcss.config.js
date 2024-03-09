// ESモジュールのインポート構文を使用します
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import formsPlugin from '@tailwindcss/forms';

export default {
  plugins: [
    tailwindcss({
      content: [
        "./index.php",
        "./**/*.js",
      ],
      theme: {
        extend: {},
      },
      plugins: [formsPlugin],
    }),
    autoprefixer,
  ],
};
