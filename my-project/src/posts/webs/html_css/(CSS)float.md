---
title: "(CSS) float"
description: "About float"
category: "Web"
date: "2025-01-01"
tags: ["web", "html", "css"]
customOrder: 6
---

# (CSS) float

---

둥~ 띄워서 임의 위치에 배치한다. 

이 과정에서 그 아래 있는 콘텐츠들을 밀어낸다. 

## value 종류

1. **left**
2. **right**
3. **none (default)**
4. **inherit**
: 부모의 float 속성을 따라간다

## 배치 위치 (float:left)

나의 시작 지점을 기준으로 최대한 왼쪽으로 붙는다.

### 예시 1

div(1), div(2), div(3) 모두 float:left 했을 때

![image.png](/img/float/image.png)

모두 해당 시작 위치를 기준으로 둥~ 떠서 최대한 왼쪽으로 붙게 된다.

만약 다음에 오는 요소가 있다면 그 또한 해당 위치를 시작 위치로 잡게 된다.

### 예시 2

div(1), div(2)는 float:left이고 div(3)는 일반일 때

![image.png](/img/float/image1.png)

![div(3) 크기를 키워보면 밑에 있는 걸 확인할 수 있다](/img/float/image2.png)

div(3) 크기를 키워보면 밑에 있는 걸 확인할 수 있다

여전히 모두 시작위치는 같지만, div(3)는 둥 뜨지 못해서 div(1)밑에 깔려있다. 

그 와중에 텍스트는 아예 밀려남을 볼 수 있다.

### 예시 3

div(1)은 일반이고 div(2), div(3)은 float:left 일 때

![image.png](/img/float/image3.png)

먼저오는 div(1)이 일반 box 영역을 차지하므로 다음에 오는 요소들은 시작위치가 div(1)의 다음으로 밀려난다.