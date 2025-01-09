import React from 'react'
import { Text, Icon } from '@shopify/polaris'
import { PinIcon } from '@shopify/polaris-icons'

const HeaderMainChat = () => {
    return (
       <>
            <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                    src="https://plus.unsplash.com/premium_photo-1664457233849-b79bf17537f5?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-ful h-full"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <Text variant="headingXs" as="h6">
                        Pickleball
                    </Text>
                    <div className="flex items-center gap-[2px]">
                    <div className="w-2 h-2 rounded-full bg-[#23A330]"></div>
                        <Text variant="bodyXs" tone="success" as="span">
                            Online
                        </Text>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <Icon source={PinIcon} tone="base" />
            </div>
        </>
    )
}

export default HeaderMainChat
