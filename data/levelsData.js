const levels = [
  {
    stage: 1,
    group: "A",
    name: "穿山甲",
    backgroundImage: "/img_animal1.png",
    guide:
      "看來要先把中藥鋪動物製的中藥材下架抹除，才能找出吸引小山走出迷宮的方式了。",
    guide_sm: "先去找找中藥鋪的看板在牆裡吧！",
    questions: [
      {
        question: "把中藥鋪動物製的藥材下架抹除怎麼做?",
        hint: "把虎骨、熊膽、蟾酥、穿山甲鱗片劈掉，可以發現剩下來的藥材罐子上寫著：「朝著小山愛吃的東西走出迷宮。」(可縮放觀看下圖)",
      },
      {
        question: "小山走出迷宮的方式是什麼?",
        hint: "朝著愛吃的食物螞蟻走出迷宮。",
      },
      {
        question: "正確的迷宮走法是?(本題包含解答)",
        hint: "正確的迷宮走法如下圖，路徑上可得到答案:「不用動物藥材」。",
      },
    ],
    answer: "不用動物藥材",
  },
  {
    stage: 2,
    group: "A",
    name: "歐亞水獺",
    backgroundImage: "/img_animal2.png",
    guide:
      "你可以把歐亞水獺、海獺、河狸身上的代號和適合新棲息地的環境代號連線嗎？",
    guide_sm: "或許就能找出幫助小獺打造新家環境的好方法喔！",
    questions: [
      {
        question: "問題1",
        hint: "提示1",
      },
      {
        question: "問題2",
        hint: "提示2",
      },
      {
        question: "問題3",
        hint: "提示3",
      },
    ],
    answer: "正確答案2",
  },
  {
    stage: 3,
    group: "B",
    name: "紅毛猩猩",
    backgroundImage: "/img_animal3.png",
    guide: "小猩的家旁邊樹都被砍倒，我們在這裡遇到了小猩的朋友-笑翠鳥。",
    guide_sm: "現場看板上留有森林分布圖，可以向笑翠鳥問消息。",
    questions: [
      {
        question: "問題1",
        hint: "提示1",
      },
      {
        question: "問題2",
        hint: "提示2",
      },
      {
        question: "問題3",
        hint: "提示3",
      },
    ],
    answer: "正確答案3",
  },
  {
    stage: 4,
    group: "B",
    name: "馬來貘",
    backgroundImage: "/img_animal4.png",
    guide: "小貘家附近的樹地被破壞了，小貘很有可能去新的森林找尋居住的地方了。",
    guide_sm:
      "現場看板上似乎還留有小貘的腳印，我們跟著小貘的腳印找出他前往的一座森林！這樣或許就可以找出幫助小貘建立新家的方式了！",
    questions: [
      {
        question: "問題1",
        hint: "提示1",
      },
      {
        question: "問題2",
        hint: "提示2",
      },
      {
        question: "問題3",
        hint: "提示3",
      },
    ],
    answer: "正確答案4",
  },
];

export default levels;
