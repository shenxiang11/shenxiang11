const fs = require('node:fs');
const path = require('node:path');
const ejs = require('ejs');
const {getCurrentTime, calcMoment} = require("./time");
const {getImageUrl} = require("./dailyImage");

const tplPath = path.join(__dirname, 'template.md');
const outputPath = path.join(__dirname, '../README.md');

const main = async () => {
  const tplStr = fs.readFileSync(tplPath, 'utf-8');
  const {
    year,
    month,
    day,
    hour,
    minute,
    second,
  } = getCurrentTime();

  const dailyImage = await getImageUrl();

  const moment = calcMoment();

  const mdStr = ejs.render(tplStr, {
    updateAt: `${year}年${month}月${day}日 ${hour}:${minute}:${second}`,
    dailyImage,
    moment,
  });


  fs.writeFileSync(outputPath, mdStr, 'utf-8');
}

main();
