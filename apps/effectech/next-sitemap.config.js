/** @format */

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    // eslint-disable-next-line turbo/no-undeclared-env-vars -- allow
    siteUrl:
        process.env.SITE_URL ||
        process.env.VERCEL_URL ||
        'https://www.effectechconference.com/',
    generateRobotsTxt: true, // (optional)
    // ...other options
};
