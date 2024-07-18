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
  const [startPage, setStartPage] = useState(1);

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

  const onClickprevPage = () => {
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    setStartPage(startPage + 10);
    void refetch({ page: startPage + 10 });
    // 여가서는 위 setStartPage로 인해 10이 더해진 값이 업데이트 되기 전이다. 업데이트는 상태변경 후 재렌더링 될때이다. 따라서 두 매개변수 값이 같은거다.
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <span onClick={onClickprevPage}>이전</span>
      {
        new Array(10).fill(1).map((_, index) => (
          // 안쓰는 변수는 _ 언더바로 표시
          <span
            key={index + startPage}
            id={String(index + startPage)}
            onClick={onClickPage}
            style={{ margin: "5px" }}
          >
            {index + startPage}
          </span>
        ))
        // 자바스크립트라 중괄호가 필요함
        // id에는 숫자 못들어가서 STring 씌워줌
      }
      <span onClick={onClickNextPage}>다음</span>

      {/* <span id="1" onClick={onClickPage}>
        1
      </span> */}
    </div>
  );
}
