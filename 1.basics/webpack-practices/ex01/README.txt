JS Module만 번들링 하기

1. 설치 패키지
    - $ npm i -D webpack webpack-cli express

2. 스크립팅(package.json - script)
    - "build": "npx webpack ./src/index.js -o ./public"

3. 번들링
    - $ npm run build