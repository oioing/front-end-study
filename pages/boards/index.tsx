import { BoardList } from "../../src/components/units/portfolio/portfolio.container";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";
import {
  Boards_Query,
  FETCH_BOARDS_COUNT,
} from "../../src/components/units/portfolio/portfolio.queries";
import { useState } from "react";
export default function BoardListPage() {
  const [startPage, setStartPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(Boards_Query, {
    variables: {
      page: 1,
    },
  });
  const { data: BoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((BoardsCount?.fetchBoardsCount ?? 10) / 10);
  console.log(lastPage, "마지막 페이지");
  return (
    <BoardList
      data={data}
      startPage={startPage}
      setStartPage={setStartPage}
      lastPage={lastPage}
      refetch={refetch}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  );
}
