import React from 'react';

const Preloader = () => (
  <div className="loader-container">
    <div className="loader">
      <span />
      <span />
      <span />
      <span />
    </div>
        <h1 className="loader-title text-[#0D2226] text-xl tracking-wide font-sans">Welcome to my portfolio</h1>
    <style>{`
      .loader-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
      }
      .loader {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
      }
      .loader span {
        display: block;
        width: 20px;
        height: 20px;
        background: #0D2226;
        border-radius: 50%;
        opacity: 0.6;
        animation: bounce 0.8s infinite alternate;
      }
      .loader span:nth-child(2) {
        animation-delay: 0.4s;
      }
      .loader span:nth-child(3) {
        animation-delay: 0.6s;
      }
      .loader span:nth-child(4) {
        animation-delay: 0.8s;
      }
      @keyframes bounce {
        to {
          transform: translateY(-20px);
          opacity: 1;
        }
      }
      .loader-title {
        font-family: 'Segoe UI', sans-serif;
        color: #0D2226;
        font-size: 1.5rem;
        letter-spacing: 1px;
      }
    `}</style>
  </div>
);

export default Preloader;