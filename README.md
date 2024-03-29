# React 기본 강좌

### React 기술

- JSX
- Hooks
  - useState
  - useRef : 일반 값을 기억
  - useEffect : componentDidMount, componentDidUpdate, componentWillUnmount
  - useLayoutEffect
  - useMemo : 복잡한 함수 결과 값을 기억(함수의 리턴 값을 기억)
  - useCallback : 함수 자체를 기억, 자식 컴포넌트에 함수를 전달 시 무조건 사용, 이벤트 함수에 거의 사용
  - useReducer : reducer를 편리하게 사용하기 위해
  - useMemo : 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있음.
  - useContext : context 사용하기 위해
- PureComponent : Class Component 일 때 사용
- memo : Function 일 때 사용
- createContext

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

// React Router
npm i react-router
npm i react-router-dom
```

### ES6

- Class
- import
- map
- filter
- reduce

### React Router

- Link
- Route
  - render props : 자식에게 부모 props를 전달하고 싶을 경우
  - exact : path와 정확하게 일치하는 경우
- Browser
  - BrowserRouter
    - 새로고침을 했을 때 페이지가 안뜸
    - 검색엔진에서 사용
  - HashRouter
    - Build, Delpoy시 편리함
    - 새로고침을 했을 때 브라우저에 물어봄
    - 관리자페이지에서 사용
- withRouter
- Switch
  - 해당하는 첫 번째 페이지를 보여준다.
  - 동시에 여러 개의 router가 보여지는 것을 막아준다.

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

### Html과 React 다른점

- class -> className
- for -> htmlFor

### 알아두면 좋은 것

- Node는 자바스크립트 실행기이다. (백엔드, 서버가 아님)
- Node에서는 require 사용
- Hooks는 함수 컴포넌트가 전체로 재실행되는 현상이 있다.

## 참고

- [REACT TRAINING / REACT ROUTER](https://reacttraining.com/react-router/web/api/matchPath/returns)
- [자그마한 리액트 팁 모음](https://react-etc.vlpt.us/)
