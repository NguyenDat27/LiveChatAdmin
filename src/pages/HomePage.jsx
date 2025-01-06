import Messages from "@/components/Messages";

export default function HomePage() {
  const items = [
    {
      id: "100",
      name: "Mae Jemison",
      location: "Decatur, USA",
    },
    {
      id: "200",
      name: "Ellen Ochoa",
      location: "Los Angeles, USA",
    },
  ];
  return (
    <div className="w-full h-full flex">
      <div className="w-1/5">
        <Messages items={items}/>
      </div>
      <div className="flex-1 border-danger border-2"></div>
      <div className="w-1/5"></div>
    </div>
  );
}
