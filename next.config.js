module.exports = {
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
    output: "standalone",
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/api/",
          destination: `${process.env.NEXT_PUBLIC_API_SERVER_URL}`,
        },
      ];
    },
  }
