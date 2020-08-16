// const path = require('path')
import path from "path"
import svgSpriteLoader from "svg-sprite-loader/plugin"
module.exports = {
  lintOnSave: false,
    chainWebpack:config=>{
      const dir = path.resolve(__dirname,'src/assets/icons')

      config.module
        .rule("svg-sprite")
        .test(/\.svg$/)
        .include.add(dir).end()
        .use("svg-sprite-loader").loader("svg-sprite-loader").options({extract:false}).end()
      config.plugin("svg-sprite").use(svgSpriteLoader,[{plainSprite:true}])
      config.module.rule('svg').exclude.add(dir)



    }
}
