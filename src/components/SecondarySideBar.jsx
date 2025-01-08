import { Divider, Icon, InlineStack, Tag, Text } from '@shopify/polaris';
import {
    DeleteIcon,
    InfoIcon
  } from "@shopify/polaris-icons";
import styled from 'styled-components';

export default function SecondarySideBar() {
  return (
    <ProfileItem>
              <div className="ProfileItem_head">
                <div className="ProfileItem_avatar">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664457233849-b79bf17537f5?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <Text variant="heading2xl" as="h3">
                  Pickleball
                </Text>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-1">
                    <Icon source={DeleteIcon} tone="base" />
                    <Text variant="bodyXs" as="span">
                      Delete
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Icon source={InfoIcon} tone="base" />
                    <Text variant="bodyXs" as="span">
                      Complain
                    </Text>
                  </div>
                </div>
              </div>
              <Divider borderColor="border" />
              <div className="flex flex-col gap-5 px-3 py-2">
                <Text variant="headingMd" as="h5">
                  Skills
                </Text>
                <InlineStack gap="400" wrap={true}>
                  <Tag>ab testing</Tag>
                  <Tag>animation</Tag>
                  <Tag>UI</Tag>
                  <Tag>UX</Tag>
                  <Tag>Web design</Tag>
                  <Tag>analytics</Tag>
                  <Tag>Illustration</Tag>
                </InlineStack>
              </div>
            </ProfileItem>
  )
}


const ProfileItem = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
  .ProfileItem_head {
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  .ProfileItem_avatar {
    width: 72px;
    height: 72px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid gray;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
