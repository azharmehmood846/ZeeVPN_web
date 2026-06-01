import { ImageResponse } from 'next/og';

import { SITE_NAME } from '@/lib/seo';

export const runtime = 'edge';
export const alt = 'Zee VPN — Unlimited VPN. Zero dollars. One ad.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          color: '#fff',
          background:
            'radial-gradient(120% 80% at 80% 0%, rgba(37,99,235,0.30), rgba(37,99,235,0.04) 45%, transparent 70%), linear-gradient(180deg, #0a1020 0%, #060914 100%)',
          fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Corner shield watermark — matches the footer's decorative mark */}
        <div
          style={{
            position: 'absolute',
            right: '-90px',
            bottom: '-140px',
            display: 'flex',
            opacity: 0.16,
          }}
        >
          <svg
            width="640"
            height="785"
            viewBox="0 0 84 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="#6EC3FF"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M42 3.5C27 3.5 16 11 12.5 24.5L9.5 40.5C7.5 50.5 8 62 12.5 72.5L18 85.5C23.5 95.5 32 99.5 42 100.5C52 99.5 60.5 95.5 66 85.5L71.5 72.5C76 62 76.5 50.5 74.5 40.5L71.5 24.5C68 11 57 3.5 42 3.5Z" />
              <path d="M20 41.5C30 33.5 46 31.5 62 38.5" />
              <path d="M22 60.5C34 72.5 50 76.5 64 68.5" />
            </g>
          </svg>
        </div>
        {/* Top row: brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* Shield mark */}
          <svg
            width="64"
            height="78"
            viewBox="0 0 84 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="#6EC3FF"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M42 3.5C27 3.5 16 11 12.5 24.5L9.5 40.5C7.5 50.5 8 62 12.5 72.5L18 85.5C23.5 95.5 32 99.5 42 100.5C52 99.5 60.5 95.5 66 85.5L71.5 72.5C76 62 76.5 50.5 74.5 40.5L71.5 24.5C68 11 57 3.5 42 3.5Z" />
              <path d="M20 41.5C30 33.5 46 31.5 62 38.5" />
              <path d="M22 60.5C34 72.5 50 76.5 64 68.5" />
            </g>
          </svg>
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#fff',
            }}
          >
            {SITE_NAME}
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'rgba(110,195,255,0.85)',
            }}
          >
            <span
              style={{
                width: '40px',
                height: '2px',
                background:
                  'linear-gradient(90deg, transparent, rgba(110,195,255,0.9) 60%, rgba(110,195,255,0.4))',
              }}
            />
            <span>Free Android VPN</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-0.045em',
              color: '#fff',
            }}
          >
            <span>Unlimited VPN.</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>
              Zero dollars. One ad.
            </span>
          </div>

          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: '-0.005em',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '900px',
            }}
          >
            Watch one short ad to unlock hours of unlimited, encrypted access.
            No subscription. No signup.
          </div>
        </div>

        {/* Bottom row: domain + accent */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 22,
            color: 'rgba(255,255,255,0.45)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '999px',
                background: '#22c55e',
                boxShadow: '0 0 14px rgba(34,197,94,0.7)',
              }}
            />
            <span>zeevpn.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span>Android</span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
            <span>No signup</span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
            <span>Encrypted</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
