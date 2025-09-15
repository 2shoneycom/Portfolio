---
title: "(CSS) z-index"
description: "About z-index"
category: "Web"
date: "2025-01-01"
tags: ["web", "html", "css"]
customOrder: 8
---

# (CSS) z-index

---

렌더링의 앞, 뒤 순서를 정한다.

powerpoint 같은 프로그램에서 ‘앞으로 가져오기/뒤로 보내기’와 같은 역할이다.

숫자가 클 수록 앞으로 나온다.

단, 해당 요소에 position 속성이 있어야 한다. (즉, position: relative/absolute/fixed 이어야 함)

## 다양한 상황

z-index는 단순히 숫자 크기만으로 비교하지 않는 복잡한 상황이 있다고 한다.

1. 다양한 depth의 요소끼리 z-index를 비교하는 상황
2. z-index가 auto일때 맥락을 비교하는 상황

<a href="https://velog.io/@hwiyu25/z-index-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0">z-index 사용하기</a> 에 더 자세히…