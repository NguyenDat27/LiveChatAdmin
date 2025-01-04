import { Icon } from "@shopify/polaris";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import { NotificationIcon } from "@shopify/polaris-icons";

export default function Header() {
  const notificationCount = 20;
  const user = {
    name: "John Doe",
  };
  return (
    <div className="w-full p-2 bg-background flex justify-between items-center">
      <div className="border-r-2 border-inactive pr-5 w-1/12 flex items-center content-center">
        <h1 className="text-xl font-bold text-foreground text-center">Live Chat</h1>
      </div>
      <div className="w-1/3 flex-1 flex justify-center">
        <SearchBar />
      </div>
      <div className="flex items-center gap-5 w-1/12 ">
        <div className="border-2 border-skeleton p-1 rounded-full relative">
          <Icon source={NotificationIcon} tone="subdued" />
          <span
            className="absolute top-[-6px] bg-primary text-white text-xs rounded-full px-1 left-[18px]
        "
          >
            {notificationCount > 9 ? "9+" : notificationCount}
          </span>
        </div>
        <Profile user={user}/>
      </div>
    </div>
  );
}
