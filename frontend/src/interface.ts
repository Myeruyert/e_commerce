export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  rePassword: string;
}

export interface UserContextType {
  user: IUser;
  token: string;
  setToken: (token: string) => void;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  fetchUserData?: () => void;
  refetch?: any;
  setRefetch?: any;
  handleSignUp: () => Promise<void>;
  handleSignIn: () => Promise<void>;
}

export interface ProfileContextType {
  isLoading: boolean;
  enterEmail: string;
  step: number;
  countDown: number;
  otpValue: string;
  setIsLoading: (isLoading: boolean) => void;
  setEnterEmail: (enterEmail: string) => void;
  setStep: (step: number) => void;
  setCountDown: (countDown: number) => void;
  setOtpValue: (otpValue: string) => void;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSend: () => Promise<void>;
  handleConfirmOtp: (otpValue: string) => Promise<void>;
  handleResendOtp: () => void;
}

export interface IProduct {
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNewProduct: boolean;
  quantity: number;
  discount: number;
  category: string;
  comment?: [
    {
      name: string;
      rating: number;
      comment: string;
    }
  ];
}

export interface ProductContextType {
  product: IProduct;
  fetchProductData: () => void;
}
