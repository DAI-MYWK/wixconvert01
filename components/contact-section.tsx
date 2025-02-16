import React from "react";

const ContactSection = () => {
  return (
    <section className="container">
      <div className="catch-copy">
        <div className="sub-title">ホームページデザインのプロ</div>
        <div className="main-title">広告運用代行、SEOコンサルティングも対応します！</div>
      </div>
      <div className="green-box">
        <p>お見積り・ご相談無料！まずはお気軽にご相談ください！</p>
      </div>
      <div className="button-area">
        <a href="#" className="pink-btn">簡単無料お見積り</a>
        <a href="#" className="line-btn">LINEで無料相談</a>
      </div>
      <div className="call-section">
        <div className="call-text">今すぐ電話でお問い合わせ</div>
        <div className="call-number">090-9999-9999</div>
        <div className="call-note">年中無休 24時間対応</div>
      </div>
    </section>
  );
};

export default ContactSection;