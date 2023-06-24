/** @type {import('next').NextConfig} */

const nextConfig = {
  future: {
    webpack5: true,
  },
    // basePath: '/',
    trailingSlash: false,
    async redirects() {
      return [
          {
              source: '/',
              destination: '/',
              basePath: false,
              permanent: false
          }
      ]
  },
  //   exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {

  //     '/': { page: '/home' },
  //   //    '/about': { page: '/about' },
  //   //    '/post/hello-nextjs': { page: '/post/[slug]', query: { slug: 'hello-nextjs' } },
  //   //    '/post/learn-nextjs': { page: '/post/[slug]', query: { slug: 'learn-nextjs' } },
  //   //    '/post/deploy-nextjs':{ page: '/post/[slug]', query: { slug: 'deploy-nextjs' } },
  //   }
  // },
}

module.exports = nextConfig;