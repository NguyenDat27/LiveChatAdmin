import React from 'react'
import { Text, Icon } from '@shopify/polaris'
import { PinIcon } from '@shopify/polaris-icons'
import { useUser } from '@/stores/user'
import profile from '@/data/profile'

const HeaderMainChat = () => {

    const [userSelected] = useUser.userSelected();

    return (
       <>
            <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                    src={userSelected.srcImage ? userSelected.srcImage : profile.pickleball.srcImage}
                    alt=""
                    className="w-ful h-full"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <Text variant="headingXs" as="h6">
                        {userSelected.name ? userSelected.name : profile.pickleball.name}
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
