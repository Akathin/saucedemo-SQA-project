# OBS-INVENTORY-001

## 목적
상품 목록 정상 조회 여부 확인

## Input
정상 계정 로그인

## Action
Inventory 페이지 진입

## Result
- 총 6개의 상품이 표시됨
- 각 상품이 목록 형태로 출력됨

## Observation
로그인 성공 시 상품 목록을 조회할 수 있다.

---

# OBS-INVENTORY-002

## 목적
상품 정보 표시 여부 확인

## Input
Inventory 페이지 진입

## Action
상품 목록 확인

## Result
각 상품에 다음 정보가 표시된다.
- 상품 이미지
- 상품명
- 상품 설명
- 상품 가격

## Observation
각 상품은 이미지, 이름, 설명, 가격 정보를 포함하여 표시된다.

---

# OBS-INVENTORY-003

## 목적
상품 이미지 클릭 동작 확인

## Input
Inventory 페이지 진입

## Action
상품 이미지 클릭

## Result
해당 상품의 상세 페이지로 이동한다.

## Observation
상품 이미지를 통해 상세 페이지로 이동할 수 있다.

---

# OBS-INVENTORY-004

## 목적
상품명 클릭 동작 확인

## Input
Inventory 페이지 진입

## Action
상품명 클릭

## Result
해당 상품의 상세 페이지로 이동한다.

## Observation
상품명을 통해 상세 페이지로 이동할 수 있다.

---

# OBS-INVENTORY-005

## 목적
상품별 Add to cart 버튼 표시 여부 확인

## Input
Inventory 페이지 진입

## Action
상품 목록 확인

## Result
각 상품에 Add to cart 버튼이 표시된다.

## Observation
각 상품은 Inventory 페이지에서 장바구니 추가 버튼을 제공한다.

---

| Observation ID | 검증 목적 | Requirement 연결 |
|----------------|----------|------------------|
| OBS-INVENTORY-001 | 상품 목록 조회 | FR-INVENTORY-001 |
| OBS-INVENTORY-002 | 상품 정보 표시 | FR-INVENTORY-002 |
| OBS-INVENTORY-003 | 이미지 상세 이동 | FR-INVENTORY-003 |
| OBS-INVENTORY-004 | 상품명 상세 이동 | FR-INVENTORY-003 |
| OBS-INVENTORY-005 | 장바구니 추가 | FR-INVENTORY-004 |