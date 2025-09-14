---
title: "(CSS) Pseudo-element Selector"
description: "About Pseudo-element Selector"
category: "Web"
date: "2025-01-01"
tags: ["web", "html", "css"]
customOrder: 5
---

# (CSS) Pseudo-element 선택자

---

element와 비스무리하게 동작

→ element를 생성하면 자동으로 생성되는 숨겨진, 가상의 element

엄연히 하나의 element이며, inline 속성의 엘리먼트이다.
(그중에는 무조건 글자, ‘content’ property를 구성시켜야 나타나는 것들도 있다)

이걸 선택시키는 것이 pseudo-element selector 이다.

## 종류

- **::before**
바로 이전 가상 요소?
- **::after**
바로 뒷 가상 요소?
- **::first-letter**
첫번째 글자 요소
- **::first-line**
화면상에 첫번째 줄로 나타나는 요소
- **::marker**
<li> 리스트 아이템의 마커 요소 (앞에 꼭 요소를 붙여서 사용할 필요없다. 그냥 ::marker도 됨)
- **::selection**
드래그 되는 영역의 요소 (앞에 꼭 요소를 붙여서 사용할 필요없다. 그냥 ::selection도 됨)

## ::before / ::after

이 pseudo element는 가상의 엘리먼트이기 때문에 HTML 상에서 태그로 구성할 수는 없고 오로지 CSS로만 그 형태를 드러나게 할 수 있다. 그래서 content property를 구성해야 내용물이 생기고 그 부분을 렌더링할 수 있는 것이다.

::before은 해당 엘리먼트의 첫 번째 자식 요소로써 동작한다.

::after은 해당 엘리먼트의 마지막 자식 요소로써 동작한다.

### 사용 예시

```html
<h1>Pseudo-Element</h1>
<hr>
<p>The HyperText Markup Language or HTML</p>
<section><p>Cascading Style Sheets or CSS</p></section>
<div><p>Javascript is a programming Language</p></div>
```

```css
p::before {
    content: 'According to Wiki - ';
}
```

![image.png](/img/pseudo-element/image.png)

즉, 이는 다음과 같다.

```html
<h1>Pseudo-Element</h1>
<hr>
<p>
	<p::before>According to Wiki - </p::before>
	The HyperText Markup Language or HTML
</p>
<section>
	<p>
		<p::before>According to Wiki - </p::before>
		Cascading Style Sheets or CSS
		</p>
</section>
<div>
	<p>
		<p::before>According to Wiki - </p::before>
		Javascript is a programming Language
	</p>
</div>
```

### display: block으로 변경하면?

diplay: inline이 디폴트인데 이를 변경가능 하다.

```html
<h1>Pseudo-Element</h1>
<hr>
<p>The HyperText Markup Language or HTML</p>
<section><p>Cascading Style Sheets or CSS</p></section>
<div><p>Javascript is a programming Language</p></div>
```

```css
p::before {
    content: 'orange box';
    display: block;
    width: 500px;
    height: 50px;
    background-color: orange;
}
```

![image.png](/img/pseudo-element/image1.png)

- **Q: 그럼 display 속성을 block으로 변경하고 content는 구성하지 않아도 될까?**
    
    A: 안된다. content는 필수이다. content를 구성하지 않으면 다른 style 속성들은 전부 무용지물이 된다. 그냥 안보임.
    

## ::first-letter / ::first-line / ::marker / ::selection

얘도 마찬가지이지만, 앞선 before/after와의 차이점은 이미 구성이되어있는, 렌더링이 되어있는 요소 (예를 들어, 첫번째 글자, 첫번째 줄 등)을 다시 선택해서 다시 렌더링 시키는 것이다.

즉, content property를 구성할 필요가 없다.

### 사용 예시

```html
<h1>Pseudo-Element</h1>
<hr>
<p>The HyperText Markup Language or HTML</p>
<section><p>Cascading Style Sheets or CSS</p></section>
<div><p>Javascript is a programming Language</p></div>
```

```css
p::first-letter {
    color: red;
    font-size: 200%;
}
```

![image.png](/img/pseudo-element/image2.png)

### content property를 구성한다면?

무시된다.

```html
<h1>Pseudo-Element</h1>
<hr>
<p>The HyperText Markup Language or HTML</p>
<section><p>Cascading Style Sheets or CSS</p></section>
<div><p>Javascript is a programming Language</p></div>
```

```css
p::first-letter {
    content: 'HI, ';
    color: red;
    font-size: 200%;
}
```

![image.png](/img/pseudo-element/image3.png)

### display: block으로 바꾸면?

무시된다. 해당 글자, 줄, 마커, 드래그 영역이 고정이 되어있는 것 같다.

```html
<h1>Pseudo-Element</h1>
<hr>
<p>The HyperText Markup Language or HTML</p>
<section><p>Cascading Style Sheets or CSS</p></section>
<div><p>Javascript is a programming Language</p></div>
```

```css
p::first-letter {
    display: block;
    width: 50px;
    height: 50px;
    background-color: orange;
}
```

![image.png](/img/pseudo-element/image4.png)