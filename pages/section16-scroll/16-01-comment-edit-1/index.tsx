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
  const [myIndex, setMyIndex] = useState(-1);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    // 리페치 쿼리는 쿼리 날리고 곧 바로 리페치 할때만 사용, 위에 저건 언제든지 리페치 하고 싶을 때 사용
    FETCH_BOARDS,
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    setMyIndex(Number(event.currentTarget.id));
  };

  console.log(data?.fetchBoards);

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        index !== myIndex ? (
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
