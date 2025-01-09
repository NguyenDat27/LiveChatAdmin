import React, { useState } from 'react'
import { Text, Icon, Popover, ActionList, Tooltip } from '@shopify/polaris'
import { MenuVerticalIcon, ReplayIcon } from '@shopify/polaris-icons'

import messages from '@/data/messagesPickleball'
import RecallMessage from '@/components/display/RecallMessage'

const Message = ({ onReply, onEdit }) => {

    const [activePopover, setActivePopover] = useState(null);

    const [deleteIndex, setDeleteIndex] = useState([]);

    const handlePopoverClick = (id) => {
      setActivePopover(activePopover === id ? null : id);
    };

    const handleReply = (message) => {
        const randomFlag = Math.random();
        onReply(message, randomFlag);
    }

    const handleDelete = (index) => {
        setDeleteIndex((prev) => {
            return [...prev, index];
        });
    };

    return (
        <>
        {messages.map((message, index) => (
        <div key={index}>
            {message.role === "user" && (
            <div className="flex items-center gap-1">
                <div className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden">
                    <img
                        className="w-full h-full"
                        src="https://plus.unsplash.com/premium_photo-1664457233849-b79bf17537f5?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                </div>
                <div className="flex flex-col items-end justify-between gap-1 px-3 py-2 max-w-[40%] border border-[#F1F1F2] rounded-lg bg-[#DDE3F0]">
                    <Text variant="bodyXs" as="p">
                        {message.content}
                    </Text>
                    <Text variant="bodyXs" as="span">
                        {message.time}
                    </Text>
                </div>
                <div className="cursor-pointer ml-[-4px]">
                    <div onClick={() => handleReply(message.content)}>
                        <Tooltip content="Trả lời">
                            <Icon source={ReplayIcon} tone="base"/>
                        </Tooltip>
                    </div>
                </div>
            </div>
            )}
            {message.role === "admin" && (
                <>
                    {!deleteIndex.includes(index) && (
                        <div className="flex justify-end items-center w-full">
                            <div className="cursor-pointer ml-[-4px]" onClick={() => handlePopoverClick(index)}>
                                <Popover
                                    active={activePopover === index}
                                    activator={
                                        <Tooltip content="Xem thêm">
                                            <Icon source={MenuVerticalIcon} tone="base" />
                                        </Tooltip>
                                    }
                                    onClose={() => setActivePopover(null)}
                                >
                                    <ActionList
                                        actionRole="menuitem"
                                        items={[
                                            { content: "Sửa", onAction: () => onEdit(message.content, index) },
                                            { content: "Thu hồi", onAction: () => handleDelete(index) }
                                        ]}
                                    />
                                </Popover>
                            </div>
                            <div className="flex flex-col items-end justify-between gap-1 border border-[#F1F1F2] rounded-lg px-3 py-2 max-w-[40%] bg-[#ECD9B8]">
                                <Text variant="bodyXs" as="p">
                                    {message.content}
                                </Text>
                                <Text variant="bodyXs" as="span">
                                    {message.time}
                                </Text>
                            </div>
                        </div>
                    )}
                    {deleteIndex.includes(index) && (
                        <div className="flex justify-end items-center w-full">
                            <RecallMessage time={message.time} />
                        </div>
                    )}
                </>
            )}
        </div>
        ))}
        </>
    )
}

export default Message;
