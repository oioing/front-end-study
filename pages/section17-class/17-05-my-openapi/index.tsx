import { useState } from "react";

export default function OpenApiPage() {
  const [info, setInfo] = useState("");
  const [catImage, setCatImage] = useState("");

  const onClickInfo = async () => {
    // 고양이 정보를 가져와서 info 상태를 업데이트
    const response = await fetch("https://meowfacts.herokuapp.com/");
    const data = await response.json();
    setInfo(data.data);

    // 새로운 고양이 GIF URL 생성
    const gifUrl = `https://cataas.com/cat/gif?${new Date().getTime()}`;
    setCatImage(gifUrl);
  };

  return (
    <div>
      <button style={{ width: "200px", height: "50px" }} onClick={onClickInfo}>
        냐옹 박사가 알려줄게!
      </button>
      {catImage ? (
        <img src={catImage} alt="온다온다 고양이!" />
      ) : (
        "Gif 로딩중이야..."
      )}
      <div>{info}</div>
    </div>
  );
}
