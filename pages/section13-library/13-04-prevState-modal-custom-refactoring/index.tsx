import {Modal} from 'antd'
import { useState } from 'react'
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Address } from 'react-daum-postcode';


export default function ModalCustomPage(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)
    
    const onToggleModal = (): void =>{
        setIsOpen((prev) => !prev)
    }

    const handleComplete = (data :Address): void =>{
        console.log(data)
        onToggleModal() 
    }

    return (
        <>
            <button onClick={onToggleModal}>
                냥코들아 모달을 열어줘!
            </button>

            {/* 모달 종료방식 1 : 모달 숨기는 방법 */}
            {/* 긴 input 등 입력 내용을 유지해야하는 경우 */}
            {/* <Modal title="모달제목" open={isOpen} onOk={handleOK} onCancel={handleCancel}>
                <DaumPostcodeEmbed onComplete={handleComplete}/>
            </Modal> */}

            {/* 모달 종료방식 2 : 모달 삭제 후 다시 여는 방법 */}
            {/* 비밀번호등, 보완이 중요해서, 타입 내용을 없애는게 좋을때 */}
            
            {isOpen &&(
            <Modal title="모달제목" open={true} onOk={onToggleModal} onCancel={onToggleModal}>
                <DaumPostcodeEmbed onComplete={handleComplete}/>
            </Modal>)}
        </>

    )
}