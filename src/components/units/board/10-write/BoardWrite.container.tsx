import {useMutation} from '@apollo/client'
import { useState, ChangeEvent } from 'react'
import BoardWriteUI from './BoardWriter.presenter' //{}가 없음. 하나밖에 없다는 뜻. export default
//export default는 이름을 마음대로 지어도 하나만 있어서 상관없다. 
import {UPDATE_BOARD, myGraphqlSetting} from './BoardWrite.queries' //export는 골라서 가져오기 가능. {} 가 있음
import { useRouter } from 'next/router'
import { IBoardWriteProps, IMyVariables } from './BoardWrite.types'

//default와 export가 같이 있을땐 아래와 같이 할 수 있다. 
// import Afunction, {apple} from '' 함께 가져오기

// import * as QQQ from ''
// 사용할땐 QQQ.BlueButton => 이렇게 export 함수를 받아와준다.  



export default function BoardWrite(props :IBoardWriteProps ){
    const router = useRouter()
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(myGraphqlSetting)
    const [updateBoard] = useMutation(UPDATE_BOARD)


    const onClickSubmit = async() =>{
        const result = await 나의함수({
            variables: {        //variables가 $역할을 함. 
                writer: writer,
                title: title,
                contents: contents
            }
        }) 
        console.log(result, '이건 제출할때')
        router.push(`/section10-typescript/10-02-typescript-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async() =>{
        

        const myVariables : IMyVariables = {
            number : Number(router.query.number) //이미 여기서 타입 추론이 완료되어 버림
        } 
        if(writer) myVariables.writer = writer
        if(title) myVariables.title = title
        if(contents) myVariables.contents = contents
        // if문 한줄이면 {} 생략가능
        
        
        // 여기서 수정 작동 
        const result = await updateBoard({
            variables: myVariables
        })
        console.log(result ,'이건 수정 후 조회')
        router.push(`/section10-typescript/10-02-typescript-boards/${result.data.updateBoard.number}`)

    }

    const onChangeWriter = (event : ChangeEvent<HTMLInputElement> ) => {
        setWriter(event.target.value)
    }
    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    
    const onChangeContents = (event : ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value)
    }

    return(        <div>
            <div>$$$$$$$$$여기는 컨테이너입니다.$$$$$$$</div>
            <BoardWriteUI
            onClickSubmit={onClickSubmit} 
            onClickUpdate={onClickUpdate}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            isEdit = {props.isEdit}
            data={props.data} //등록하기 페이지에선 undefined, 수정하기 페이지에선 실제 데이터
            />
        </div>
        
    )
}