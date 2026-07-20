# OBS-CHECKOUT-001

## 목적
Checkout 버튼을 통한 Checkout Information 페이지 이동 여부 확인

## Input
Cart 페이지 진입 및 상품 1개 이상 추가 상태

## Action
Checkout 버튼 클릭

## Result
- Checkout Information 페이지로 이동함
- URL에 `/checkout-step-one.html`이 포함됨

## Observation
Checkout 버튼은 주문자 정보 입력을 위한 Checkout Information 페이지로 이동하는 기능을 제공한다.

---

# OBS-CHECKOUT-002

## 목적
Checkout Information 입력 필드 표시 여부 확인

## Input
Checkout Information 페이지 진입

## Action
페이지 구성 확인

## Result
- First Name 입력 필드가 표시됨
- Last Name 입력 필드가 표시됨
- Postal Code 입력 필드가 표시됨
- Continue 버튼이 표시됨
- Cancel 버튼이 표시됨

## Observation
Checkout Information 페이지는 주문 진행을 위한 사용자 정보 입력 기능을 제공한다.

---

# OBS-CHECKOUT-003

## 목적
Checkout Information 정상 입력 후 다음 단계 이동 여부 확인

## Input
First Name, Last Name, Postal Code 입력

## Action
Continue 버튼 클릭

## Result
- Checkout Overview 페이지로 이동함
- URL에 `/checkout-step-two.html`이 포함됨

## Observation
필수 주문 정보 입력 후 Continue 버튼을 통해 주문 검토 단계로 이동한다.

---

# OBS-CHECKOUT-004

## 목적
필수 입력값 Validation 동작 확인

## Input
Checkout Information 페이지에서 입력값 미입력 상태

## Action
Continue 버튼 클릭

## Result
- Checkout Overview 페이지로 이동하지 않음
- 오류 메시지가 표시됨

## Observation
Checkout Information 페이지는 필수 입력값 누락 시 다음 단계 진행을 제한한다.

---

# OBS-CHECKOUT-005

## 목적
Checkout Overview 주문 정보 표시 여부 확인

## Input
Checkout Information 정상 입력 완료

## Action
Checkout Overview 페이지 진입

## Result
- 추가한 상품 정보가 표시됨
- 상품명과 가격이 표시됨
- Item Total이 표시됨
- Tax가 표시됨
- Total 금액이 표시됨
- Finish 버튼이 표시됨

## Observation
Checkout Overview 페이지는 주문 전 상품 및 결제 정보를 검토할 수 있는 기능을 제공한다.

---

# OBS-CHECKOUT-006

## 목적
Finish 버튼을 통한 주문 완료 처리 확인

## Input
Checkout Overview 페이지 진입

## Action
Finish 버튼 클릭

## Result
- Checkout Complete 페이지로 이동함
- URL에 `/checkout-complete.html`이 포함됨
- 주문 완료 메시지가 표시됨

## Observation
Finish 버튼은 주문 완료 처리를 수행하고 완료 페이지로 이동한다.

---

# OBS-CHECKOUT-007

## 목적
Back Home 버튼 동작 확인

## Input
Checkout Complete 페이지 진입

## Action
Back Home 버튼 클릭

## Result
- Inventory 페이지로 이동함
- URL에 `/inventory.html`이 포함됨

## Observation
Back Home 버튼은 주문 완료 후 상품 목록 페이지로 이동하는 기능을 제공한다.

---

| Observation ID | 검증 목적 | Requirement 연결 |
|----------------|----------|------------------|
| OBS-CHECKOUT-001 | Checkout Information 이동 | FR-CHECKOUT-001 |
| OBS-CHECKOUT-002 | Checkout 입력 필드 표시 | FR-CHECKOUT-002 |
| OBS-CHECKOUT-003 | 주문 정보 입력 후 다음 단계 이동 | FR-CHECKOUT-003 |
| OBS-CHECKOUT-004 | 입력값 Validation | FR-CHECKOUT-004 |
| OBS-CHECKOUT-005 | Checkout Overview 정보 표시 | FR-CHECKOUT-005 |
| OBS-CHECKOUT-006 | 주문 완료 처리 | FR-CHECKOUT-006 |
| OBS-CHECKOUT-007 | Back Home 이동 | FR-CHECKOUT-007 |