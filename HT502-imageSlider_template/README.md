# 웹프론트엔드 UI 실습
* 일시: 2018.12.10 ~ 2018.12.02
* 수강생 : 훈련직종 교강사님들

## 수업의 목표
1. Basic Template
   - HTML, CSS 기본
2. Image Slider
3. Git을 이용한 버전관리

> FrontEnd UI 구현을 위한 HTML, CSS, JavaScript, jQuery 실습

``````javascript
$(document).ready(function () {
    // 모든 이미지 아이템을 선택
    $imgItems = $("#slider ul .item");
    
    // 시작할 때의 index 
    let currentIndex = 1;
    // 이미지 아이템의 개수
    let imgCount = $imgItems.length;

    // 1초간격으로 Interval 을 실행 (1000ms = 1s)
    setInterval(() => {
        if (currentIndex > (imgCount - 1)) {
            currentIndex = 0;
        }
        $imgItems.removeClass('active')
        $imgItems.eq(currentIndex++).addClass('active');
    }, 1000);
});
