# React 기본 강좌

### React 기술

- JSX
- Hooks
  - useState
  - useRef : 일반 값을 기억
  - useEffect
  - useLayoutEffect
  - useMemo : 복잡한 함수 결과 값을 기억(함수의 리턴 값을 기억)
  - useCallback : 함수 자체를 기억, 자식 컴포넌트에 함수를 전달 시 무조건 사용
  - useReducer
- PureComponent : Class Component 일 때 사용
- memo : Function 일 때 사용

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
- Hooks는 함수 컴포넌트가 전체로 재실행되는 현상이 있다.
