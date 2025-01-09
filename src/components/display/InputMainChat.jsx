import React, { useEffect, useState, useRef } from 'react'
import { Button, Icon, Text } from '@shopify/polaris'
import { ImageIcon, ReplayIcon, SendIcon, SmileyHappyIcon, XIcon } from '@shopify/polaris-icons'
import styled from 'styled-components'
import EmojiPicker from '@/components/display/EmojiPicker'
import ImagePicker from '@/components/display/ImagePicker'
import { truncated } from '@/utils/text'

const InputMainChat = ({ message, flag, onSubmit }) => {
  const [checkVisible, setCheckVisible] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputString, setInputString] = useState('')

  const [showImagePicker, setShowImagePicker] = useState(false);
  const [imageList, setImageList] = useState([]);

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (message && flag !== null) {
      setCheckVisible(true)
    }
  }, [message, flag])

  useEffect(() => {
    if (imageList.length > 0) {
      setShowImagePicker(true);
    } else {
      setShowImagePicker(false);
    }
  }, [imageList]);

  const handleClose = () => {
    setCheckVisible(pre => !pre)
  }

  const handleSubmit = () => {
    console.log("text: ", inputString);
    console.log("image:", imageList);
    onSubmit();
  }

  const onEmojiClick = (EmojiClickData) => {
    setInputString(prev => prev + EmojiClickData.emoji);
    setShowEmojiPicker(false);
  };

  const handleCloseEmoji = () => {
    setShowEmojiPicker(pre => !pre);
  }

  const handlePasteImage = (event) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;
    const items = clipboardData.items;

    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
        const file = items[i].getAsFile();
        const reader = new FileReader();
        reader.onload = function(event) {
            setImageList((prevList) => [...prevList, event.target.result]);
        };
        reader.readAsDataURL(file);
        } else {
        const text = clipboardData.getData("text");
        document.execCommand("insertText", false, text);
        }
    }
  }

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    if (imageList.length + files.length > 10) {
      alert("Bạn chỉ có thể upload tối đa 10 ảnh !!!");
      return;
    }

    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            setImageList((prevList) => [...prevList, event.target.result]);
        };
        reader.readAsDataURL(file);
    });
  }

  const handleImageClick = () => {
    fileInputRef.current.click();
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
    }
  };

  return (
    <>
      <ReplyContainer $isVisible={checkVisible} className="flex items-center justify-between w-full px-3 py-2 rounded-tr-xl rounded-tl-xl border border-[#E1E1E1]">
        <div className="flex items-center gap-2">
          <Icon source={ReplayIcon} />
          <div className="flex flex-col">
            <Text as="h3" variant="headingSm">
              Trả lời
            </Text>
            <Text as="h5" variant="bodyXs">
              {truncated(message, 50)}
            </Text>
          </div>
        </div>
        <div className="cursor-pointer" onClick={handleClose}>
          <Icon source={XIcon} tone="base" />
        </div>
      </ReplyContainer>
      <EmojiContainer>
        {showEmojiPicker && <EmojiPicker onEmojiClick={(EmojiData) => onEmojiClick(EmojiData)}/>}
      </EmojiContainer>
      <ImageContainer>
        {showImagePicker && <ImagePicker selectedImages={imageList} onRemoveImage={(index) => setImageList(imageList.filter((_, i) => i !== index))} />}
      </ImageContainer>
      <InputContainer $isVisible={checkVisible} className="flex items-center justify-between py-2 px-3 gap-2 bg-[#DBEBF4] w-full">
        <Button icon={SmileyHappyIcon} onClick={handleCloseEmoji}/>
        <InputChat 
          className="input" 
          placeholder="Nhập gì đó ..." 
          rows="1" 
          value={inputString}
          onPaste={(e) => handlePasteImage(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => setInputString(e.target.value)}
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = `${Math.min(e.target.scrollHeight, 3 * 20)}px`;
          }}
        />
        <input className='hidden'
          type="file"
          accept="image/*"
          multiple
          ref={fileInputRef}
          onChange={(event) => handleFileChange(event)}
        />
        <Button icon={ImageIcon} variant="tertiary" onClick={() => handleImageClick(fileInputRef)}/>
        <Button icon={SendIcon} onClick={() => handleSubmit()}>Gửi</Button>
      </InputContainer>
    </>
  )
}

const ReplyContainer = styled.div`
  background-color: #F5F5F5;
  display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
`

const InputContainer = styled.div`
  border-radius: ${(props) => (props.$isVisible ? '0 0 10px 10px' : '10px')};
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

const ImageContainer = styled.div`
  position: absolute;
  bottom: 70px;
  right: 10px;
  align-self: flex-end;
`

export default InputMainChat