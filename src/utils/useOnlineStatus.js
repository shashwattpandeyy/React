import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnlineStatus] = useState(true);
  useEffect(() => {

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  return online;
};
export default useOnlineStatus;
