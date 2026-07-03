# 요구사항 분석 (Requirement Analysis)

## 기능 : Product Sorting

### 기능 설명

로그인 후 상품 목록 페이지에서 사용자는 다양한 기준으로 상품을 정렬할 수 있다.

상품 정렬은 UI dropdown을 통해 수행되며,
선택된 기준에 따라 상품 목록의 표시 순서가 변경된다.

---

## Functional Requirement

---

### FR-SORTING-001

사용자는 상품 정렬 기능을 사용할 수 있어야 한다.

Expected Result

- Sorting dropdown이 Inventory 페이지에 표시된다.

---

### FR-SORTING-002

사용자는 상품명을 기준으로 오름차순 정렬을 수행할 수 있어야 한다.

Expected Result

- "Name (A to Z)" 선택 시 상품명이 알파벳 오름차순으로 정렬된다.

---

### FR-SORTING-003

사용자는 상품명을 기준으로 내림차순 정렬을 수행할 수 있어야 한다.

Expected Result

- "Name (Z to A)" 선택 시 상품명이 알파벳 내림차순으로 정렬된다.

---

### FR-SORTING-004

사용자는 상품 가격을 기준으로 낮은 가격부터 높은 가격 순으로 정렬할 수 있어야 한다.

Expected Result

- "Price (low to high)" 선택 시 가격이 낮은 순으로 정렬된다.

---

### FR-SORTING-005

사용자는 상품 가격을 기준으로 높은 가격부터 낮은 가격 순으로 정렬할 수 있어야 한다.

Expected Result

- "Price (high to low)" 선택 시 가격이 높은 순으로 정렬된다.

---

### FR-SORTING-006

상품 정렬 기능은 데이터 변경 없이 표시 순서만 변경해야 한다.

Expected Result

- 상품 개수는 항상 동일하게 유지된다.
- DOM 구조 변경 없이 순서만 변경된다.