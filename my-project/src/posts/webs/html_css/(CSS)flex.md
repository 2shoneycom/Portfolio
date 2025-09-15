---
title: "(CSS) Flex"
description: "About flex"
category: "Web"
date: "2025-01-01"
tags: ["web", "html", "css"]
customOrder: 12
---

# (CSS) display: flex

---

이전에는 레이아웃 배치에 대한 속성이 따로 없었다.

그래서 원래는 text와 image간의 배치를 고려하여 만들어진 float을

레이아웃 목적으로 대체하여 사용했었다.

HTML5로 발전하면서 레이아웃 배치만을 전용 목적으로 하는 flex 속성이 고안되었다.

## flex의 개념

flex는 크게 2가지 입장에서 다룬다.

1. 내용물을 담는 컨테이너 입장 (**flex-container**)
2. 담기는 내용물의 입장 (**flex-item**)

## (flex-container입장에서) flex 속성 종류

- **flex-direction**
: flex-item 들이 배치되는 방향(메인축)을 결정
- **flex-wrap**
: flex-Item의 크기 보존 여부를 결정
- **justify-content**
: 메인축을 기준으로 item 정렬 방식 결정
- **align-content**
: 교차축을 기준으로 item 정렬 방식 결정
(내 생각: 정확히는 line이 여러개 생기는 상황에서 line을 어떻게 정렬할 것이냐를 결정하는 것 같다)
- **align-items**
: align-content가 stretch일때, (조금 더 세분화해서) 특정 line 내에서 item을 어떻게 정렬할 것인가

### flex-direction 속성 값 종류

- row (디폴트): 가로 정렬 ➡️
- row-reverse: 가로 정렬(오른쪽에서 왼쪽) ⬅️
- column: 세로 정렬(위에서 아래) ⬇️
- column-reverse: 세로 정렬(아래에서 위) ⬆️

![순서대로 row, row-reverse, column, column-revers](/img/flex/image.png)

순서대로 row, row-reverse, column, column-revers

### flex-wrap 속성 값 종류

- nowrap (디폴트): item의 크기를 보존하지 않는다.
- wrap: item의 크기를 보존한다.

![왼쪽은 nowrap이라서 item의 크기가 짜그러져서 컨테이너에 맞춰졌음, 반대로 오른쪽은 wrap이라서 item의 크기가 보존됨](/img/flex/image1.png)

왼쪽은 nowrap이라서 item의 크기가 짜그러져서 컨테이너에 맞춰졌음, 반대로 오른쪽은 wrap이라서 item의 크기가 보존됨

### justify-content 속성 값 종류

- flex-start (디폴트): 메인 축 앞쪽에 붙임
- flex-end: 메인 축의 뒤쪽에 붙임
- center: 가운데 정렬
- space-between: 양쪽 끝을 기준으로 요소 간의 간격 균등
- space-around: 요소 주변에 일정한 간격을 추가
- space-evenly: 요소와 간격을 균등하게 분배

![순서대로 row, row-reverse, column, column-revers](/img/flex/image2.png)

### align-content 속성 값 종류

내 생각을 보태자면, 정확히는 line이 여러개 생기는 상황에서 line 축들을 어떻게 정렬시킬 것이냐를 결정하는 것 같다.

- stretch (디폴트)
: line 축들을 균등하게 배치한다.
- flex-start
: line 축들을 앞으로 밀착, 정렬시킨다.
- flex-end
: line 축들을 뒤로 밀착, 정렬시킨다.
- center
: line 축들을 가운데 정렬시킨다.
- space-between
: line 축들을 양끝에서부터 정렬시킨다.
- space-around
: line 축들을 적당히 분배 시킨다.
- space-evenly
: line 축들을 완전히 공백까지 일치시켜 분배한다.

![image.png](/img/flex/image3.png)

이 stretch는 item의 높이가 정해진 경우다

![image.png](/img/flex/image4.png)

