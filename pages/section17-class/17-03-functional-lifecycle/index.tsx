import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  //componentDidMount와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, [count]);
  // 처음에 한번 실행되고, count가 바뀔 때마다 계속 다시 실행. : 의존성 배열, dependency-array라고 부름

  //componentDidMout + componentDidUpdate와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행 ");
  });
  // 배열이 빠져버리니까, 배열과 상관없이 무언가가 바뀌면 계속해서 다시 질행됨. 변경사항이 있을때마다

  useEffect(() => {
    // compoentWillUnmount와 동일
    return () => {
      console.log("사라지기 전에 실행");
    };
  }, []); //이 뒤에 의존성 배열이 없으면, 변경될때마다 실행된다. 따라서 꼭 있어야 함. 의존성이 없다는걸 명시적으로 밝혀라

  // 1. useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행");

    return () => {
      console.log("사라지기 전에 실행");
    };
  }); // 끝에 배열이 없으면 '그려지고 나서 실행'이 변경되고 나서 실행까지로 확장된다.
  // ,[]이 끝에 있으면 한번만 실행되고, 배열 안에 값이 변경될때만 재실행 되는거다.

  // 2. useEffect의 잘못된 사용법 (이 안에서 setState시 1회 추가 렌더링. 가급적이면 state안에서 추가 렌더링 X. 어절수없을 때 빼고. )
  // 또한 setCount를 넣게 되면 count가 계속 바뀌면서 무한루플에 빠질 수 있다.
  useEffect(() => {
    ///StoreWriter();
  }, [count]);
  // useEffect는 기본적으로 전부 그려지고 나서 실행된다.

  console.log("나는 언제 실행되게?"); //이게 콘솔에 가장 먼저 찍힌다.

  const onClickCountUp = () => {
    console.log(count); // this 오류
    setCount(1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  return (
    // 프리젠터는 여기에 작성
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!</button>
      <button onClick={onClickMove}>나가기!</button>
    </>
  );
}
