/*
  #2.0 

  snack.expo에서 간단히 웹으로 rn을 개발해볼 수 있다
*/

/*
  #2.1 rules of native

  리액트 네이티브의 몇가지 룰들.

  * div대신 view를 쓴다 view는 container같은 느낌
  쓰기전에 import가 필요하다.

  * rn에 있는 모든 text는 text component에 들어가야한다
  View안에 text를 넣었다면 text component안에서 렌더링되어야한다고 말할것이다

  * View에 style이 있다. 일부 style을 사용하지 못하는 차이점이 있다
  예를 들어 border: "1px green dashed"라고하면 유효한 style propery가 아니라고 나오게된다
  웹에서 사용하던 모든것을 사용하기는 불가능

  StyleSheet.create는 object를 만들때 쓴다
  styles의 object들. 객체형식(javascript)의 css라고 생각하면 편할듯

  StyleSheet를 사용하지 않다면 inline방식으로 작성도 가능하다

  StyleSheet.create 를 쓰지않고도 작동이 가능하지만 자동완성이 지원되지 않음.
  const styles = {
    container: {...}
  }

  ** StatusBar

  statusbar는 third-party (제 3자) 패키지이다. 
  이 component가 렌더링은 되고있지만 화면에 표시되지 않는다
  status-bar는 시계,배터리,wi-fi를 의미한다
  ios, android와 같은 운영체제를 유지하기 위해 존재한다.
  style을 dark / light로 지정해줄수도있다


  📍 일부 component와 대부분의 react-native은 단지 운영체제와 소통하는 component라는 증거이다
  브라우저기반이면 render또는 return안에 있는 것들은 화면에 보이게되지만
  rn에서는 다르다. 

*/

/*
  #2.2 RN packages

  https://velog.io/@yongyongi/ts-ignore-%EC%99%80-ts-expect-error
  rn의 문서를 보면 statusbar가 core component라고 적혀져있다

  rn에도 statusbar가 있는데 third-party로 사용하는 이유는 무엇일까

  기존에는 asyncstorage같은것이 있었지만 지금은 없어졌다 그 이유는
  많은 component가 이전버전에는 있었지만 android, ios로 나뉘어져있고, 정돈되지않았다
  초기에 rn팀은 많은 component를 제공하고싶어했다
  TopBarIOS 등등 ..

  또한 많은 API를 제공하고싶어했다. 핸드폰에 item을 저장하는 방식으로 사용했었다.

  하지만 그렇게 하기에는 많은 힘든것들이 있어서 규모를 줄였다
  이제 AsyncStorage를 사용하려면 다른곳에서 다운받아 써야한다.
*/

/*
  #2.3 Third Party Packages

  component와 api의 차이점

  component는 화면에 렌더링할 항목이다

  API는 자바스크립트 코드이다
  자바스크립트 코드가 운영체제와 소통하는것을 안다.
  예를들어 vibration은 디바이스를 진동시킨다
  rn에서 가져와서 vibration에 있는 메소드들을 실행시킬 수 있다

  * 실제앱에서는 api가 충분하지 않을 수 있다
  예를들어 facebook 로그인, 비동기저장소 등이 필요할 수 있다.
  문서를 찾아보면 community package를 찾아보라고한다

  reactnative.directory에는 third-party 패키지와 API가 있다
  전에는 rn팀이 asyncStorage를 제공했지만 현재는 제공하지않음

  현재 만약 storage를 원하면 스스로 만들어내야한다.
  요점은 storage를 위한것이 많아서 옵션을 잘 선택해야한다는것

  *** expo 는 rn가 몇몇 package를 지원하지 않는것을 안다
  그래서 expo는 자체적으로 packages와 api를 만들었는데 이것을 
  expo SDK라고 한다
  https://docs.expo.dev/versions/latest/
  꽤많은 API들이 있다

  이제 왜 Expo StatusBar와 RN StatusBar가 있는지 알았다
  그 이유는 Expo가 RN의 일부 component,API를 복제하고 
  개선하기로했기때문

*/

