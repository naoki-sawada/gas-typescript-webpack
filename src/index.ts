import Echo from "./Echo";

global.main = () => {
  const echo = new Echo();
  echo.print("world.");
};
