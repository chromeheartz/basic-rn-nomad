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