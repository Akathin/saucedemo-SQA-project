# 요구사항 분석 (Requirement Analysis)

## 기능 : Cart

### 기능 설명

로그인 후 사용자는 상품을 장바구니에 추가하여 Cart 페이지에서 확인할 수 있다.

Cart 페이지에서는 추가된 상품 정보를 확인하고, 상품을 제거하거나 계속 쇼핑을 진행할 수 있으며, Checkout을 통해 주문 절차를 시작할 수 있다.

---

## Functional Requirement

---

### FR-CART-001

사용자는 Cart 페이지로 이동할 수 있어야 한다.

Expected Result

- Cart 아이콘 클릭 시 Cart 페이지로 이동한다.

---

### FR-CART-002

사용자는 장바구니에 추가한 상품을 확인할 수 있어야 한다.

Expected Result

- 추가한 상품이 Cart 목록에 표시된다.
- 상품명, 상품 설명, 상품 가격이 표시된다.

---

### FR-CART-003

사용자는 장바구니에서 상품을 제거할 수 있어야 한다.

Expected Result

- Remove 버튼 클릭 시 해당 상품이 장바구니에서 제거된다.
- Cart Badge의 상품 개수가 감소한다.

---

### FR-CART-004

사용자는 Continue Shopping 기능을 사용할 수 있어야 한다.

Expected Result

- Continue Shopping 버튼 클릭 시 Inventory 페이지로 이동한다.

---

### FR-CART-005

사용자는 Checkout 기능을 사용할 수 있어야 한다.

Expected Result

- Checkout 버튼 클릭 시 Checkout Information 페이지로 이동한다.

---

### FR-CART-006

Cart 페이지는 장바구니 데이터를 유지하여 표시해야 한다.

Expected Result

- 장바구니에 추가한 모든 상품이 표시된다.
- 표시된 상품 개수는 장바구니에 추가한 개수와 일치한다.