module.exports = {
  content: [
    "./index.php",
    "./header.php",
    "./footer.php",
    "./**/*.{vue,js,ts,jsx,tsx,}", // ".js"ファイルだけでなく、他のファイルタイプも監視します。
    "./assets/scripts/*.js",
    "./assets/styles/input.css", // assets/stylesフォルダの中のCSSファイルを監視
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans JP', 'sans-serif'],
        'kozuka': ['kozuka-gothic-pr6n', 'sans-serif'],

      },
      colors: {
        gold: '#82691B',
      },
      width: {
        '90p': '90%',
        '80p': '80%',
        '79p': '79%',
        '70p': '70%',
        '65p': '65%',
        '60p': '60%',
        '50p': '50%',
        '40p': '40%',
        '37p': '37%',
        '35p': '35%',
        '21p': '21%',
        '50r': '800px',
        '484px': '484px',
      },
      height: {
        '90p': '90%',
        '140vh': '140vh',
        '130vh': '130vh',
        '120vh': '120vh',
        '115vh': '115vh',
        '110vh': '110vh',
        '90vh': '90vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '60vh': '60vh',
        '50vh': '50vh',
        '589px': '589px',
        '35r': '550px',
      },
      inset: {
        '10p': '10%',
        '15p': '15%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
        '10vw': '10vw',
        '7vw': '7vw',
        '5vw': '5vw',
        // ... 必要に応じて追加のパーセンテージ ...
      },
      letterSpacing: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
      },
      padding: {
        '30': '7.5rem',
        '15': '3.75rem',
      },
      minHeight: {
        '288': '288px',
      },
      lineHeight: {
        '11': '3rem', 
      }
    },
  },
  plugins: [
  ],
};