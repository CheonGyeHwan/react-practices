ex04 : 번들링 : webpack
    
    - 1. webpack은 작게 분리된 많은 애플리케이션의 모듈(js, css, image, font...)들의 의존성을 분석해서 하나의 js파일로 묶는 도구
    - 2. 하나의 js파일을 번들(bundle)이라고 하고, 묶는 작업을 번들링(bundling)이라고 한다.
    - 3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미하지 않는다.
    - 4. 빌드 작업
        - 1) linting(ESLint, 문법 체크) 작업
        - 2) document 작업(JSDoc) 작업
        - 3) test(Mocha, jest) 작업
        - 4) 난독화 / 압축 (uglyfy) 작업
        - 5) 번들링
    - 5. JavaScript 뿐만 아니라 다양한 assets(image, css, font...)들도 모듈로
    - 6. 설치
        - $ npm i -D webpack webpack-cli
        - $ npm .\node_modules\.bin\webpack --version
        - $ npx webpack --version
        - $ npx webpack ./src/index.js -o ./public
    - 7. package json scripting("build" stage)
    - 8. $ npm run build