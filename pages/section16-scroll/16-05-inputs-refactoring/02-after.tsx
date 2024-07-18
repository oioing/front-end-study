import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const myGraphqlSetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function graphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(myGraphqlSetting);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables가 $역할을 함.
        ...inputs,
      },
    });
    console.log(result);
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      //   사실 이게 prev라서 ...inputs 대신 ...prev 써도 된다.
      // 엄밀히 말하면 화살표 함수라, (prev) =>{ return} 이긴하다. 하지만 화살표 함수함수에서 중괄호와 return사이에 아무것도 없으면
      // 소괄호로 바꿀 수 있다. 그래서 => ({})가 된거다. 근데 이때 소괄호를 생략하는 순간 객체의 중괄호가 아니라 함수의 중괄호가 되기 때문에 ()를 생략할 수 없다.
      // 근데 화살표 함수에서 화살표와 ret
      [event.target.id]: event.target.value,
      // 중요:이 대괄호의 의미는 변수를 쓰고 싶은게 아니라, 이 변수에 담겨있는 값을 쓰고 싶을 때, 그때 대괄호를 쓴다.
    }));
  };

  // 한줄일땐 괄호 필요 없음
  return (
    <div>
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
