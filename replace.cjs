const fs = require('fs');
let code = fs.readFileSync('src/app/App.tsx', 'utf8');
code = code.replace(/tr\.([a-zA-Z0-9_]+)/g, "t('$1')");
fs.writeFileSync('src/app/App.tsx', code);
console.log('Done!');
