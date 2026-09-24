import Image from "next/image";

const services = [
  {
    title: "汽車借款",
    description:
      "汽車借款專業服務，依車況與市場行情進行估價，提供資金周轉需求。",
    icon: "🚗",
  },
  {
    title: "機車借款",
    description:
      "機車借款彈性服務，協助有資金需求的客戶進行車輛估價與諮詢。",
    icon: "🛵",
  },
  {
    title: "黃金",
    description:
      "黃金專業估價與借款服務，依黃金種類、重量及市場行情進行評估。",
    icon: "🪙",
  },
  {
    title: "名錶",
    description:
      "名錶估價與借款服務，針對品牌、款式、狀況等條件進行專業評估。",
    icon: "⌚",
  },
  {
    title: "精品",
    description:
      "精品估價與借款服務，提供相關精品的價值評估與資金周轉諮詢。",
    icon: "👜",
  },
];

const features = [
  {
    number: "01",
    title: "專業估價",
    text: "依物品條件與市場行情進行評估，提供清楚的諮詢。",
  },
  {
    number: "02",
    title: "快速諮詢",
    text: "有資金需求時，歡迎直接來電或親自到店洽詢。",
  },
  {
    number: "03",
    title: "重視隱私",
    text: "重視客戶隱私與個人資料，提供安心的洽詢環境。",
  },
  {
    number: "04",
    title: "萬華在地服務",
    text: "位於台北市萬華區環河南路二段，提供在地專業服務。",
  },
];

export default function Home() {
  return (
    <main className="home">

      {/* =========================
          Header
      ========================= */}
      <header className="header">
        <div className="header-inner">
          <div className="header-logo">吉興當鋪</div>

          <a className="header-phone" href="tel:0223025858">
            📞 (02) 2302-5858
          </a>
        </div>
      </header>

      {/* =========================
          Hero 主視覺
      ========================= */}
      <section className="hero">

        <div className="hero-logo">
          <Image
            src="/logo.png"
            alt="吉興當鋪｜台北萬華當舖"
            fill
            priority
            sizes="90vw"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="hero-content">
          <h1>吉興當鋪</h1>

          <p className="hero-subtitle">
            台北市萬華區專業當舖
          </p>

          <p className="hero-services">
            汽車借款・機車借款・黃金・名錶・精品
          </p>

          <a className="call-button" href="tel:0223025858">
            📞 立即來電洽詢
          </a>
        </div>
      </section>

      {/* =========================
          服務項目
      ========================= */}
      <section className="services" id="services">
        <div className="section-title">
          <span>OUR SERVICES</span>

          <h2>專業服務</h2>

          <p>
            提供汽車、機車、黃金、名錶及精品等相關服務
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a
                href="tel:0223025858"
                className="service-link"
              >
                立即洽詢 →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="welfare">
        <div className="welfare-inner">
          <div className="section-title">
            <span>WELFARE</span>
            <h2>福利專區</h2>
            <p>吉興當鋪關心在地外送夥伴</p>
          </div>

          <div className="welfare-card">
            <div className="welfare-badge">免費提供</div>

            <h3>外送夥伴免費專用袋</h3>

            <p>
              為感謝辛苦奔波的外送夥伴，
              <br />
              吉興當鋪提供 <strong>Uber Eats、foodpanda</strong> 外送員專用袋免費領取。
            </p>

            <p>
              不論您平常使用哪個平台接單，
              <br />
              只要有外送袋需求，都歡迎親自到店免費領取。
            </p>

            <div className="welfare-tags">
              <span>免費提供</span>
              <span>Uber Eats 外送夥伴</span>
              <span>foodpanda 外送夥伴</span>
              <span>歡迎到店領取</span>
            </div>

            <div className="welfare-info">
              <p>📍 台北市萬華區環河南路二段120號一樓</p>
              <p>📞 <a href="tel:0223025858">(02) 2302-5858</a></p>
              <p>🕐 週一至週五 11:00–19:00</p>
            </div>

            <small>
              外送袋數量有限，送完為止；實際供應情況歡迎來店或先來電洽詢。
            </small>
          </div>
        </div>
      </section>
      
      {/* =========================
          服務特色
      ========================= */}
      <section className="features">
        <div className="section-title">
          <span>WHY JIXING</span>

          <h2>為什麼選擇吉興當鋪</h2>

          <p>
            重視專業、效率與客戶隱私
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-number">
                {feature.number}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          辦理流程
      ========================= */}
      <section className="process">
        <div className="section-title">
          <span>HOW IT WORKS</span>

          <h2>簡單四步驟</h2>

          <p>
            有資金需求，歡迎先來電或親自到店洽詢
          </p>
        </div>

        <div className="process-grid">
          <div className="process-item">
            <span>01</span>
            <h3>諮詢</h3>
            <p>電話或親自到店洽詢需求</p>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-item">
            <span>02</span>
            <h3>鑑價</h3>
            <p>依物品條件與市場行情評估</p>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-item">
            <span>03</span>
            <h3>說明</h3>
            <p>說明相關條件與辦理方式</p>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-item">
            <span>04</span>
            <h3>辦理</h3>
            <p>確認後依相關規定辦理</p>
          </div>
        </div>
      </section>

      {/* =========================
          聯絡我們
      ========================= */}
<section className="contact" id="contact">
  <div className="contact-inner">

    <div className="section-title">
      <span>CONTACT</span>
      <h2>聯絡吉興當鋪</h2>
      <p>歡迎來電或親自到店洽詢</p>
    </div>

    <div className="contact-info">

      <div className="contact-item">
        <div className="contact-icon">📍</div>

        <div className="contact-content">
          <strong>店址</strong>
          <p>
            台北市萬華區
            <br />
            環河南路二段120號一樓
          </p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">☎</div>

        <div className="contact-content">
          <strong>電話</strong>
          <p>
            <a href="tel:0223025858">
              (02) 2302-5858
            </a>
          </p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">◷</div>

        <div className="contact-content">
          <strong>營業時間</strong>
          <p>
            週一至週五
            <br />
            11:00–19:00
          </p>
          <small>週六、週日休息</small>
        </div>
      </div>

    </div>

    <div className="contact-actions">

      <a
        className="map-button"
        href="https://www.google.com/maps/search/?api=1&query=台北市萬華區環河南路二段120號"
        target="_blank"
        rel="noopener noreferrer"
      >
        📍 開啟 Google 地圖
      </a>

      <a
        className="contact-call-button"
        href="tel:0223025858"
      >
        📞 立即致電
      </a>

    </div>

  </div>
</section>
