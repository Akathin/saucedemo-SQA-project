# OBS-SORTING-001

## 목적
Sorting dropdown UI 및 옵션 존재 여부 확인

## Input
Inventory 페이지 진입 (로그인 완료 상태)

## Action
Sorting dropdown 확인

## Result
- Sorting dropdown이 화면에 표시됨
- 4개의 정렬 옵션이 존재함
  - Name (A to Z)
  - Name (Z to A)
  - Price (low to high)
  - Price (high to low)

## Observation
Inventory 페이지는 상품 정렬을 위한 dropdown UI를 제공한다.

---

# OBS-SORTING-002

## 목적
Name (A → Z) 정렬 동작 확인

## Input
Inventory 페이지 진입

## Action
Sorting dropdown → "Name (A to Z)" 선택

## Result
- 상품명이 알파벳 오름차순으로 정렬됨
- 전체 6개 상품 순서가 변경됨

## Observation
상품 목록은 이름 기준 오름차순으로 재정렬된다.

---

# OBS-SORTING-003

## 목적
Name (Z → A) 정렬 동작 확인

## Input
Inventory 페이지 진입

## Action
Sorting dropdown → "Name (Z to A)" 선택

## Result
- 상품명이 알파벳 내림차순으로 정렬됨
- 전체 6개 상품 순서가 변경됨

## Observation
상품 목록은 이름 기준 내림차순으로 재정렬된다.

---

# OBS-SORTING-004

## 목적
Price (Low → High) 정렬 동작 확인

## Input
Inventory 페이지 진입

## Action
Sorting dropdown → "Price (low to high)" 선택

## Result
- 상품 가격이 낮은 순으로 정렬됨
- 숫자 기준 오름차순으로 정렬됨

## Observation
상품 목록은 가격 기준 오름차순으로 재정렬된다.

---

# OBS-SORTING-005

## 목적
Price (High → Low) 정렬 동작 확인

## Input
Inventory 페이지 진입

## Action
Sorting dropdown → "Price (high to low)" 선택

## Result
- 상품 가격이 높은 순으로 정렬됨
- 숫자 기준 내림차순으로 정렬됨

## Observation
상품 목록은 가격 기준 내림차순으로 재정렬된다.

---

# OBS-SORTING-006

## 목적
Sorting 후 상품 개수 유지 여부 확인

## Input
Inventory 페이지 진입

## Action
Sorting 옵션 변경 (임의 선택)

## Result
- 항상 6개의 상품이 유지됨
- 상품 DOM 구조는 유지된 상태에서 순서만 변경됨

## Observation
Sorting 기능은 데이터 변경이 아닌 UI 정렬 변경 방식으로 동작한다.

---

| Observation ID | 검증 목적 | Requirement 연결 |
|----------------|----------|------------------|
| OBS-SORTING-001 | Sorting UI 존재 여부 | FR-SORTING-001 |
| OBS-SORTING-002 | Name A→Z 정렬 | FR-SORTING-002 |
| OBS-SORTING-003 | Name Z→A 정렬 | FR-SORTING-003 |
| OBS-SORTING-004 | Price Low→High 정렬 | FR-SORTING-004 |
| OBS-SORTING-005 | Price High→Low 정렬 | FR-SORTING-005 |
| OBS-SORTING-006 | 데이터 무결성 유지 | FR-SORTING-006 |