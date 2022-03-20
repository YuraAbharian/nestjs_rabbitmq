export default () => ({
    port: process.env.PORT || 3000,
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432
    }
});