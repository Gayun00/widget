### 대시보드 위젯 구현
#### 🔗 Link

[배포 링크](https://widget-flax-five.vercel.app/)

[storybook 배포 링크](https://656aaa28d5bd7307b90bc2bd-ffmnvuvrmr.chromatic.com/?path=/docs/widgets-statsoverviewwidget--docs)

<br>

#### Overview

|접속 유저/횟수 총합, DAU|Top referral pie/table|
|--|--|
|<img width="1425" alt="스크린샷 2023-12-02 오후 9 36 32" src="https://github.com/Gayun00/widget/assets/67543454/82431198-6bd5-4aca-9b0c-d34a50ccd57f">|<img width="1422" alt="스크린샷 2023-12-02 오후 9 36 53" src="https://github.com/Gayun00/widget/assets/67543454/b79f8a03-ea97-4d47-a2ed-d7886727e260">|

<br>


#### Tech stack


|프레임워크| 언어  | 빌드 도구            |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white&style=flat&border"> | <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&style=flat&logoColor=white"> | <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white&style=flat&border"> ||

| 상태관리 라이브러리                                                                                                               | 유닛 테스트                                                                                                              | 컴포넌트 문서화                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&style=flat&logo=ReactQuery&logoColor=white&border"> | <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=Vitest&logoColor=white&style=flat&border"> | <img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&style=flat&logoColor=white&border"> ||

*인터렉션이 많고 실시간으로 변경되는 데이터를 보여주는 프로젝트 특성상, SSR을 고려하지 않고 React와 Vite를 사용하기로 결정했습니다.

<br>


#### 📒 구현 사항

##### 접속 유저의 총합
- [x] 1. 일자별 데이터 합산 표현 
    SUM(Unique Event Count)
- [x] 2. 전일 대비 증감값 표현

##### 접속 횟수의 총합
- [x] 1. 일자별 데이터 합산 표현
    SUM(Total Event Count)
- [x] 2. 전일 대비 증감값 표현

##### 이벤트 추이에 대한 추이 차트
Serial 차트
- [x] 1. 차트 내 두 개의 series(line, bar) 표현
 - unique_view: line, page_view: bar


##### 탑 리퍼러
- [x] 1. 리퍼러별 접속 유저를 내림차순으로 정렬
- [x] 2. Top 4 까지 범례로 표현
- [x] 3. Top 5 부터 합산 후 범례명을 etc로 표현

##### Country > Region > City, 이벤트 카운트 테이블
- [x] 1. 부분합 (Row Grouping + 드릴다운 기능)
- [x] 2. 컬럼별 데이터 정렬 가능
 - 오름차순, 내림차순

<br>


#### 📒 (참고) 추가 구현 사항

|레이아웃 고정 버튼|레이아웃 초기화|
|--|--|
|위젯의 위치를 고정하고, 내부 콘텐츠를 클릭 및 조정할 수 있습니다. (TopReferral table 조작 시 참고)
![ezgif com-video-to-gif (2)](https://github.com/Gayun00/widget/assets/67543454/80b16524-ed80-4768-9e7a-51f8a6324ffe)|위젯을 리사이징하거나 위치를 변경한 이후 레이아웃을 초기화할 수 있습니다.![ezgif com-video-to-gif (3)](https://github.com/Gayun00/widget/assets/67543454/90e925a5-389c-4f3d-9cba-b04e5165d9ae)|





<br>

#### 📒 Point
- 스토리북을 사용해 독립적인 UI만을 담당하는 컴포넌트를 분리해 설계하고 문서화했습니다.
  - 데이터에 따른 각 비주얼라이징 타입별 위젯이 어떻게 표시되는지 제 3자가 빠르게 파악할 수 있고, 협업이 용이하도록 했습니다.
  - 필요에 따라 presentational/ container component를 분리하여 테스트에 용이한 컴포넌트를 작성했습니다.
  - 각 props에 따라 변경되는 UI를 문서화했습니다.

 |||
 |--|--|
 |<img width="406" alt="스크린샷 2023-12-02 오후 9 21 09" src="https://github.com/Gayun00/widget/assets/67543454/afd8a52c-bbad-4eef-a046-f9e6e99a9b83">|<img width="486" alt="스크린샷 2023-12-02 오후 9 21 23" src="https://github.com/Gayun00/widget/assets/67543454/69a7b8a0-564f-4519-82ec-767d17aac5eb">|




<br>

#### 🧪 Test
- vitest를 사용해 유닛 테스트 코드를 작성해 필요한 로직을 검증했습니다.

<br>


#### 📒 CI/CD

- unit test pre-commit
  - husky pre-commit을 사용해 작성한 유닛 테스트 코드로 리팩토링 및 추가 작업에 대한 안정성을 확보할 수 있도록 했습니다.
- storybook 자동 빌드/배포
  - 협업 프로세스를 고려해 PR 리뷰 단계에서 직관적으로 UI 리뷰를 진행할 수 있도록 설정했습니다.
- Vercel 자동 배포 적용
  - trunk-based development 브랜치 전략을 고려해 작업을 진행했으며, 코드 푸시 및 main 브랜치 머지 시마다 자동 배포되도록 설정했습니다.
  - storybook과 프로덕트 배포가 성공 여부를 PR에서 미리 체크하고, 승인 및 머지할 수 있도록 설정했습니다.

<br>

#### 📒 Task
- github issue 생성을 통해 task를 관리하고, 관련 PR에 연결해 쉽게 찾아보고 히스토리를 관리할 수 있도록 했습니다.
