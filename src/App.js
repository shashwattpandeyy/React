import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import AuthInitialize from "./AuthInitialize";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone"
import utc from 'dayjs/plugin/utc'
dayjs.extend(timezone);
dayjs.extend(utc)



const App = () => {
  console.log("APP RENDERED");
  
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Provider store={appStore}>
          <AuthInitialize />
        </Provider>
      </QueryClientProvider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
