import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import CommentItem from "../../../src/components/units/16-comment-item";

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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    // 리페치 쿼리는 쿼리 날리고 곧 바로 리페치 할때만 사용, 위에 저건 언제든지 리페치 하고 싶을 때 사용
    FETCH_BOARDS,
  );

  return (
    <div>
      {data?.fetchBoards.map(
        (el) => <CommentItem key={el._id} el={el} />,
        // 이렇게 하면 전과 다르게 Component별로 그 안에 함수를 실행시킬 수 있다.
      )}
    </div>
  );
}
