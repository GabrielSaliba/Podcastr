module.exports = {
  env: {
    JSON_SERVER_URI: process.env.JSON_SERVER_URI,
  },
  images: {
    domains: [
      'storage.googleapis.com',
      'cdn-images-1.listennotes.com',
      'am-a.akamaihd.net',
      'universe-meeps.leagueoflegends.com',
      'production.listennotes.com',
      'runecast-storage.s3.sa-east-1.amazonaws.com',
      'i.ytimg.com',
      'ddragon.leagueoflegends.com'
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};