const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(process.cwd(), 'public', 'ai-logos');

function download(url, filename) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200 || res.statusCode === 302 || res.statusCode === 301) {
        if (res.headers.location) {
          return download(res.headers.location, filename).then(resolve);
        }
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          fs.writeFileSync(path.join(dir, filename), data);
          console.log(`Saved ${filename} (${data.length} bytes)`);
          resolve(true);
        });
      } else {
        console.log(`Failed ${filename}: ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`Error ${filename}: ${err.message}`);
      resolve(false);
    });
  });
}

async function run() {
  // Hugging Face SVG
  await download('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/huggingface.svg', 'huggingface.svg');
  // LangChain SVG
  await download('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/langchain.svg', 'langchain.svg');
  // Copilot (Microsoft Copilot)
  await download('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoftcopilot.svg', 'copilot-ms.svg');
}

run();
