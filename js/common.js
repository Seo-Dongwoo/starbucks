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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021년도