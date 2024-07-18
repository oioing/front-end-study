import {useMutation} from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWriter.presenter' //{}가 없음. 하나밖에 없다는 뜻. export default
//export default는 이름을 마음대로 지어도 하나만 있어서 상관없다. 
import {myGraphqlSetting} from './BoardWrite.queries' //export는 골라서 가져오기 가능. {} 가 있음

//default와 export가 같이 있을땐 아래와 같이 할 수 있다. 
// import Afunction, {apple} from '' 함께 가져오기

// import * as QQQ from ''
// 사용할땐 QQQ.BlueButton => 이렇게 export 함수를 받아와준다.  

export default function BoardWrite(){
    const [isActive, setIsActive] = useState(false)
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(myGraphqlSetting)

    const onClickSubmit = async() =>{
        const result = await 나의함수({
            variables: {        //variables가 $역할을 함. 
                writer: writer,
                title: title,
                contents: contents
            }
        }) 
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        if(event.target.value && title && contents){
            setIsActive(true)
            console.log(isActive)
        }
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(writer && event.target.value && contents){
            setIsActive(true)
            console.log(isActive)
        }
    }
    
    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(writer && title && event.target.value){
            setIsActive(true)
            console.log(isActive)
        }
    }

    return(
        <div>
            <div>$$$$$$$$$여기는 컨테이너입니다.$$$$$$$</div>
            <BoardWriteUI
            onClickSubmit={onClickSubmit} 
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            isActive={isActive}
            />
            {/* 다만 input에 값을 하나씩 넣으면 btn이 노란색으로 안바뀜 */}
            {/* 그 이유는 setState에서 값을 바꾼 후, 곧바로 처음부터 화면을 다시 그린다.(코드를 다시 실행함) */}
            {/* 다만 이 과정에서 무의미한 리렌더링을 방지하기 위해, 임시 저장공간에 중간 setState값을 넣어둔다. 그리고 최종값만을 다시 그려준다. */}
            {/* 즉 함수가 끝나야만 다시 그려주는데, 마지막 if문에서는 함수가 끝나지 않아, 실제 state값이 안바뀌어 있다. */}

             
        </div>
        
    )
}