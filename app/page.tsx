import Image from "next/image";

const services = [
  {
    title: "汽車借款",
    description: "汽車借款｜快速估價｜專業服務",
    icon: "🚗",
  },
  {
    title: "機車借款",
    description: "機車借款｜靈活周轉｜安心辦理",
    icon: "🛵",
  },
  {
    title: "黃金",
    description: "黃金估價｜黃金借款｜專業鑑價",
    icon: "🪙",
  },
  {
    title: "名錶",
    description: "名錶估價｜名錶借款｜專業鑑定",
    icon: "⌚",
  },
  {
    title: "精品",
    description: "精品估價｜精品借款｜專業服務",
    icon: "👜",
  },
];

export default function Home() {
  return (
    <main className="home">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="header-logo">吉興當鋪</div>

          <a className="header-phone" href="tel:0223025858">
            📞 (02) 2302-5858
          </a>
        </div>
      </header>

      {/* Hero */}
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

      {/* Services */}
      <section className="services">
        <div className="section-title">
          <span>OUR SERVICES</span>
          <h2>專業服務</h2>
          <p>提供多元借款與估價服務</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <div className="contact-inner">
          <div className="section-title">
            <span>CONTACT US</span>
            <h2>聯絡吉興當鋪</h2>
          </div>

          <div className="contact-info">
            <div>
              <strong>📍 地址</strong>
              <p>台北市萬華區環河南路二段120號一樓</p>
            </div>

            <div>
              <strong>📞 電話</strong>
              <p>
                <a href="tel:0223025858">(02) 2302-5858</a>
              </p>
            </div>

            <div>
              <strong>🕐 營業時間</strong>
              <p>週一至週五 11:00–19:00</p>
              <small>週六、週日休息</small>
            </div>
          </div>

          <a
            className="map-button"
            href="https://www.google.com/maps/search/?api=1&query=台北市萬華區環河南路二段120號"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 開啟 Google 地圖
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} 吉興當鋪</p>
        <p>台北市萬華區｜專業當舖服務</p>
      </footer>
    </main>
  );
}
