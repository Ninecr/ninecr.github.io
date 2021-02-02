const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '鱼书',
        artist: '陈鸿宇 / 曹秦',
        url: 'https://music.163.com/song/media/outer/url?id=522529247.mp3',
        cover: 'http://p2.music.126.net/RQn0DvPB-dEKL9R8TkNKiQ==/109951163077820112.jpg',
      },
      {
        name: "世界上不存在的歌",
        artist: '陈奕迅',
        url: 'https://music.163.com/song/media/outer/url?id=1468192805.mp3',
        cover: 'http://p1.music.126.net/Abad3IaAzddLUQtGQk4izw==/109951165321788804.jpg',
      },
      {
        name: "不露声色",
        artist: 'Jam',
        url: 'https://music.163.com/song/media/outer/url?id=470759757.mp3',
        cover: 'https://p2.music.126.net/o9H3nhgOCK7zYQ4DGZkd5A==/19066631137330769.jpg',
      },
      // 我变了我没变
      {
        name: '其实都没有',
        artist: '杨宗纬',
        url: 'https://music.163.com/song/media/outer/url?id=25788001.mp3',
        cover: 'https://p2.music.126.net/DxQeZM26qjkQsyZulBdw6A==/109951163314294843.jpg',
      },
      {
        name: '像我这样的人',
        artist: '毛不易',
        url: 'https://music.163.com/song/media/outer/url?id=569213220.mp3',
        cover: 'https://p2.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg',
      },
      {
        name: '完',
        artist: '陈奕迅',
        url: 'https://music.163.com/song/media/outer/url?id=64048.mp3',
        cover: 'https://p2.music.126.net/JR-EYm7IAvaH7FYWVo5T9A==/18913799021152505.jpg',
      }
    ]
});