export default () => ({
    port: +process.env.PORT || 4000,
    mode: process.env.NODE_ENV || 'development',
    db: {
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT || 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [],
        synchronize: true,
    }
});