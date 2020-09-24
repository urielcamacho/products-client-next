module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/store',
                permanent: true,
            },
        ]
    },
    env: {
        API_URL: "http://localhost:8000/products"
    },
}