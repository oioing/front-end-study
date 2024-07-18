import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent } from "react";

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
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(
    // 리페치 쿼리는 쿼리 날리고 곧 바로 리페치 할때만 사용, 위에 저건 언제든지 리페치 하고 싶을 때 사용
    FETCH_BOARDS,
  );

  console.log(data?.fetchBoards);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
    // void는 await에 대비로, 바로 실행한다는 뜻
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {
        new Array(10).fill(1).map((_, index) => (
          // 안쓰는 변수는 _ 언더바로 표시
          <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span>
        ))
        // 자바스크립트라 중괄호가 필요함
        // id에는 숫자 못들어가서 STring 씌워줌
      }

      {/* <span id="1" onClick={onClickPage}>
        1
      </span> */}
    </div>
  );
}
