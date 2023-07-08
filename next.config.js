/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        domains: ['github.com', 'lh3.googleusercontent.com']
    },
    env: {
        DB_HOST: "localhost:27017",
        DB_NAME: "edunov",
        DB_PASS: "edunov2023",
        DB_SECRET: "hdevlop-edunov-2022",
        DB_EXT_URL: "mongodb+srv://school:edunov2023@cluster0.12q8p.mongodb.net/edunov?retryWrites=true&w=majority",

        NEXTAUTH_URL: 'http://localhost:3000',
        NEXTAUTH_SECRET: 'coding_data_hdevlop',
        GOOGLE_CLIENT_ID: "744534742922-j0b8os5es592rr8fhbaagi9nme4cqvjs.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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"
    },
}

module.exports = nextConfig
