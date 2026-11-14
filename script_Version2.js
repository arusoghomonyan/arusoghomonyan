const products = [
  {
    name: "SkyCam Mini",
    category: "Beginner",
    description:
      "A lightweight, travel-friendly drone with smooth 4K footage and compact portability.",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1200&q=80",
    specs: ["34 min", "4K", "10 km"]
  },
  {
    name: "Aero Pro X",
    category: "Creator",
    description:
      "Perfect for cinematic filming, precise control, and professional-quality aerial shots.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80",
    specs: ["43 min", "5.1K", "15 km"]
  },
  {
    name: "Falcon Explorer",
    category: "Explorer",
    description:
      "Built for long-distance flights, outdoor adventures, and smart obstacle detection.",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
    specs: ["40 min", "4K HDR", "12 km"]
  }
];

const translations = {
  en: {
    navShop: "Shop",
    navAbout: "About",
    navTeam: "Team",
    navContact: "Contact",
    connectWallet: "Connect wallet",
    heroEyebrow: "See the world differently",
    heroTitle: "Fly smarter. Create bigger.",
    heroText:
      "Premium drones for creators, explorers, and travelers who want to capture every moment from above.",
    shopNow: "Shop now",
    readTeam: "Read about the team",
    customerRating: "Customer rating",
    orders: "Orders",
    support: "Support",
    collection: "Collection",
    shopTitle: "Explore our drones",
    feature1Title: "4K Cinematic Shots",
    feature1Text: "Capture sharp footage with smooth stabilization.",
    feature2Title: "Long Range Flight",
    feature2Text: "Go farther with reliable performance and smarter controls.",
    feature3Title: "Easy to Fly",
    feature3Text: "Built for beginners and professionals alike.",
    whyUs: "Why ArmDrone",
    aboutTitle: "Built for flight. Designed for inspiration.",
    aboutText1:
      "We help people choose the right drone for their ambitions — from panoramic filming to travel shooting, landscape exploration, and precision aerial work.",
    aboutText2:
      "Every product in our store is selected for quality, reliability, and ease of use, so you can focus on the experience instead of the setup.",
    tested: "Tested quality",
    shipping: "Fast shipping",
    teamLabel: "Our team",
    teamTitle: "Meet the ArmDrone crew",
    role1: "Founder & drone specialist",
    role2: "Creative strategist",
    role3: "Flight engineer",
    limitedOffer: "Limited offer",
    promoTitle: "Save up to 20% on selected models.",
    viewDeals: "View deals",
    footerText: "Your flight companion for better pictures, better stories, and better views.",
    contact: "Contact",
    hours: "Opening hours",
    rights: "All rights reserved",
    newArrival: "New arrival"
  },
  hy: {
    navShop: "Խանութ",
    navAbout: "Մեր մասին",
    navTeam: "Թիմ",
    navContact: "Կապ",
    connectWallet: "Միացնել դրամապանակը",
    heroEyebrow: "Տեսեք աշխարհը նոր տեսանկյունից",
    heroTitle: "Ավելի խելացի թռիչք։ Ավելի մեծ ստեղծագործություն։",
    heroText:
      "Բարձր որակի դրոններ ստեղծագործողների, հետազոտողների և ճամփորդների համար, ովքեր ցանկանում են ամեն բան վերևից նկարել։",
    shopNow: "Գնալ խանութ",
    readTeam: "Կարդալ թիմի մասին",
    customerRating: "Գնահատական",
    orders: "Պատվերներ",
    support: "Աջակցություն",
    collection: "Հավաքածու",
    shopTitle: "Բացահայտեք մեր դրոնները",
    feature1Title: "4K կինեմատոգրաֆիկ կադրեր",
    feature1Text: "Սահուն կայունացմամբ հստակ տեսանյութեր նկարեք։",
    feature2Title: "Հեռահար թռիչք",
    feature2Text: "Ավելի հեռու թռեք վստահելի աշխատանքով և խելացի կառավարմամբ։",
    feature3Title: "Հեշտ է կառավարել",
    feature3Text: "Ստեղծված է սկսնակների ու պրոֆեսիոնալների համար։",
    whyUs: "Ինչու ArmDrone",
    aboutTitle: "Ստեղծված թռիչքի համար։ Կառուցված ոգեշնչման համար։",
    aboutText1:
      "Մենք օգնում ենք ընտրել ճիշտ դրոնը՝ պանորամիկ նկարահանումներից մինչև ճանապարհորդական տեսանյութեր, լանդշաֆտային հետազոտություններ և ճշգրիտ օդային աշխատանքներ։",
    aboutText2:
      "Մեր խանութում գտնվող յուրաքանչյուր ապրանք ընտրվել է որակի, հուսալիության և օգտագործման հեշտության 기준ներով։",
    tested: "Ստուգված որակ",
    shipping: "Արագ առաքում",
    rights: "Բոլոր իրավունքները պաշտպանված են",
    teamLabel: "Մեր թիմը",
    teamTitle: "Ծանոթացեք ArmDrone թիմին",
    role1: "Հիմնադիր և դրոնային մասնագետ",
    role2: "Ստեղծագործական ստրատեգ",
    role3: "Թռիչքային ինժեներ",
    limitedOffer: "Սահմանափակ առաջարկ",
    promoTitle: "Խնայեք մինչև 20% ընտրված մոդելներում։",
    viewDeals: "Դիտել առաջարկները",
    footerText: "Ձեր թռիչքային ընկերը ավելի լավ նկարների, պատմությունների և տեսարանների համար։",
    contact: "Կապ",
    hours: "Աշխատանքային ժամեր",
    newArrival: "Նոր մուտք"
  },
  ru: {
    navShop: "Магазин",
    navAbout: "О нас",
    navTeam: "Команда",
    navContact: "Контакты",
    connectWallet: "Подключить кошелек",
    heroEyebrow: "Посмотрите на мир по-новому",
    heroTitle: "Летайте умнее. Создавайте больше.",
    heroText:
      "Премиальные дроны для создателей, путешественников и исследователей, которые хотят запечатлеть каждый момент сверху.",
    shopNow: "Купить сейчас",
    readTeam: "Узнать о команде",
    customerRating: "Рейтинг клиентов",
    orders: "Заказов",
    support: "Поддержка",
    collection: "Коллекция",
    shopTitle: "Посмотрите наши дроны",
    feature1Title: "4K кинематографическое видео",
    feature1Text: "Плавная стабилизация и чёткая картинка в каждом кадре.",
    feature2Title: "Дальний полёт",
    feature2Text: "Летайте дальше с надёжной техникой и интуитивным управлением.",
    feature3Title: "Лёгкий старт",
    feature3Text: "Подходит как новичкам, так и профессионалам.",
    whyUs: "Почему ArmDrone",
    aboutTitle: "Создано для полёта. Разработано для вдохновения.",
    aboutText1:
      "Мы помогаем подобрать идеальный дрон для панорамной съёмки, путешествий, исследования ландшафтов и профессиональной работы с воздуха.",
    aboutText2:
      "Каждая модель в нашем магазине выбрана по критериям качества, надёжности и простоты использования.",
    tested: "Проверенное качество",
    shipping: "Быстрая доставка",
    rights: "Все права защищены",
    teamLabel: "Наша команда",
    teamTitle: "Знакомьтесь с командой ArmDrone",
    role1: "Основатель и специалист по дронам",
    role2: "Креативный стратег",
    role3: "Инженер по полётам",
    limitedOffer: "Ограниченное предложение",
    promoTitle: "Скидки до 20% на выбранные модели.",
    viewDeals: "Смотреть предложения",
    footerText: "Ваш верный спутник в небе для лучших кадров, историй и видов.",
    contact: "Контакты",
    hours: "Часы работы",
    newArrival: "Новинка"
  },
  zh: {
    navShop: "商店",
    navAbout: "关于",
    navTeam: "团队",
    navContact: "联系",
    connectWallet: "连接钱包",
    heroEyebrow: "换个角度看世界",
    heroTitle: "飞得更聪明，创作更大。",
    heroText:
      "为创作者、探险者和旅行者提供高端无人机，捕捉从空中看到的一切瞬间。",
    shopNow: "立即购买",
    readTeam: "了解团队",
    customerRating: "客户评分",
    orders: "订单",
    support: "支持",
    collection: "系列",
    shopTitle: "探索我们的无人机",
    feature1Title: "4K 电影级镜头",
    feature1Text: "稳定防抖，拍出更清晰的画面。",
    feature2Title: "长距离飞行",
    feature2Text: "更远的航程和更智能的控制体验。",
    feature3Title: "操作简单",
    feature3Text: "适合新手和专业人士使用。",
    whyUs: "为什么选择 ArmDrone",
    aboutTitle: "为了飞行而设计。为了灵感而打造。",
    aboutText1:
      "我们帮助您为全景拍摄、旅行记录、地貌探索和高精度航拍选择合适的无人机。",
    aboutText2:
      "每件产品都经过品质、稳定性和易用性筛选，让您专注于体验而非设置。",
    tested: "品质测试",
    shipping: "快速发货",
    rights: "保留所有权利",
    teamLabel: "我们的团队",
    teamTitle: "认识 ArmDrone 团队",
    role1: "创始人兼无人机专家",
    role2: "创意战略负责人",
    role3: "飞行工程师",
    limitedOffer: "限时优惠",
    promoTitle: "精选型号最高可享 20% 折扣。",
    viewDeals: "查看优惠",
    footerText: "为更好的画面、更好的故事和更好的视野而打造的飞行伙伴。",
    contact: "联系",
    hours: "营业时间",
    newArrival: "新品"
  },
  ja: {
    navShop: "ショップ",
    navAbout: "会社概要",
    navTeam: "チーム",
    navContact: "お問い合わせ",
    connectWallet: "ウォレット接続",
    heroEyebrow: "新しい視点で世界を見る",
    heroTitle: "もっと賢く飛ぶ。もっと大きく創る。",
    heroText:
      "クリエイター、探検家、旅行者のための高級ドローンで、空から見える瞬間をすべて記録しましょう。",
    shopNow: "今すぐ購入",
    readTeam: "チーム紹介",
    customerRating: "顧客評価",
    orders: "注文数",
    support: "サポート",
    collection: "コレクション",
    shopTitle: "ドローンを探す",
    feature1Title: "4K シネマティック映像",
    feature1Text: "滑らかな手ぶれ補正で鮮明な映像を撮影。",
    feature2Title: "長距離飛行",
    feature2Text: "安定した性能とスマートな制御でより遠くへ。",
    feature3Title: "簡単操作",
    feature3Text: "初心者からプロまで対応。",
    whyUs: "なぜ ArmDrone なのか",
    aboutTitle: "飛行のために作られた。インスピレーションのために設計された。",
    aboutText1:
      "私たちは、パノラマ撮影、旅行記録、風景探索、精密な空撮に最適なドローンを選ぶお手伝いをします。",
    aboutText2:
      "当店のすべての商品は、品質・信頼性・使いやすさを重視して厳選しています。",
    tested: "品質確認済み",
    shipping: "高速配送",
    rights: "All rights reserved",
    teamLabel: "私たちのチーム",
    teamTitle: "ArmDrone のチームを紹介",
    role1: "創業者・ドローンスペシャリスト",
    role2: "クリエイティブストラテジスト",
    role3: "飛行エンジニア",
    limitedOffer: "限定セール",
    promoTitle: "一部モデルで最大 20% OFF。",
    viewDeals: "特典を見る",
    footerText: "より良い写真、より良い物語、より良い景色をもたらすフライトパートナー。",
    contact: "お問い合わせ",
    hours: "営業時間",
    newArrival: "新着"
  }
};

