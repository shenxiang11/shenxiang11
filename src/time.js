function getCurrentTime() {
  const now = new Date();

  return {
    year: now.getFullYear(),
    month: padZero(now.getMonth() + 1),
    day: padZero(now.getDate()),
    hour: padZero(now.getHours()),
    minute: padZero(now.getMinutes()),
    second: padZero(now.getSeconds()),
  };
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}

function calcMoment() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const endOfYear = new Date(now.getFullYear(), 11, 31);

  const passed = now - startOfYear;
  const total = endOfYear - startOfYear;
  const percent = (passed / total * 100).toFixed(2);

  let totalLen = 50;
  const passedLen = Math.floor(totalLen * percent / 100);
  const restLen = totalLen - passedLen;

  const bar = '█'.repeat(passedLen) + '░'.repeat(restLen);

  return {
    percent,
    bar,
  }
}

module.exports = {
  getCurrentTime,
  calcMoment,
};
