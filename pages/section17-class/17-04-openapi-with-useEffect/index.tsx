import axios from "axios";
import 나만의페이지 from "../../section01-js/01-01-example";
import { useEffect, useState } from "react";

// 목표 1 : 페이지가 로드되면 강아지 이미지가 뜨게 하고 싶다.
export default function restGetPage() {
  const [dog, setDog] = useState("");

  // const onClickSync = async () => {
  //   const result = await axios.get("https://dog.ceo/api/breeds/image/random");
  //   console.log(result.data.message); //사진 주소
  //   setDog(result.data.message) //이렇게 하면 무한루프를 돌게 됨.
  // };

  useEffect(() => {
    // async를 위해서 함수를 만들어서 호출함
    const onClickSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result.data.message); //사진 주소
      setDog(result.data.message);
    };
    void onClickSync();
  }, []);
  // 이렇게 하면 무한루프가 아니라 한번만 그려지게 된다. useQuery와 사실상 동일한 방법
  // 엄밀히 말하면 useQuery랑은 미세한 차이가 있는데 useQuery는 요청을 보내놓고 , data를 undefined로 그려놓고 리렌더 하지만 useEffect는 마지막에 쿼리를 보내는 식이다.
  // restapi도 useQuery같은게 없나? RectQuery라는게 있는데, 그걸 통해서 query로 날릴 수 있따. reactquery도 graphql을 지원하기는 함. 그래서 ApolloClient에서 graphql을 쓰는게 전통

  return (
    <div>
      <img src={dog} />
      {/* <button onClick={onClickSync}>REST-API(동기) 요청하기</button> */}
    </div>
  );
}
