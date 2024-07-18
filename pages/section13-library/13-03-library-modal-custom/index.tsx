import {Modal} from 'antd'
import { useState } from 'react'


export default function ModalCustomPage(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)
    
    const showModal = (): void =>{
        setIsOpen(true)
    }
    const handleOK = (): void =>{
        setIsOpen(false)
    }
    const handleCancel = (): void =>{
        setIsOpen(false)
    }



    return (
        <>
            <button onClick={showModal}>
                냥코들아 모달을 열어줘!
            </button>
            <Modal title="모달제목" open={isOpen} onOk={handleOK} onCancel={handleCancel}>
                비밀번호 입력: <input type="password"/>
            </Modal>
        </>

    )
}