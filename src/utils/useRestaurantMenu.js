import { useEffect, useState } from "react"
import { RESTAURANT_INFO_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const fetchMenu = async () => {
      const data = await fetch(RESTAURANT_INFO_URL + resId);
      const res = await data.json();
      setResInfo(res.data);
    }
    useEffect(() => {
      fetchMenu();
    }, []);

    return resInfo;

 }

export default useRestaurantMenu; 