import { ActionList, Avatar, Popover } from "@shopify/polaris";
import { useState } from "react";

export default function Profile({user}) {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive((active) => !active);
    const handleItemClick = (item) => {
      toggleActive();
    };
    const activator = (
      <div onClick={toggleActive} className="flex items-center cursor-pointer gap-2">
        <Avatar customer name={user.name} />
        <p className="text-sm">{user.name}</p>
      </div>
    );
  return (
    <Popover active={active} activator={activator} onClose={toggleActive}>
    <ActionList
      items={items.map((item) => ({
        ...item,
        onAction: () => handleItemClick(item),
      }))}
    />
  </Popover>
  )
}
const items = [
    {
      content: "Profile",
    },
    {
      content: "Settings",
    },
    {
      content: "Logout",
    }
  ];