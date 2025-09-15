---
title: "DOM, CSSOM, BOM"
description: "About DOM, CSSOM, BOM"
category: "Web"
date: "2025-01-01"
tags: ["web", "html", "css"]
customOrder: 14
---

# DOM, CSSOM, BOM 이란

---

## DOM (**Document Object Model)**

DOM은 XML 또는 HTML 문서를 트리 구조로 표현하는 표준 모델입니다.

우리가 어떤 웹사이트에 접속할 때, 브라우저 내부에서는 다음과 같은 과정이 수행됩니다:

1. 사용자가 URL을 주소창에 입력하고 엔터를 누름
2. 브라우저는 DNS를 통해 해당 도메인에 대응하는 IP 주소를 확인
3. 해당 IP 주소로 HTTP(S) 요청을 보내 서버에 접속
4. 서버로부터 HTML, CSS, JavaScript, 이미지 등의 파일을 응답받음
5. 브라우저는 이 파일들을 메모리로 로드한 뒤, 단순히 출력하지 않고 각 파일을 파싱하여 구조화함
    1. HTML → DOM 구조로
    2. CSS → CSSOM 구조로
    3. JS → AST → 바이트코드 → 실행
6. 이 구조화된 데이터들은 브라우저 프로세스의 메모리(보통 힙 영역)에 객체 형태로 저장됨
7. DOM과 CSSOM을 조합하여 렌더 트리를 생성하고, 레이아웃 계산과 페인팅을 통해 사용자 화면에 콘텐츠가 표시됨

이처럼 브라우저는 한 번 HTML 문서를 파싱하고 나면 이후에는 HTML 파일 원본이 아닌 DOM 구조를 메모리에서 직접 사용합니다.

또한, DOM 자체는 HTML을 트리 형태로 표현하기 위한 W3C 표준이며, 이를 구현하는 방식(C++, JS, Python 등)은 브라우저 엔진 개발자에게 자유롭게 열려 있습니다.

예를 들어, 다음의 HTML 파일은

```html
<body>
  <h1>Hello</h1>
  <p>World</p>
</body>
```

DOM 방식으로 표현하면 다음과 같습니다.

```
document
 └── html
      └── body
           ├── h1
           │    └── "Hello"
           └── p
                └── "World"
```

DOM은 HTML이 브라우저에 의해 분석될 때 어떤 구조로 메모리에 표현되어야 하는지를 정의한 표준일 뿐, 구현 방식은 자유롭습니다.

(+ 추가적으로 DOM은 document, Element, Node, getElementById, appendChild 같은 구조와 API를 제공할 것을 명세합니다) → 이건 꼭 지켜야함

예를 들어, 다음의 대표적인 브라우저는 DOM을 다음의 언어로 구현합니다.

- 크롬: C++로 DOM 엔진 구현 → 자바스크립트에서 접근 가능한 형태로 노출
- 파이어폭스: Rust 기반 엔진 (Servo) 등
- 내가 새로운 브라우저를 만들면, Python이든 Java든 아무 언어로 구현해도 됨
- 단, **DOM 명세를 충실히 따를 것**이 조건임

## CSSOM (CSS Object Model)

CSSOM은 DOM의 CSS 버전이라고 봐도 될 것 같습니다. CSSOM 또한 브라우저가 렌더링을 하는 과정에서 CSS라는 스타일 시트 전체를 메모리에 표현한 객체 모델입니다.

다만, DOM은 전체적으로 트리 형태인 것과 달리 CSS는 규칙의 나열 즉, 리스트 형태에 가깝습니다.

예를 들어, 다음과 같은 CSS는

```css
p {
  font-size: 10px;
}

p > div {
  background: tomato;
}

.section1 {
  color: red;
}
```

CSSOM의 구조로 나타내면 다음과 같습니다.

```
CSSStyleSheet
└── cssRules (CSSRuleList)
    ├── CSSStyleRule
    │   ├── selectorText: "p"
    │   └── style
    │       └── font-size: 10px
    │
    ├── CSSStyleRule
    │   ├── selectorText: "p > div"
    │   └── style
    │       └── background: tomato
    │
    └── CSSStyleRule
        ├── selectorText: ".section1"
        └── style
            └── color: red
```

정리하면, 브라우저의 렌더링 과정에서 HTML은 DOM 구조로, CSS는 CSSOM 구조로 파싱되어 메모리에 저장이되고 마지막으로 렌더링하기 전에 DOM과 CSSOM을 같이 분석해서 Render Tree라는 것을 생성합니다.

<img class="custom-w-full" src="/img/DOM_CSSOM_BOM/image.png" />

<img class="custom-w-80" src="/img/DOM_CSSOM_BOM/image1.png" />

이 과정에서 실제로 화면에 띄우기 위한, 렌더링을 하기위한 요소만 남게 되어 브라우저는 해당 Render Tree 만 참고하여 렌더링을 하면 된다는 장점이 있습니다.

## BOM (Browser Object Model)

BOM 자체는 브라우저에서 사용할 수 있는 객체들을 참조하기 위한 브라우저-특화 모델입니다. 하지만 이보다 더 중요해보이는 것은 window라는 객체인 것 같습니다.

window 라는 객체는 웹 브라우저에서 하나의 탭(창) 전체를 관리하는 최상위 객체입니다. 즉, window는 브라우저의 환경 전체를 대표하는 객체이며 뿐만 아니라, 모든 전역 객체의 시작점이라는 역할도 부여받았습니다.

window를 최상위 객체로 하여 하위 객체로써 DOM, BOM, JS의 전역 변수 및 함수 등이 존재합니다.

<img class="custom-w-full" src="/img/DOM_CSSOM_BOM/image2.png" />

예를 들어, DOM에 접근하고자 하면 다음과 같습니다.

- window.document
- 즉, 기존에 사용하던 document.querySelector() 등은 사실상 window.document.querySelector() 였던 것

또한, 흔히 말하는 BOM, 브라우저 관련 제어 기능을 접근하고자 하면 다음과 같습니다.

- window.alert()
- window.confirm()
- window.open()
- 등

마지막으로, JS 코드 상으로 다룬 전역 변수와 함수들도 window로 접근할 수 있게 됩니다.

```jsx
var a = 10;
console.log(window.a); // 10

function hello() {}
console.log(window.hello); // ƒ hello() { ... }
```

이와 같이 전역 변수 및 함수로 선언된 것들(위에서 a, hello)은 window 객체의 프로퍼티로써 붙게 됩니다.

이게 실행되는 시점은 HTML이 DOM으로 분석되는 과정, 파싱을 할 때입니다. 브라우저가 HTML 파싱을 시작하고 코드를 읽어나갈 때, \<script> 태그를 만나게 되면 그때 해당 코드 내에 있는 전역 변수와 함수들이 window의 프로퍼티로써 붙게 됩니다. 이 이후부터는 window를 통해 스크립트의 전역 변수 및 함수에 접근할 수 있습니다.