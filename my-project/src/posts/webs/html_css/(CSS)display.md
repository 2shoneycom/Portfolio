---
title: "(CSS) display"
description: "About display"
category: "Web"
date: "2025-01-01"
tags: ["web", "html", "css"]
customOrder: 9
---

# (CSS) display

---

요소의 보여지는 방식을 결정한다.

그런데, 기본적으로 모든 HTML 요소들은 디폴트 display 속성이 정해져있다.

예를 들어, 다음과 같다.

- display: inline
→ \<span>, \<a>, \<img> 등
- display: block
→ \<div>, \<p>, \<h1>, \<h2>, \<ul>, \<li> 등

## 종류

- inline
    - 라인에 포함되는 형식, 박스 영역으로 처리 안함
    - width, height 값 반영 안됨
    - padding 값 반영됨
    - margin 값 왼쪽 오른쪽만 반영됨
    - 시작 위치는 기존에 있던 줄에 이어서
    - 다음 요소의 시작위치는 해당 줄의 다음 위치
- block
    - 박스 영역으로 처리
    - width, height 값 반영됨
    - padding 값 반영됨
    - margin 값 반영됨
    - 시작 위치는 새로운 줄의 맨 처음
    - 다음 요소의 시작위치는 다음 줄의 맨 처음
- inline-block
    - 라인에 포함된 박스 영역으로 처리
    - width, height 값 반영됨
    - padding 값 반영됨
    - margin 값 반영됨
    - 시작 위치는 기존에 있던 줄에 이어서
    - 다음요소의 시작위치는 해당 줄의 다음 위치
- none
: 존재는 하지만 특정 영역을 점유하지 않는다.

## 예시

![image.png](/img/display/image.png)

## display: none VS visibility: hidden

![image.png](/img/display/image1.png)

![image.png](/img/display/image2.png)

display: none은 아예 공간을 점유하지 않는다. 

visibility: hidden은 공간은 점유하고 있는데 보이지 않을 뿐이다.