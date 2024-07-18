import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingPageMoved(): JSX.Element {
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    // 리페치 쿼리는 쿼리 날리고 곧 바로 리페치 할때만 사용, 위에 저건 언제든지 리페치 하고 싶을 때 사용
    FETCH_BOARDS,
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    // const qqq = myIndex;
    // qqq[Number(event.currentTarget.id)] = true;
    // setMyIndex(qqq);
    // 바로 배열 복사로, 원래 배열도 바뀌면서 기존과 새로운 State가 같다. State가 같은 경우 setState가 작동하지 않기 때문에, 아무것도 바뀌지 않는다.
    // 리액트활용 시 이러한 오류가 정말 굉장히 많다..배열, 객체 복사해서 원본이 같이 바뀌어 setState가 작동안하는 오류
    const qqq = [...myIndex];
    qqq[Number(event.currentTarget.id)] = true;
    setMyIndex(qqq);
  };

  console.log(data?.fetchBoards);

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        !myIndex[index] ? (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} />
        ),
      )}
    </div>
  );
}
