import React, { useEffect, useState } from 'react'
import { Button, Icon, Text } from '@shopify/polaris'
import { EditIcon, SmileyHappyIcon, XIcon } from '@shopify/polaris-icons'
import styled from 'styled-components'
import EmojiPicker from '@/components/display/EmojiPicker'

const EditMainChat = ({ message, flag, onCancelEdit }) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [inputString, setInputString] = useState(message)

    useEffect(() => {
        if (message && flag !== null) {
            setInputString(message)
        }
    }, [message, flag])

    const handleSubmit = () => {
        console.log("text: ", inputString);
        console.log("image:", imageList);
    }

    const onEmojiClick = (EmojiClickData) => {
        setInputString(prev => prev + EmojiClickData.emoji);
        setShowEmojiPicker(false);
    };

    const handleCloseEmoji = () => {
        setShowEmojiPicker(pre => !pre);
    }

    return (
        <>
        <EditContainer className="flex items-center justify-between w-full px-3 py-2 rounded-tr-xl rounded-tl-xl border border-[#E1E1E1]">
            <div className="flex items-center gap-2">
                <Icon source={EditIcon} />
                <div className="flex flex-col">
                    <Text as="h3" variant="headingSm">
                        Chỉnh sửa
                    </Text>
                    <Text as="h5" variant="bodyXs">
                        Bạn có thể chỉnh sửa tin nhắn tại đây
                    </Text>
                </div>
            </div>
            <div className="cursor-pointer" onClick={() => onCancelEdit()}>
                <Icon source={XIcon} tone="base" />
            </div>
        </EditContainer>
        <EmojiContainer>
            {showEmojiPicker && <EmojiPicker onEmojiClick={(EmojiData) => onEmojiClick(EmojiData)}/>}
        </EmojiContainer>
        <div className="flex items-center justify-between py-2 px-3 gap-2 rounded-bl-md rounded-br-md bg-[#8cbdc9] w-full">
            <Button icon={SmileyHappyIcon} onClick={handleCloseEmoji}/>
            <InputChat 
            className="input" 
            rows="1" 
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${Math.min(e.target.scrollHeight, 3 * 20)}px`;
            }}
            />
            <Button icon={EditIcon} onClick={() => handleSubmit()}>Chỉnh sửa</Button>
        </div>
        </>
    )
    }

const EditContainer = styled.div`
  background-color: #F5F5F5;
`

const InputChat = styled.textarea`
  flex: 1;
  resize: none;
  border: none;
  outline: none;
  background: transparent;
`

const EmojiContainer = styled.div`
  position: absolute;
  bottom: 70px;
  align-self: flex-start;
`

export default EditMainChat;