이 stretch는 item 높이가 정해지지 않은 경우이다

### align-items 속성 값 종류

align-items는 한 술 더 떠서 앞서 align-content가 stretch인 경우 늘어난 line height 내에서 item들을 또 어떻게 정렬할 것인가이다. (그렇게 자주 쓸까 싶긴하다)

- flex-start (디폴트)
- flex-end
- center
- 등

![image.png](/img/flex/image5.png)

왼쪽부터 flex-start, center, flex-end

- 해보면서 느낀 align-items의 진짜 쓸모
    - 생**성되는 line은 하나인데, 그 안에서 중앙 정렬을 원할 때!**
    → 예를 들어, flex-direction: row; 인 상황이고 line은 하나인데,  
    안의 Items 들을 수직적으로 중앙에 오게 하고 싶은 경우
    → 반대로, flex-direction: column; 인 상황이고 line은 하나인데,
    안의 Items 들을 수평적으로 중앙에 오게 하고 싶은 경우
    (생각보다 이런 경우가 자주 일어남)
    
    이때, align-content: stretch; 는 디폴트로 되어있기 때문에 건들 필요 없고
    align-item: center; 로 해주면 원하는 상황이 된다.

## (flex-item 입장에서) flex 속성 종류

- order
: 자신의 배치 순서를 index 처럼 지정 가능 (오름차순)
- flex-grow
: 기본 너비 이후에 남은 공간을 어떻게 나눌 지를 결정하는 속성
- flex-shrink
- flex-basis

### order 예시

해당 item의 style에서 order를 다음과 같이 설정하면, 오름차순으로 배치 순서가 조정된다.

order의 디폴트 값은 0이다.

![image.png](/img/flex/image6.png)

### flex-grow 예시

flex-grow의 디폴트 값은 0이다. 음수는 적용되지 않는다.

flex-grow의 값을 지정하면, 지정한 요소들끼리 남은 너비를 비율대로 나눠갖는다.

여기서 남은 너비란, 전체 너비 - 기본 차지 너비를 말한다.

기본 차지 너비는 다음 중에서 결정된다.

1. 정해진 width, height 값
2. flex-basis
3. 둘 다 없다면 content size 또는 최소한의 너비

<img class="custom-w-80" src="/img/flex/image7.png" />

총 너비 1000px에서, grow(1)은 800px, grow(1)은 333px, grow(2)는 566px를 가진다

이 경우, 남은 너비 = 전체 너비 - 기본 차지 너비 = 1000px - 300px = 700px가 된다.

이 남은 너비를 flex-grow 값이 지정된 애들끼리 그 비율대로 나눠 갖는 것이다.

### flex-shrink 예시

flex-shrink의 디폴트 값은 1이다. 

flex-shrink는 flex-grow와 다르게 공간이 부족할 때 동작한다. 
(flex-grow는 공간이 남을 때 동작한다)

동작 공식은 다음과 같다.

각 item이 줄여야 하는 너비 = 총 줄여야하는 너비 x (자기 shrink값 / shrink 값 총합)

<img class="custom-w-80" src="/img/flex/image8.png" />

### flex-basis 예시

flex-basis의 디폴트 값은 auto이다. 

flex-basis는 앞서 나온 flex-grow, flex-shrink에서 최소한으로 확보해주는 영역 느낌이다. 

물론 content가 있는 한 이거보다 영역을 줄이지는 않는다.

- auto는 최소한의 영역을 해당 item의 size로 한다. (width or height)
- 그 외에는 값을 설정한다.

<img class="custom-w-80" src="/img/flex/image9.png" />

flex-basis: auto;

<img class="custom-w-80" src="/img/flex/image10.png" />

flex-basis: 0; (그래도 content 영역은 확보해주는 모습)

<img class="custom-w-80" src="/img/flex/image11.png" />

flex-basis: 60px; (마찬가지로 content 영역은 적어도 확보해주는 모습)