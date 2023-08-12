import { useRouter } from "next/router";

const Rooms = () => {
  const router = useRouter();
  const roomId = router.query.roomId;
  return <div>Room {roomId}</div>;
};

export default Rooms;
