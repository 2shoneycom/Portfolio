---
title: "(CSS) Font"
description: "About font"
category: "Web"
date: "2025-01-01"
tags: ["web", "html", "css"]
customOrder: 11
---

# (CSS) 폰트 font

---

폰트는 페이지의 성격, 분위기 등을 결정하기 때문에 중요하다.

## font 관련 주요 속성

- font-style
: 글자 스타일 (일반, 이탈릭체)
- font-weight
: 글자 두께
- font-size
: 글자 크기
- font-family
: 글꼴

## 주요 font-family 종류

### 1) Serif 그룹

문자의 끝부분이 돌출된 형태의 폰트 그룹

![image.png](/img/font/image.png)

### 2) Sans-serif 그룹

반대로 끝부분 돌출 없이 깨끗한 라인을 가지는 폰트 그룹

![image.png](/img/font/image1.png)

### 3) Monospace 그룹

각 문자끼리의 폭이 일정한 폰트 그룹

![image.png](/img/font/image2.png)

### 4) cursive 그룹

손글씨 같은 흘림체 형태의 폰트 그룹

![image.png](/img/font/image3.png)

### 5) fantasy 그룹

화려하게 다양한 형태로 꾸며진 폰트 그룹

![image.png](/img/font/image4.png)

## 폰트 적용 원리

font-family로 적용한 폰트가 사용자에게 정확하게 보이려면, 해당 사용자의 로컬(os)에 해당 폰트가 설치되어있어야 한다. 

기본적으로 대부분의 os는 자주 사용되는 폰트를 내장하고 있다.

이렇게 자주 사용되는 폰트를 사용하는 경우에는 문제가 없다.

하지만, 다른 사용자가 만든 폰트 등을 적용시키고 싶은 경우에는 코드 상으로 해당 폰트의 url을 임포트 해주는 방식을 사용해야 모두에게 보이게끔 할 수 있다.

### 안전한 폰트

앞서 말했듯이 자주 사용되는 폰트는 안전하다. 

다음과 같은 폰트가 그 예시이다.

![image.png](/img/font/image5.png)

### fall back 예비 폰트 구성

만약을 대비해 예비 폰트를 구성해 놓을 수 있다.

```css
* {
	font-family: 'Georgia', 'Times New Roman', serif;
}
```

이 경우 앞에서부터 적용을 시도한다. 

맨 마지막에는 폰트 그룹을 구성해 놓는다. 

→ 앞에 모든 폰트가 적용 실패했을 때 해당 그룹의 디폴트 폰트가 적용된다.