# React 기본 강좌

### React 기술

- JSX
- Hooks
  - useState
  - useRef
  - useEffect
  - useLayoutEffect
- PureComponent, memo

### React 설치

```bash
npm init
npm i react react-dom
npm i -D webpack webpack-cli
npm i -D @babel/core @babel/preset-env @babel/preset-react
npm i babel-loader
npm i -D @babel/plugin-proposal-class-properties

// 자동 실행
npm i -D react-hot-loader
npm i -D webpack-dev-server
```

### ES6

- Class
- import
- map
- filter
- reduce

### 사용 기술

- Babel
- Webpack

### Webpack 설정 및 실행

- Browsers 설정 : https://github.com/browserslist/browserslist#queries

```
// package.json -> "dev": "webpack" 수정
npm run dev

npx webpack
```

### React에서 다른점

- class -> className
- for -> htmlFor

### 알아두면 좋은 것

- Node는 자바스크립트 실행기이다. (백엔드, 서버가 아님)
- Node에서는 require 사용