/*

  #2.4 Layout system

  RN의 flex는 web과 흡사하다
  flex container가 되어라 라고 할필요 없다 display:flex를 안해도된다
  default로 flex-direction의 방향이 column이다

  기본적으로 모든 View는 flex container
  overflow가 있다고 스크롤을 할 수 있는것도 아님

  또다른 중요한 포인트는
  너비와 높이에 기반해서 레이아웃을 만들지 않을것이다.
  스크린 사이즈에 따라서 다르게 보이니 flex속성의 비율로 잡아주는것이 좋다

  아이콘, 아바타 같은것이면 괜찮을텐데 레이아웃에서는 안쓸것이다

  * 부모에 flex1을 주고, 자식들에게 flex1로 주면 화면을 3분할해서 꽉차서 들어가게된다
  flex속성을 잘 조절해서 반응형으로 잡아주는것이 포인트
  부모에 속성이 없으면 자식들이 어떤것을 기준으로 flex가 잡히는지 모른다. 

*/

/*

  #2.5 - 2.6 Styles

  기본적인 css로 스타일을 했다
  day View 박스를 계속 복사해서 넣어봐도 
  스크롤이 되지않는데 왜냐하면 'view'이기 때문에.

  브라우저에서는 자동적으로 스크롤이 되지만 
  RN에서는 모든것이 component다.

  * scrollView라는 컴포넌트를 사용해볼것이다
  많은 props가 있다. 포인트는 스크롤 다운 할 수 있게 해준다는것

  이것은 Native ScrollView이다 보다시피 운영체제에서 제공한것.
  안드로이드에서는 조금 다르게 보일것이다. (바운싱효과가 없을것)

  * 좌우로 이동하게 해볼것이다
  horizontal 이라는 prop으로 넣어볼것
  뭔가 간격이 이상해졌다.

  scrollView를 쓸때 style을 만들고 싶으면 style prop을 쓰면 안되고
  container style을 써야한다

  이렇게 넣어주면 간격은 잡히는데 스크롤이 안된다
  이렇게 되는 이유는 이 scrollView에 felx를 줄 필요가 없다
  스크린보다 더 커야 하기 때문에

  show element inspector( 핸드폰을 누르거나 터미널 m)을 보면
  element가 얼마나 큰지 볼 수 있다 (웹의 inspector같은 느낌인듯)

  우리는 현재 day를 두개씩 보는데 1개씩만 보고싶다.
  이럴때에 전체 스크린 사이즈를 가져와야 한다
  * 하나의 day 가 전체화면의 크기가 되도록

  * width: 300이렇게보다는 핸드폰 사이즈를 알려주는 API를 이용해볼것이다
  우리가 호출할 API는
  **** Dimensions이다

  이것은 화면 크기를 얻을 수 있다
  const {height, width} = Dimensions.get('window');이런 구문을 써서
  가져와서 콘솔에 찍어보면 값이 찍히는걸 볼 수 있다

  ** paginate(페이지 생성)

  pagingEnabled는 우리가 스크롤을 자유롭게 못하게하고
  scrollView에 pagingEnabled속성을 걸어주면
  페이지가 생기게 해준다. 스크롤처럼 되지않고 슬라이드처럼 동작하게 된다

  * 하단에 보면 슬라이드 dots처럼 따라다니는것이 있다 그런것을
  없애주려면
  showHorizontalScrollIndicator를 사용하면
  scroll indicator를 숨길것이다

  숨기지 않고 style을 해줄 수 있는 방법 또한 있다

  ** IndicatorStyle
  이것은 IOS에서만 작동한다. 문서의 상단을 보면 
  RN이 운영체제에 기능을 요청함을 알 수 있다

  indicator스타일도 vertical, horizontal 있다


*/