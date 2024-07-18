import {BlueButton, RedInput} from './BoardWrite.styles'
export default function BoardWriteUI(props){

    return(
        <div>
            <div>@@@@@@@@여기는 프리젠터입니다@@@@@@@</div>
            작성자 : <RedInput type="text" onChange={props.onChangeWriter}/>
            {/* 이것또한 부모가 RedInput이라는 자식 컴포넌트에, type과 onChange라는 props를 내려주는거다.  */}
            제목 : <input type="text" onChange={props.onChangeTitle}/>
            내용 : <input type="text" onChange={props.onChangeContents}/>
            <BlueButton   button onClick={props.onClickSubmit} isActive={props.isActive}>GRAPHQL-API 요청하기</BlueButton>

        </div>

    )
}