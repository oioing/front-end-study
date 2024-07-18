import {useMutation, gql} from '@apollo/client'

const myGraphqlSetting = gql`
    mutation{
        createBoard(writer: "혠냥", title: "뭔데용 냥냥ㅇ이", contents:"뭐라구용? 냥냥펀치입니다!"){
            _id
            number
            message
        }
    }
`

export default function graphqlMutationPage(){

    const [나의함수] = useMutation(myGraphqlSetting)

    const onClickSubmit = async() =>{
        const result = await 나의함수() 
        console.log(result)
    }

    // 한줄일땐 괄호 필요 없음 
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>


    
    
}