import RoomCalendar from "@/components/RoomCalendar";
import RoomForm from "@/components/RoomForm";
import RoomImages from "@/components/RoomImages";
import { useRouter } from "next/router";

const Rooms = () => {
  const router = useRouter();
  const roomId = router.query.roomId;

  return (
    <>
      <RoomImages roomId={roomId} />
      <RoomCalendar />
      <RoomForm />
    </>
  );
};

export default Rooms;
