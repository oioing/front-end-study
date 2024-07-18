import React, { useState } from "react";
import { Flex, Rate } from "antd";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  // == 1단계 방식 ==
  // const onChangeStar = (value:number) : void => {
  // setValue (value):
  //}

  // == 2단계 방식 ==
  // const onChangeStar = (value) : any => setValue (value)
  // 중괄호와 return사이에 아무것도 없으면 소괄호로 바꿔 줄 수 있다. + 의미가 없는 경우 () 생략가능

  return (
    <Rate onChange={setValue} value={value} />
    // <Rate onchange={onChanmgeStar} value={value} /> // 1단계 방식
    //원래는 onChangeStar라는 함수가 있다. 그리고, setValue 자리에 binding을 해줘야 한다. 그리고 setValue로 value값을 바꿔주는거다.
    // onChange는 자바스크립트에서 제공하는 onChange가 아니라서, event값이 없다. value : number만 있다.

    // <Rate onchange={onChanmgeStar} value={value} /> 2단계 방식
    // <Rate onchange={(value) => setValue (value)} value={value} /> 3단계 방식 : onChangeStar 문 자체를 onChangeStar자리에 넣어버림
    // <Rate onchange={setValue} value={value} /> 4단계 방식 : 속성이 바인딩이 되어 있을때, 속성 인자 값이 다음함수의 인자로 그대로 들어갈때, value를 생략할 수 있다.
  );
}

// 이건 잘 나오지만, 많은 ui 라이브러리들이 기능과 css를 따로 다운받아서, import로 css를 app.tsx 등에 따로 import 해야 되는 경우가 많다.

// value값이 워낙 많아서,  스코프에 따라 어떤 value를 참조하는지 잘 봐두어야 한다.
// 자신의 스코프 안에서 변수값이 없으면 그 위 범위에서 찾는다. 이를 스코프 체인이라고 한다.
