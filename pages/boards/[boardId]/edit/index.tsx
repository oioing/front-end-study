import { useRouter } from "next/router"
import BoardsWriteContainer from "../../../../src/components/units/portfolio/portfolio.container"
import { useQuery } from "@apollo/client"
import { BOARD_QUERY } from "../../../../src/components/units/portfolio/portfolio.queries"
import { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types"

export default function BoardUpdatePage(){
    const router = useRouter()
    if (!router || typeof router.query.boardId !== "string") {return <></>;}

    console.log(router)
    const {data} = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(BOARD_QUERY, {
        variables : {
            boardId : String(router.query.boardId)
        }
    })
    console.log(data, "넘겨")

    return <BoardsWriteContainer
    isEdit = {false}
    data = {data}
    />
}
