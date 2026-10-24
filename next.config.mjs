/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Short commit id of this build (Netlify sets COMMIT_REF while building). Shown by /api/health.
  env: { NEXT_PUBLIC_BUILD: (process.env.COMMIT_REF || "").slice(0, 7) },
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // The invented shop catalogue was retired; its routes land on the real service pages.
      { source: "/shop", destination: "/services", permanent: false },
      { source: "/shop/:slug", destination: "/services", permanent: false },
      // Catalogue entries from the first, drawing-based version now live under their photographed designs.
      ...["courtyard-gate", "staircase-balustrade", "entrance-portal", "balcony-railing", "window-grills", "piece-from-a-reference"].map((slug) => ({
        source: `/catalogue/${slug}`,
        destination: "/catalogue",
        permanent: false,
      })),
      { source: "/quote", destination: "/contact#start", permanent: true },
      { source: "/start", destination: "/contact#start", permanent: true },
      { source: "/work", destination: "/projects", permanent: true },
      { source: "/work/:slug", destination: "/projects/:slug", permanent: true },
      { source: "/services/building-ironwork", destination: "/services/gates", permanent: true },
      { source: "/services/decorative-ironwork", destination: "/services/balconies", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
