# Nomad-Coders-React-For-Beginners

노마드코더 무료 React 강의 공부 내용 저장소입니다.

## Basics of React

# script 추가

```
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

# React.createElement

JSX 없이 엘리먼트 생성 시 기본 문법

(잘 사용하지 않음. React Element는 HTML Element와 달리 실제 DOM을 구성하는 요소 X.

리액트 내부에서 사용되는 Element라 볼 수 있다.

이 Element을 사용해 실제 DOM을 구성하기 위해서는 별도의 라이브러리가 필요)

```
const element = createElement(type, props, ...children);
```

예시) 버튼

HTML

```
<button type="button" class="btn" onClick="console.log('im clicked')" style="background-color: tomato; color: #fff;">버튼 텍스트가 들어가용</button>
```

React Element

```
<body>
    <div id="root"></div>
</body>

<script>
const button = React.createElement(
    "button", // type
    { // props
        type: "button",
        className : "btn"
        onClick: () => console.log("im clicked"),
        style : {
            backgroundColor: "tomato",
            color: "#fff",
        }
    },
    // children (선택 사항)
    "버튼 텍스트가 들어가용"
);

// 화면에 불러오는 방법
const root = document.getElementById("root");
const container = React.createElement("div", null, [h3, button]);
ReactDOM.createRoot(root).render(container);
</script>
```

# JSX 사용 컴포넌트화 방법 (Babel 사용중)

첫글자는 무조건 대문자. 안그러면 HTML 태그로 잘못읽혀 오류 발생

```
const Button = (
    <button
        style={{
            backgroundColor: "tomato",
        }}
        onClick={()=>console.log("im clicked")}>Click me</button>
);
```
