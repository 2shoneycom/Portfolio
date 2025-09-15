---
title: "(CSS) Transform"
description: "About Transform"
category: "Web"
date: "2025-01-01"
tags: ["web", "html", "css"]
customOrder: 13
---

# (CSS) Transform

---

회전, 크기 변환, 비틀기 등의 형태 변화를 다룬다.

transform에는 크게 

- 2D transform
- 3D transform

이 있는데, 여기서는 2D transform만 다룬다.

## 주요 속성 종류

- **translate (translateX, translateY)**
: 이동시킨다.
- **scale (scaleX, scaleY)**
: 크기를 변현시킨다.
- **rotate** 
: 회전시킨다.
- **skew (skewX, skewY)**
: 비튼다.
- **matrix**
: 총합 본 (순서: scaleX, skewY, skewX, scaleY, translateX, translateY)

### 예시

<video src="/video/transform/record_1.mov" controls></video>

## (+ 추가) transform-origin 속성

이 속성을 사용하면 크기가 커지는 기준을 정할 수 있다.

디폴트로는 요소의 중심을 기준으로 변하는 건데

예를 들어, transform-origin: left bottom;

이라고 하면 왼쪽 아래 모서리를 기준으로 커진다.

![image.png](/img/transform/image.png)

정확히 %로도 그 기준점을 잡을 수 있다.

예) transform-origin: 50%, 50%

## (+ 추가) transform: 안에 여러 속성 추가 가능

transform: scale(1.2) skew(10deg); 

이런 게 가능하다.