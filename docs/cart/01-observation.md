# OBS-CART-001

## 목적
Cart 아이콘을 통해 장바구니 페이지 이동 여부 확인

## Input
Inventory 페이지 진입 (로그인 완료 상태)

## Action
Cart 아이콘 클릭

## Result
- Cart 페이지로 이동함
- URL에 `/cart.html`이 포함됨

## Observation
Inventory 페이지의 Cart 아이콘은 장바구니 페이지로 이동하는 기능을 제공한다.

---

# OBS-CART-002

## 목적
장바구니에 추가한 상품 표시 여부 확인

## Input
상품 1개를 장바구니에 추가

## Action
Cart 페이지 진입

## Result
- 추가한 상품이 장바구니 목록에 표시됨
- 상품명, 상품 설명, 상품 가격이 함께 표시됨

## Observation
Cart 페이지는 장바구니에 추가된 상품 정보를 목록 형태로 표시한다.

---

# OBS-CART-003

## 목적
Remove 버튼 동작 확인

## Input
상품 1개가 장바구니에 추가된 상태

## Action
Remove 버튼 클릭

## Result
- 해당 상품이 장바구니에서 제거됨
- Cart Badge의 상품 개수가 감소함

## Observation
Remove 버튼은 선택한 상품을 장바구니에서 제거한다.

---

# OBS-CART-004

## 목적
Continue Shopping 버튼 동작 확인

## Input
Cart 페이지 진입

## Action
Continue Shopping 버튼 클릭

## Result
- Inventory 페이지로 이동함
- URL에 `/inventory.html`이 포함됨

## Observation
Continue Shopping 버튼은 상품 목록(Inventory) 페이지로 이동한다.

---

# OBS-CART-005

## 목적
Checkout 버튼 동작 확인

## Input
상품이 장바구니에 추가된 상태

## Action
Checkout 버튼 클릭

## Result
- Checkout Information 페이지로 이동함
- URL에 `/checkout-step-one.html`이 포함됨

## Observation
Checkout 버튼은 주문 정보 입력(Checkout Information) 페이지로 이동한다.

---

# OBS-CART-006

## 목적
장바구니 상품 개수 유지 여부 확인

## Input
상품 여러 개를 장바구니에 추가

## Action
Cart 페이지 진입

## Result
- 장바구니에 추가한 상품 개수와 표시된 상품 개수가 일치함
- 추가된 모든 상품이 정상적으로 표시됨

## Observation
Cart 페이지는 장바구니에 담긴 모든 상품을 유지하여 표시한다.

---

| Observation ID | 검증 목적 | Requirement 연결 |
|----------------|----------|------------------|
| OBS-CART-001 | Cart 페이지 이동 | FR-CART-001 |
| OBS-CART-002 | 장바구니 상품 표시 | FR-CART-002 |
| OBS-CART-003 | Remove 기능 | FR-CART-003 |
| OBS-CART-004 | Continue Shopping 이동 | FR-CART-004 |
| OBS-CART-005 | Checkout 이동 | FR-CART-005 |
| OBS-CART-006 | 장바구니 데이터 유지 | FR-CART-006 |