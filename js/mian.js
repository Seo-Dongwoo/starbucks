const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
 searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  // search라는 클레스에 focused를 추가해주는 작업
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
}); 
// focus가 풀릴때도 같이 설정해준다.


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // 스크롤을 내릴수록 숫자가 커지게 된다.
    //  gsap.to(요소, 지속시간, 옵션); 을 이용해서 
    // 스크롤을 내리면 천천히 사라지고 천천히 생기게 하는 작업
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'   
      });
      // dispaly:'none' 값을 이용해서 사라졌을 때 그 효능 조차 없애버리는 기능
       // 버튼 보이기! 
       gsap.to(toTopEl, .2, {
        x: 0
      });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block' 
      });
      // 버튼 숨기기! 
      gsap.to(toTopEl, .2, {
        x: 100
      });
  }
}, 300));
// 300은 0.3초를 의미하고 화면을 scroll하면 0.3초 단위로 부하를 줘서 막 실행되는 것을
// 방지하는 역할을 한다.
// _.throttle는 scroll할 때 많이 사용된다. 
// _.throttle(함수,시간)



toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0 
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*.7, // 처음으로 동작하는 fade-in은 0.7초후에 애니메이션이 동작할 것이다.
    //index의 값은 초기 값이 0 이므로 1을 더해주는 작업을 해준다.
    opacity: 1
  });
});
//반복 작업을 할 때 많이 이용한다. 
//이미지가 순차적으로 하나씩 투명 상태에서 나타나게 된다.

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next' 
    // 다음 슬라이드와 이전 슬라이드를 볼 수 있도록 기능을 제공해준다.
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: 'awards .swiper-prev',
    prevEl: 'awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion //!는 반대의 값이 들어가도록 해준다.
  if (isHidePromotion) { 
    // 숨김 처리!
    promotionEl.classList.add('hide'); 
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});
//처음에는 false라는 값이 할당 되어 있어서 프로모션이 토글되어 있지 않다.
// 토글 버튼을 누르면 false값이 true값으로 바뀌면서 숨김 처리가 된다. 
// 반대인 경우에는 보임 처리가 된다.

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, 
    random(1.5, 2.5), 
    {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true,// 재생된 애니메이션을 다시 위로 재생 시키는 것.
    ease: Power1.easeInOut, //gsap easing에 들어가서 입력(애니메이션을 더 부드럽게 하는 효과)
    delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면을 0~1로 나누면 0.8 부분에 훅이 걸린다.
      // 훅이 걸리게 되면 밑에 있는 setClassToggle 함수가 실행된다.
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021년도