let currentLang = "en";
let connectedWallet = "";

function renderProducts() {
  const productGrid = document.getElementById("productGrid");

  productGrid.innerHTML = products
    .map(
      (product, index) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
            <span class="product-badge">${product.category}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>

            <div class="specs">
              ${product.specs.map((spec) => `<span class="spec">${spec}</span>`).join("")}
            </div>

            <div class="product-buy">
              <span class="price">$${product.price}</span>
              <button class="buy-btn" data-index="${index}">Buy now</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".buy-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const productIndex = Number(button.dataset.index);
      alert(`${products[productIndex].name} added to cart (demo).`);
    });
  });
}

function updateText() {
  const allTextNodes = document.querySelectorAll("[data-i18n]");
  allTextNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[currentLang][key]) {
      node.textContent = translations[currentLang][key];
    }
  });

  document.documentElement.lang = currentLang;

  const walletButton = document.getElementById("connectWalletBtn");
  if (connectedWallet) {
    walletButton.textContent =
      "Wallet: " + connectedWallet.slice(0, 6) + "..." + connectedWallet.slice(-4);
  } else {
    walletButton.textContent = translations[currentLang].connectWallet;
  }
}

document.getElementById("languageSwitcher").addEventListener("change", (event) => {
  currentLang = event.target.value;
  updateText();
});

document.getElementById("connectWalletBtn").addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });

      connectedWallet = accounts[0];
      updateText();
    } catch (error) {
      alert("Wallet connection was cancelled or failed.");
    }
  } else {
    alert("MetaMask not found. Please install a wallet.");
  }
});

renderProducts();
updateText();