import {Modal} from 'antd'


export default function ModalAlertPage(): JSX.Element {


    const onClickSuccess = () : void =>{
        Modal.success({
            content: '성공! 냥코들은 실패하지 않아요!',
          });
    }

    const onClickError = () : void =>{
        Modal.error({
            content: '실패! 냥코들도 실패할 수 있죠',
          });
    }


    return (
        <>
            <button onClick={onClickSuccess}>성공!</button>
            
            
            
            
            <button onClick={onClickError}>실패!</button>
        </>

    )
}