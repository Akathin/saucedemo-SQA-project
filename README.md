# SauceDemo SQA Project

SauceDemo Web Application을 대상으로 QA Engineer 관점에서 테스트 설계부터 자동화 테스트까지 수행한 SQA Portfolio Project입니다.

요구사항 분석을 기반으로 Test Case를 설계하고 Manual Testing을 수행했으며,
Selenium과 Playwright를 활용하여 주요 사용자 Flow에 대한 UI Automation Testing을 구현했습니다.


## 🛠 Tech Stack

### Manual Testing

- Requirement Analysis
- Test Point 작성
- Test Case Design
- Manual Test Execution
- Bug Report 작성


### Automation Testing

#### Selenium
- Python
- Pytest
- Selenium WebDriver

#### Playwright
- JavaScript
- Playwright Test


### Design Pattern

- Page Object Model (POM)

테스트 코드와 페이지 객체를 분리하여 유지보수 가능한 테스트 구조를 구현했습니다.


## 📌 Test Design Technique

### Equivalence Partitioning (동등 분할)

입력값을 정상/비정상 영역으로 나누어 테스트 케이스 설계


### Error Guessing (에러 추정)

사용자가 발생시킬 수 있는 오류 상황을 기반으로 테스트 케이스 설계


## ✅ Test Coverage


### Login

- 로그인 성공
- 로그인 실패
- 필수 입력 검증
- 잠긴 계정 검증


### Product Inventory

- 상품 목록 표시
- 상품 정보 표시
- 상품 이미지 클릭
- 상품명 클릭
- Add to Cart 버튼 확인


### Product Sorting

- Name (A → Z)
- Name (Z → A)
- Price (Low → High)
- Price (High → Low)


### Cart

- Add to Cart
- Remove
- Cart Badge 증가/감소
- 여러 상품 추가
- Cart 페이지 이동
- Cart 목록 표시


### Checkout

- Checkout 버튼
- First Name 입력
- Last Name 입력
- Postal Code 입력
- Continue 버튼
- Cancel 버튼
- Finish 버튼
- Checkout Complete 페이지 확인


## 📂 Project Structure

```
saucedemo-SQA-project

├── AUTOMATION
│   ├── Selenium
│   │   └── tests
│   │
│   └── Playwright
│       └── tests
│
├── PAGES
│   ├── Selenium
│   │   └── Page Objects
│   │
│   └── Playwright
│       └── Page Objects
│
└── DOCS
    ├── Observation
    ├── Requirement Analysis
    ├── Test Point
    ├── Test Cases
    ├── Manual Test Result
    └── Bug Report
```


## 📊 Test Result

| Module | Selenium | Playwright |
|---|---|---|
| Login | PASS | PASS |
| Inventory | PASS | PASS |
| Sorting | PASS | PASS |
| Cart | PASS | PASS |
| Checkout | PASS | PASS |


## 💡 Project Experience

- 요구사항 분석 기반 테스트 설계
- 테스트 포인트 및 테스트 케이스 작성
- Manual Testing 수행 및 결과 관리
- Bug Report 작성
- Selenium / Playwright UI Automation 구현
- Page Object Model 기반 테스트 구조 설계
- 사용자 Flow 기반 E2E Testing 경험