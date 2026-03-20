const fs = require('fs');
const content = fs.readFileSync('assets/index-BqfKpPIn.js', 'utf8');
const index = content.indexOf('pandavideo.com');
if (index !== -1) {
  console.log('Found "pandavideo.com" at index', index);
  console.log('Context:');
  console.log(content.substring(Math.max(0, index - 500), index + 500));
} else {
  console.log('Not found pandavideo');
}
