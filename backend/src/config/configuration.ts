export default () => ({
  app: {
    port: process.env.PORT || 5000
  },
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
  }
})