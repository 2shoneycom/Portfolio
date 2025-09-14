---
title: "(CSS) box-sizing"
description: "About box sizing"
category: "Web"
date: "2025-01-01"
tags: ["web", "html", "css"]
customOrder: 3
---

# (CSS) box-sizing

---

화면에 렌더링을 할때 4가지 요소가 있다.

1. content
: 내용물이 들어가는 곳 (예: 텍스트)
2. padding
: 안쪽 여백
3. border
: 경계선
4. margin
: 바깥쪽 여백

## box-sizing: content-box (디폴트)

box의 크기를 content까지로 보겠다는 의미이다.

즉, weight, height은 content의 크기를 정한다. 그 외에 padding, border, margin은 설정하는대로 그 크기가 더해진다.

### 예시

```css
div.box {
    margin: 50px auto 0px;
    padding: 50px;
    width: 500px; height: 500px;
    border: 10px solid black;

    background-color: skyblue;
}
```

![image.png](/img/box-sizing/image.png)

## box-sizing: border-box

box의 크기를 border까지로 보겠다는 의미이다.

weight, height은 content, padding, border를 포함해서 크기를 정한다.

### 예시

```css
div.box {
    margin: 50px auto 0px;
    padding: 50px;
    width: 500px; height: 500px;
    border: 10px solid black;

    background-color: skyblue;
}
```

![image.png](/img/box-sizing/image1.png)