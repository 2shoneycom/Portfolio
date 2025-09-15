---
title: "What is an Emmet Code?"
description: "Abbrevation code tool for HTML tags"
category: "Web"
date: "2025-01-01"
tags: ["web", "html"]
customOrder: 1
---
# Emmet 코드란? (단축키)

---

코드 단축키라고 보면된다.

## !

HTML 기본 코드를 작성할 수 있다.  

## 태그 이름

태그 이름을 치고 tab이나 enter를 치면 해당 태그 엘리먼트 코드로 변한다.

예를 들어, 다음과 같다.

- div → \<div>\</div>
- img → \<img src=”” alt=””>

## 중첩

emmet 코드를 중첩 시켜서 더 복잡한 코드로 만들 수 있다.

- **>**
: 이 다음에 오는 요소를 자식 요소로 만든다
- **+**
: 이 다음에 오는 요소를 형제 요소로 만든다
- **^**
: 이 다음에 오는 요소를 한 단계 윗 요소로 만든다.
- **\***
: 해당 요소를 여러개 만든다.
- **()**
: 괄호로 묶을 수도 있다.

## Attribute emmet 코드

- **#**
: id를 붙여준다
- **.**
: class를 붙여준다
- **[ ]**
: 내가 원하는 attribute를 직접 써놓을 수 있다. (굳이?)
- **\$\*n**
: 1~n까지 넘버링을 해준다. $의 개수로 자리수를 정할 수 있다.
- **@n 또는 @-n**
: 넘버링의 방향과 출발 문자를 정해준다. n부터 시작해라 또는 n으로 끝내라 라는의미

ex) li.item$@-3*3 → \<li class=”item5”>\</li>\<li class=”item4”>\</li>\<li class=”item3”>\</li>

## Text emmet 코드

열린 태그와 닫힌 태그가 있는 엘리먼트들 사이에 어떤 text를 넣을지 결정해준다.

- **{}**
이 안에 쓴 텍스트로 구성한다.