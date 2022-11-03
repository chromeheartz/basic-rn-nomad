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
  #2.2

*/