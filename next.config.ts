import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/branntilsyn',
        destination: '/branninspeksjon',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
