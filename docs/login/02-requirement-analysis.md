# 요구사항 분석 (Requirement Analysis)

## 기능 : Login

### 기능 설명

사용자가 계정 정보를 이용하여
SauceDemo 서비스에 접근할 수 있도록 하는 인증 기능이다.

---

## Functional Requirement

### FR-LOGIN-001

유효한 Username과 Password를 입력한 사용자는
로그인에 성공해야 한다.

Expected Result

- Inventory 페이지로 이동한다.

---

### FR-LOGIN-002

유효하지 않은 계정 정보를 입력한 경우
로그인이 제한되어야 한다.

Expected Result

- 오류 메시지를 출력한다.
- 로그인 페이지를 유지한다.

---

### FR-LOGIN-003

Username은 필수 입력값이다.

Expected Result

- Username 미입력 시
  "Username is required" 오류 메시지를 출력한다.

---

### FR-LOGIN-004

Password는 필수 입력값이다.

Expected Result

- Password 미입력 시
  "Password is required" 오류 메시지를 출력한다.

---

### FR-LOGIN-005

잠긴 계정은 로그인할 수 없어야 한다.

Expected Result

- 계정 잠금 오류 메시지를 출력한다.