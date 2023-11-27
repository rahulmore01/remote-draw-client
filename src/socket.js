import { io } from "socket.io-client";
const URL =
  process.env.NODE_ENV === "production"
    ? "https://jscafe-sketchbook-server.onrender.com"
    : // backend is running on 4000
      "http://localhost:4000";
export const socket = io(URL);
