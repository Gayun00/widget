### 대시보드 위젯 구현

#### Tech stack

| 프레임워크                                                                                                             | 언어                                                                                                                      | 빌드 도구                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white&style=flat&border"> | <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&style=flat&logoColor=white"> | <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white&style=flat&border"> |

|

| 상태관리 라이브러리                                                                                                               | 유닛 테스트                                                                                                              | 컴포넌트 문서화                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&style=flat&logo=ReactQuery&logoColor=white&border"> | <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=Vitest&logoColor=white&style=flat&border"> | <img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&style=flat&logoColor=white&border"> |

|

#### Overview

##### 위젯 레이아웃

- 레이아웃 고정 및 초기화 버튼
- 레이아웃 위치 이동 및 리사이징 기능

##### 접속 유저 총합

##### 접속 횟수 총합

##### DAU

##### Top referral pie chart

- 4위까지 파이차트 표시
- 5위부터 etc로 총합 표시

##### Top referral table

- country > region > city 순서의 depth로 row grouping
- group별 unique event count 부분합 표시

<br>

#### Folder structure

#### Convention

##### commit

##### branch

- trunk-based-development

#### CI/CD

##### test

- vitest
