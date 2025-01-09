import React from 'react'
import { Text } from '@shopify/polaris'

const RecallMessage = ({ time }) => {
  return (
    <div className=" flex flex-col items-end justify-between gap-1 border border-[#F1F1F2] rounded-lg  px-3 py-2 max-w-[40%] bg-[#ECD9B8]">
        <Text variant="bodyXs" as="p">
            Tin nhắn đã được thu hồi
        </Text>
        <Text variant="bodyXs" as="span">
            {time}
        </Text>
    </div>
  )
}

export default RecallMessage
