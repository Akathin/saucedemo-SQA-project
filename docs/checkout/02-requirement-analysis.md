# 요구사항 분석 (Requirement Analysis)

## 기능 : Checkout

### 기능 설명

사용자는 Cart 페이지에서 Checkout 기능을 통해 주문 절차를 진행할 수 있다.

Checkout 과정에서는 사용자 정보를 입력하고, 주문 상품 및 결제 정보를 확인한 후 주문을 완료할 수 있다.

---

## Functional Requirement

---

### FR-CHECKOUT-001

사용자는 Checkout Information 페이지로 이동할 수 있어야 한다.

Expected Result

- Cart 페이지에서 Checkout 버튼 클릭 시 Checkout Information 페이지로 이동한다.

---

### FR-CHECKOUT-002

사용자는 Checkout Information 페이지에서 주문자 정보를 입력할 수 있어야 한다.

Expected Result

- First Name 입력 필드가 제공된다.
- Last Name 입력 필드가 제공된다.
- Postal Code 입력 필드가 제공된다.

---

### FR-CHECKOUT-003

사용자는 필수 주문 정보를 입력한 후 다음 단계로 진행할 수 있어야 한다.

Expected Result

- Continue 버튼 클릭 시 Checkout Overview 페이지로 이동한다.

---

### FR-CHECKOUT-004

Checkout Information 페이지는 필수 입력값을 검증해야 한다.

Expected Result

- 필수 입력값 미입력 시 Checkout Overview 페이지로 이동하지 않는다.
- 오류 메시지가 표시된다.

---

### FR-CHECKOUT-005

사용자는 Checkout Overview 페이지에서 주문 정보를 확인할 수 있어야 한다.

Expected Result

- 주문 상품 정보가 표시된다.
- 상품명과 가격이 표시된다.
- Item Total, Tax, Total 금액이 표시된다.

---

### FR-CHECKOUT-006

사용자는 주문을 완료할 수 있어야 한다.

Expected Result

- Finish 버튼 클릭 시 Checkout Complete 페이지로 이동한다.
- 주문 완료 메시지가 표시된다.

---

### FR-CHECKOUT-007

사용자는 주문 완료 후 Inventory 페이지로 이동할 수 있어야 한다.

Expected Result

- Back Home 버튼 클릭 시 Inventory 페이지로 이동한다.