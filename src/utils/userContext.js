import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Default",
});

export default userContext;