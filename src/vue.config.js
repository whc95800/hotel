module.exports = {
  devServer:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:3001/api',
        changeOrigin: true,
        pathRewrite:{'^/api':'/'}
      }
    }
  },
  publicPath : process.env.NODE_ENV === 'production' ? './' : '/'
}
