---
title: "(CSS) position"
description: "About position"
category: "Web"
date: "2025-01-01"
tags: ["web", "html", "css"]
customOrder: 7
---

# (CSS) position

---

요소의 위치를 지정할때 사용한다

top, left, bottom, right을 사용하여 요소의 위치를 변경할 수 있다.

(예: top: -100px, left: 100px → 시작위치를 기준으로 top에서 -100px, left에서 100px만큼 위치 변경)
(top: -100px, left: 100px = bottom: 100px, right: -100px)

## 종류

- **static (default)**
: 위치가 이동되지 않는다. 아무런 영향이 없다.
- **relative**
: 자신의 시작위치를 기준으로 위치를 조정한다.
- **absolute**
: 부모가 static이면 viewport 좌상단 기준으로 위치를 지정한다. (fixed 처럼 동작)
부모가 static이 아니면, 부모의 시작위치를 기준으로 위치를 지정한다.
- **fixed**
: 그냥 viewport 좌상단 기준으로 위치를 지정한다.

## 시작 위치에 대한 고찰 (특히, absolute, fixed에 대해)

absolute와 fixed를 사용하면 꼭 float처럼 다음 요소의 시작위치를 건드리지 않는다. 

### 예시 1) 모든 요소가 relative일때

일단 모든 요소가 relative 속성일때 시작위치는 다음과 같이 정해진다.

![image.png](/img/position/image.png)

![image.png](/img/position/image1.png)

![image.png](/img/position/image2.png)

위치를 지정할때 본인의 시작위치를 기준으로 이동한다.

### 예시 2) absolute 또는 fixed가 사용될때

이런 식으로 중간에 absolute, fixed 요소가 사용되면 그외의 요소들은 시작위치가 땡겨(?)진다.

![image.png](/img/position/image3.png)

물론 지금 div1의 absolute 속성이 fixed처럼 동작하고 있으니, 부모 요소를 relative로 만들어 보겠다.

![image.png](/img/position/image4.png)

(안보여서 크기를 조금 키웠다)

마찬가지로 동작한다.