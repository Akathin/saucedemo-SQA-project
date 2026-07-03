# OBS-LOGIN-001

## 목적
정상 로그인 동작 확인

## Input
Username : standard_user
Password : secret_sauce

## Action
Login 버튼 클릭

## Result
- inventory.html로 이동
- 상품 목록이 표시됨

## Observation
정상 계정으로 서비스 접근이 가능함

---

# OBS-LOGIN-002

## 목적
잘못된 비밀번호 입력 시 로그인 실패 동작 확인

## Input
Username : standard_user
Password : wrong_password

## Action
Login 버튼 클릭

## Result
- 로그인에 실패함
- "Epic sadface: Username and password do not match any user in this service" 오류 메시지가 출력됨
- 로그인 페이지가 유지됨

## Observation
유효하지 않은 계정 정보 입력 시 서비스 접근이 제한되며 오류 메시지를 제공한다.

---

# OBS-LOGIN-003

## 목적
Username과 Password를 모두 입력하지 않은 경우의 동작 확인

## Input
Username : (공란)
Password : (공란)

## Action
Login 버튼 클릭

## Result
- 로그인에 실패함
- "Epic sadface: Username is required" 오류 메시지가 출력됨
- 로그인 페이지가 유지됨

## Observation
Username은 필수 입력값이며, 입력되지 않을 경우 로그인이 제한된다.

---

# OBS-LOGIN-004

## 목적
잠긴 계정(locked account)의 로그인 제한 여부 확인

## Input
Username : locked_out_user
Password : secret_sauce

## Action
Login 버튼 클릭

## Result
- 로그인에 실패함
- "Epic sadface: Sorry, this user has been locked out." 오류 메시지가 출력됨
- 로그인 페이지가 유지됨

## Observation
잠긴 계정은 올바른 비밀번호를 입력하더라도 서비스 접근이 제한된다.

---

# OBS-LOGIN-005

## 목적
Password를 입력하지 않은 경우의 동작 확인

## Input
Username : standard_user
Password : (공란)

## Action
Login 버튼 클릭

## Result
- 로그인에 실패함
- "Epic sadface: Password is required" 오류 메시지가 출력됨
- 로그인 페이지가 유지됨

## Observation
Password는 필수 입력값이며, 입력되지 않을 경우 로그인이 제한된다.

---

# OBS-LOGIN-006

## 목적
Username을 입력하지 않은 경우의 동작 확인

## Input
Username : (공란)
Password : secret_sauce

## Action
Login 버튼 클릭

## Result
- 로그인에 실패함
- "Epic sadface: Username is required" 오류 메시지가 출력됨
- 로그인 페이지가 유지됨

## Observation
Username은 필수 입력값이며, 입력되지 않을 경우 로그인이 제한된다.

---

| Observation ID | 검증 목적          | Requirement 연결 |
| -------------- | -------------- | -------------- |
| OBS-LOGIN-001  | 정상 로그인         | FR-LOGIN-001   |
| OBS-LOGIN-002  | 잘못된 계정         | FR-LOGIN-002   |
| OBS-LOGIN-003  | 필수 입력값 검증      | FR-LOGIN-003   |
| OBS-LOGIN-004  | 잠긴 계정 검증       | FR-LOGIN-004   |
| OBS-LOGIN-005  | Password 필수 검증 | FR-LOGIN-003   |
| OBS-LOGIN-006  | Username 필수 검증 | FR-LOGIN-003   |
