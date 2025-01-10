import { Divider, Icon, InlineStack, Tag, Text } from '@shopify/polaris';
import {
    DeleteIcon,
    InfoIcon,
    ArrowLeftIcon
  } from "@shopify/polaris-icons";
import styled from 'styled-components';
import { useUser } from '@/stores/user';
import profile from '@/data/profile';

export default function SecondarySideBar({ onSidebar2Click }) {

  const [userSelected] = useUser.userSelected();
  return (
    <ProfileItem className="sidebar2">
      <div className="back-icon-profile absolute top-0 left-0 p-3" onClick={onSidebar2Click}>
        <Icon source={ArrowLeftIcon} />
      </div>
      <div className="ProfileItem_head">
        <div className="ProfileItem_avatar">
          <img
            src={userSelected.srcImage ? userSelected.srcImage : profile.pickleball.srcImage}
            alt=""
          />
        </div>
        <Text variant="heading2xl" as="h3">
          {userSelected.name ? userSelected.name : profile.pickleball.name}
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
  .back-icon-profile {
    display: none;
    cursor: pointer;
  }
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
  @media (max-width: 1000px) {
    .back-icon-profile {
      display: block;
    } 
  }
`;
