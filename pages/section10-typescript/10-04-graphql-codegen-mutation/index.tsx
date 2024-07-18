import {useMutation, gql} from '@apollo/client'
import {IMutation, IMutationCreateBoardArgs} from "../../../src/commons/types/generated/types"

const myGraphqlSetting = gql`
    mutation createBoard($writer:String, $title:String, $contents:String){

        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function graphqlMutationPage(){
    // const [counter, setCounter] = useState<number>(0) 이렇게 useState옆에서 타입 언급

    // const [나의함수] = useMutation<결과타입, 변수타입>(myGraphqlSetting)
    const [나의함수] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(myGraphqlSetting)

    const onClickSubmit = async() =>{
        const result = await 나의함수({
            variables: {        //variables가 $역할을 함. 
                createBoardInput : {
                writer: "훈이",
                title: "여어 뭐냐구!!",
                contents: "으하하하하핳하하"
                }
            }
        }) 
        
        console.log(result)
    }

    // 한줄일땐 괄호 필요 없음 
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>


    
    
}