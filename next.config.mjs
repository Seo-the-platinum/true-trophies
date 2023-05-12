/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "static-resource.np.community.playstation.net",
        port:'',
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "psnobj.prod.dl.playstation.net",
        port:'',
        pathname: "/psnobj/**",
      },
      {
        protocol: "https",
        hostname: "image.api.playstation.com",
        port:'',
        pathname: "/trophy/np/**",
      }
    ]
  },
  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default config;


// https://psnobj.prod.dl.playstation.net/psnobj/NPWR22726_00/1dd4ce99-981b-4d92-92b7-55fdddc5681e.png