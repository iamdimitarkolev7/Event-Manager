import cookieParser from "./cookies";

const cookies = cookieParser();
const isLoggedIn = !!cookies['x-auth-token'];

export default isLoggedIn;