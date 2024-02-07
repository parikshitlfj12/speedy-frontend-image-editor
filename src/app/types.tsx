type SignupData = {
  username: string;
  password: string;
};

type TextPosition = {
  x: number;
  y: number;
};

type MenuItems = {
  id: string;
  name: string;
  onClick: () => void;
  isUserLoggedIn: boolean;
};
