---
title: "(CSS) Pseudo-class Selector"
description: "About Pseudo-class Selector"
category: "Web"
date: "2025-01-01"
tags: ["web", "html", "css"]
customOrder: 4
---

# (CSS) Pseudo-class 선택자

---

class 선택자 (e.g. div.nav 등)과 **비슷하게 동작**하여서 pseudo-class selector인데

class 선택자와 가장 큰 차이점은 2가지이다.

1. : 을 사용한다
2. 이름이 정해져있다. (특정 상태로 미리 정해져있음)

비슷하게 동작한다는 건 element.class_name의 동작원리를 생각하면 됨.

→ element를 먼저 선택 → 선택된 element들 중에서 class_name을 선택

pseudo-class 선택자도 마찬가지라는 것

## 종류

- **:link**
href 주소에 방문 이력이 없는 상태
- **:visited**
href 주소에 방문 이력이 있는 상태
- **:hover**
마우스 포인터가 위에 올라가 있는 상태
- **:active**
클릭 중인 상태
- **:first-child**
그룹 내에서 첫 번째 엘리먼트
- **:last-child**
그룹 내에서 마지막 엘리먼트
- **:nth-child(N)**

## 다른 선택자와의 중첩

p.kakao:hover는 앞에서부터 동작한다.

1. p element들을 선택
2. 그 중에서 .kakao 클래스를 선택
3. 그 중에서 :hover pseudo 클래스를 선택

하여 선택된 element들에게 적용된다.

- 궁금증
    
    Q: p:hover.kakao도 될까?
    
    A: 된다! 똑같이 동작한다. (p element 선택 → :hover 선택 → .kakao 선택)
    
    Q: p.kakao:hover:active 도 될까? (여러번 중첩도 될까?)
    A: 된다!
    

## :nth-child(N)

여기서 N에는 수식을 구성할 수 있다.

- nth-child(n)
- nth-child(2n)
- nth-child(2n-1)

n은 0이상의 정수다. (n = 0, 1, 2, 3, …)

요소의 인덱스는 1부터 시작한다.
즉, nth-child(2n-1)이라고 하면 다음과 같다.

<p>index: 1</p> → 선택됨
<p>index: 2</p>
<p>index: 3</p> → 선택됨
<p>index: 4</p>

- Q: nth-child(-n)은 가능할까?
    
    A: 불가능하다. 요소의 인덱스는 무조건 1 부터 시작하는 양의 정수이므로 0, 음수는 선택되지 않는다.
    
    엄밀히는 사용은 가능하나, 선택되는 엘리먼트가 없어서 무의미하다.
    

그외에, N에 odd, even도 사용가능하다.

### :nth-child 다양한 상황 실험

**<기본적인 상황>**

```html
<article>
    <p>This is 1st paragraph @ article</p>
    <p>This is 2nd paragraph @ article</p>
</article>
<div>
    <p>This is 1st paragraph @ div</p>
    <p>This is 2nd paragraph @ div</p>
</div>
```

```css
p:first-child {
    color: red;
}
```

![Pseudo-classExample](/img/pseudo-class/image.png)

**<Q1> p중에서는 첫번째인데 다른 엘리먼트가 앞에 있다면?**

```html
<article>
    <h5>This is 1st header @ article</h5>
    <p>This is 1st paragraph @ article</p>
    <p>This is 2nd paragraph @ article</p>
</article>
```

```css
p:first-child {
    color: red;
}
```

![Pseudo-classExample](/img/pseudo-class/image1.png)

A: 안된다! 

다음과 같이 동작하는 것 같다. 

1. p 엘리먼트들 선택
2. 그 중 해당 그룹내에서 첫번째인 것 (현재 p는 그룹내에서 두번째부터 시작하므로 조건에 벗어남)

**<Q2> 어느 곳에서나 적용이 될까?**

```html
<div>This is 1st div @ body</div>
<header>
    <div>This is 1st div @ header</div>
    <div>This is 2nd div @ header</div>
</header>
<section>
    <div>This is 1st div @ section</div>
    <div>This is 2nd div @ section
        <div>This is 1st div @ 2nd div @ section</div>
        <div>This is 2nd div @ 2nd div @ section</div>
    </div>
    <article>
        <div>This is 1st div @ article @ section</div>
        <div>This is 2nd div @ article @ section</div>
    </article>
</section>
```

```css
div:first-child {
    color: red;
}
```

위와 동일하게 p로 했더니 p안에는 p가 문법적으로 들어갈 수 없다고 하여 의도대로 되지 않음

![pseudo-class-example](/img/pseudo-class/image2.png)

A: 된다!