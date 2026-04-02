'use client';

import Script from 'next/script';

export default function ChatbotWidget() {
  return (
    <>
      {/* External chat widget SDK */}
      <Script
        src="https://cdn.apigateway.co/webchat-client..prod/sdk.js"
        data-widget-id="7dd5d6a5-26f8-11f1-ba07-d2712a6746f6"
        strategy="lazyOnload"
        id="quotadoctor-chat-sdk"
      />

      {/*
        CSS overrides injected into the page to force the widget button/iframe
        to match QuotaDoctor brand colours:
          Navy       → #0A2F4C
          Sky blue   → #4AACDE
          Light bg   → #F7F9FB
        We target common class/id patterns used by apigateway webchat widgets.
        Because the widget renders in a shadow DOM or iframe, these rules target
        the host element only; the inner iframe styling is handled by the platform.
      */}
      <style>{`
        /* ── Floating trigger button ──────────────────────────────────── */
        #webchat-button,
        [id*="webchat"] button,
        [class*="webchat-trigger"],
        [class*="chat-trigger"],
        [class*="wcb-button"],
        [class*="chat-widget-button"],
        [class*="chat-bubble"],
        [class*="chatbot-btn"],
        [class*="launch-button"] {
          background: #0A2F4C !important;
          border-color: #4AACDE !important;
          box-shadow: 0 8px 32px rgba(74, 172, 222, 0.35) !important;
          border-radius: 50% !important;
          transition: transform 0.25s ease, box-shadow 0.25s ease !important;
        }
        #webchat-button:hover,
        [id*="webchat"] button:hover,
        [class*="webchat-trigger"]:hover,
        [class*="chat-trigger"]:hover,
        [class*="wcb-button"]:hover,
        [class*="chat-widget-button"]:hover,
        [class*="chat-bubble"]:hover,
        [class*="chatbot-btn"]:hover,
        [class*="launch-button"]:hover {
          background: #4AACDE !important;
          transform: scale(1.08) !important;
          box-shadow: 0 12px 40px rgba(74, 172, 222, 0.55) !important;
        }
        /* ── Chat panel / header ──────────────────────────────────────── */
        [class*="chat-header"],
        [class*="webchat-header"],
        [class*="wcb-header"] {
          background: #0A2F4C !important;
          color: #ffffff !important;
        }
        /* ── Send button ──────────────────────────────────────────────── */
        [class*="send-button"],
        [class*="wcb-send"],
        [class*="submit-btn"] {
          background: #4AACDE !important;
          border-color: #4AACDE !important;
        }
        /* ── Bot message bubble ───────────────────────────────────────── */
        [class*="bot-message"],
        [class*="agent-message"],
        [class*="wcb-bot-msg"] {
          background: #EBF6FC !important;
          color: #0A2F4C !important;
          border-radius: 1rem 1rem 1rem 0 !important;
        }
        /* ── User message bubble ──────────────────────────────────────── */
        [class*="user-message"],
        [class*="wcb-user-msg"] {
          background: #0A2F4C !important;
          color: #ffffff !important;
          border-radius: 1rem 1rem 0 1rem !important;
        }
        /* ── Ensure the widget sits at z-index below our Navbar (z-50) ── */
        [id*="webchat"],
        [class*="webchat-container"],
        [class*="chat-container"],
        [class*="wcb-container"] {
          z-index: 999 !important;
        }
      `}</style>
    </>
  );
}
