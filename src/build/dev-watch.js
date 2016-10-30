/**
 * Created by jixiang on 2016/10/5.
 */
// https://github.com/shelljs/shelljs
require('shelljs/global')

var path = require('path')
var config = require('../config')
var webpack = require('webpack')
var webpackConfig = require('./webpack.watch.conf')

var assetsPath = path.join(config.build.assetsRoot,config.build.assetsSubDirectory)
rm('-rf',assetsPath)
mkdir('-p',assetsPath)
cp('-R','static/',assetsPath)

webpack(webpackConfig,function (err,stats){
  console.log(new Date().toLocaleString()+'-----------------------------')
  if(err) throw err
  process.stdout.write(stats.toString({
      colors:true,
      modules:false,
      children:false,
      chunks:false,
      chunkModules:false
    }) + '\n')
})
