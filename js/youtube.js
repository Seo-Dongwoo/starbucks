 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //script를 찾아서 tag에 할당해주고 tag에 외부 자바스크립트 라이브러리를 넣어준다. 
 //script라는 태그를 가진 요소들중에 제일 첫 번째 태그를 firstScripttag에 할당해준다.
 //그렇게 찾은 firstScripttag의 tag를 실행한다는 의미이다.
 function onYouTubeIframeAPIReady() {
   //<div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist:'An6LvWQuj_8' // 반복 재생할 유튜브 영상  ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      }
    }
   });
 }
// 영상이 준비가 되면 익명의 함수가 실행되고 실행 되면 준비된 영상을 음소거 처리 하겠다는 의미
