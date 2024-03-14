
const prefix = 'https://cn.bing.com';
const url = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1';

async function getImageUrl() {
  const res = await fetch(url);
  const json = await res.json();

  let image = 'https://cn.bing.com/th?id=OHR.AyutthayaTree_ZH-CN8075870220_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp';
  let title = '';
  if (json.images && json.images.length > 0) {
    image = prefix + json.images[0].url;
    title = json.images[0].copyright;
  }

  return {
    image,
    title,
  };
}

module.exports = {
  getImageUrl,
}
