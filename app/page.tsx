import Image from "next/image";

export default function Home() {
  return (
    <main className="home">
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
          <p>台北市萬華區專業當舖</p>
          <p>汽車借款・機車借款・黃金・名錶・精品</p>
        </div>
      </section>

      <section className="contact">
        <h2>聯絡吉興當鋪</h2>

        <p>地址：台北市萬華區環河南路二段120號一樓</p>
        <p>電話：(02) 2302-5858</p>
        <p>營業時間：週一至週五 11:00–19:00</p>
      </section>
    </main>
  );
}
