/*

  #3.1 touchables

  * react native에 좋은점은 css에 없는 속성이 있다는것
  예를들어 paddingHorizontal or paddingVertical

  header부분을 만들어볼것이다

  react native에서 버튼 누르기를 어떻게 나누는지 볼것이다
  누르는것과 클릭은 다다른것임

  탭메뉴처럼 활성화된 버튼은 흰색, 비활성화는 회색으로 만들어볼것이다
  일단 theme object를 하나 만들어서 색상을 쉽게 컨트롤 해볼것이다

  *** 정리

  TouchableOpacity * View의 opacity가 변함
  View가 터치에 적절하게 반응하도록 하는 래퍼.(누르는 이벤트를 listen할 준비가 된 VIEW라고 생각)
  아래로 누르면 래핑된 View의 opacity가 감소하여 흐리게 표시됨
  activeOpacity같은 속성을 사용가능한데 0으로하면 클릭했을때의 0의 투명도가 된다
  https://docs.expo.dev/versions/v44.0.0/react-native/touchableopacity/

  TouchableHighlight * View의 bg가 변함
  Opacity보다 더 많은 속성이 있고, 요소를 클릭했을때 배경색을 바뀌도록 해준다
  아래로 누르면 래핑된 View의 background를 표시합한다
  https://docs.expo.dev/versions/v44.0.0/react-native/touchablehighlight/
  underlayColor필요

  TouchableWithoutFeedback
  화면의 가장 위에서 일어나는 탭 이벤트를 listen
  UI가 변하지는 않는다. 유저에게 보여주지 않을때나 이유가있을 때 사용
  Press에 반응하는 모든 요소는 만졌을 때 시각적 피드백이 있어야 한다.
  https://docs.expo.dev/versions/v44.0.0/react-native/touchablewithoutfeedback/

  Pressable
  Pressable은 정의된 자식에 대한 다양한 Press 상호 작용 단계를 감지할 수 있는 핵심 구성 요소 래퍼.
  https://docs.expo.dev/versions/v44.0.0/react-native/pressable/
  조금 더 많은것들이 있어서 문서로 확인

  ** hitSlope
  요소 바깥 어디까지 탭 누르는것을 감지할지 정하는것
  element를 유저의 손가락 크기에 맞추어 조금 늘려줘야할 필요가있을 수 있다.

  ** onPress는 유저가 Touchable을 눌렀을때 실행되는 이벤트를 말함
  손가락이 영역에 들어가거나 빠지거나를 특정함, in out을 따로 정하지않고
  press만 해도 '들어갔다나오는행위'를 말하기때문에 한쪽으로 할것아니면 onPress

*/

/*
  #3.2 Text input

  work, travel이 클릭이 되었을때 상태를 true로 바꾸어주기위해
  onPress에 함수를 넣어주었다

  스타일을 object로 사용하며 확장하기 위해 구조분해할당으로 풀어주고 color를 입력

  react-native에는 text input이라는 것이 있다.
  placeholder등 prop으로 던지면 된다
  여기서도 조건문을 걸어서 바꾸어줄수있다

  onFocus는 화면을 터치ㅏ면 쓸 준비가 된 상태를 말함
  ㅐnChangeText에서는 우리가 입력한 text를 받을 수 있다

  keyboardType은 가끔 유저가 이메일이나 폰번호를 쳐야할때
  키보드 타입을 바꿀수있게 만들어준다.
  android보다 ios가 더 많은게 있다 
  예를들어 URL은 유저에게 URL을 쓰도록 요구할 수 있다.

  * 또 자주쓸것은 returnKeyType, returnKeyLabel
  returnKeyLabel은 android에서만 가능
  returnKeyType을 사용하면 키패드의 return부분을 바꿀 수 있다

  ** 이것이 props를 통해 시스템을 컨트롤하는 방법이다
  react는 component와 props의 조합으로 어떤 플랫폼에도 접근하게해준다

  * secureTextEntry
  비밀번호를 사용할때 쓴다. **** 이런식으로 안보이게나옴

  * multiline
  한줄이상 쓰는 경우에 쓸수있다
  텍스트처럼 글을 쓸 수 있게 된다(textarea 같은느낌)


  placeholderTextColor도 바꾸는것이 가능하다


  *** 현재 우리가 필요한것. 텍스트가 어떻게 변했는지 확인하는것
  onChangeText이것은 함수이다.함수를 이어주고
  event객체를 콘솔에 찍어보면 바로 value값이 나오는것을 볼 수 있다

  우리는 브라우저에 있지 않다. 브라우저에는 이벤트나 타겟이 있지만 rn에는 없다

  * autocorrect
  자동완성을 꺼줄수있다

  * autoCapitalize 
  대문자들같은 자동완성을해줌

*/

/*

  #3.3 To Dos

  키보드에서 return을 누르면 onSubmitEditing 이벤트가 일어난다
  const [toDos, setToDos] = useState({});
  hashmap같은것을 만들기 위해 object로 만들었다. 조금더 개념을 잡기위해서는
  유튜브에서 알고리즘과 데이터구조 확인

  const todos = {}l
  todos[Date.now()] = {text:"record", work:true}

  이런식으로 넣어서 보게되면 id같은것을 가지고있고
  payload도 가지고있다. 추후에 지우려고하게되면 id만 지우면되니 편리할것이다. 수정도 마찬가지

  **** todos[Date.now()] = {}
  이런식으로 state를 직접적으로 수정하는것은 react에서 할 수 없다.
  우리는 항상 새로운 object를 set함수에 보내주어야한다

  그래서 object assign을 쓸것인데 이것은
  object를 가져다가 다른 object와 합쳐서 새로운 object를 리턴해준다

  const newToDos = Object.assign({}, toDos, {
    [Date.now()]: { text, work: working },
  });

  이 부분에서 우리는 3개의 object를 결합하기 위해 object assign을 사용했다
  비어있는 object를 결합했다 (target)
  그리고 이전 todo를 새로운 todo와 합침


*/