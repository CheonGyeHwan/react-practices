이미지 모듈 번들링 하기

1. 설치 패키지
    - $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass

2. Image Loader 설정(webpack.config.js)
    - output: {
        -
            [ 생략 ]
        -
        assetModuleFilename: 'assets/images/[hash][ext]'
    }
    
    - module: {
        rules:[{
            test: /\.(png|git|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
      }

3. 개발 서버 실행
    - $ npm start