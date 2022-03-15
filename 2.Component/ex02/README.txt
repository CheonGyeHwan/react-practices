ex02: Component Styling(working with UI)

    01. Inline Styling
    02. Normal CSS(css loader options : (module: false))
        - $ npm run debug "src=02" "css-modules=false"
    03. Normal CSS(css loader options : (module: true))
        - $ npm run debug "src=03" "css-modules=true"
    04. CSS Module(css loader options : (module: true))
        - $ npm run debug "src=04" "css-modules=true"
    05. SASS & SCSS(css loader options : (module: true))
        ----------------------------------------------------
            CSS in JS(Style Component), Less & Styleable
        ----------------------------------------------------
    06. Font Awesome : Working with UI I
    07. React Model : Working with UI II

1. 설치
    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    $ npm i react react-dom

2. 설정
    babel.config.json
    webpack.config.js

3. npm 스크립팅
  "scripts": {
    "debug": "npx webpack serve --progress --mode development --env",
    "build": "npx webpack"
  }

4. 실행
    $ npm run debug "src=01|02|..." css-modules=(true|false)