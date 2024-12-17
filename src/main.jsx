import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";

import router from "./routes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* <StrictMode> */}
      {/* <App /> */}
    <RouterProvider router={router} />
    {/* </StrictMode> */}
  </QueryClientProvider>
);
