import React, { useState } from 'react'
import { Text, Icon, Popover, ActionList, Tooltip } from '@shopify/polaris'
import { MenuVerticalIcon, ReplayIcon } from '@shopify/polaris-icons'

import profile from '@/data/profile'
import RecallMessage from '@/components/display/RecallMessage'
import { useUser } from '@/stores/user'

const Message = ({ onReply, onEdit }) => {

    const [activePopover, setActivePopover] = useState(null);
    const [userSelected] = useUser.userSelected();

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

    const messages = userSelected.message ? userSelected.message : profile.pickleball.message;

    return (
        <>
        {messages?.map((message, index) => (
        <div key={index}>
            {message.role === "user" && (
            <div className="flex items-center gap-1">
                <div className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden">
                    <img
                        className="w-full h-full"
                        src={userSelected.srcImage ? userSelected.srcImage : profile.pickleball.srcImage}
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
