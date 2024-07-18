import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };
  //   이렇게 Component별로 선언하면 정말 훨씬 간편해짐

  return (
    <div>
      !isEdit ? (
      <div>
        <span style={{ margin: "10px" }}>{props.el.title}</span>
        <span style={{ margin: "10px" }}>{props.el.writer}</span>
        <button onClick={onClickEdit}>수정하기</button>
      </div>
      ) : (
      <input type="text" key={props.el._id} />)
    </div>
  );
}
