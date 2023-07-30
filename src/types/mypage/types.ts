import { Dispatch, SetStateAction } from 'react';

// 주문 배열
export interface OrderProps {
  date: string;
  //   image: string;
  productName: string;
  productDescription: string;
  quantity: string;
  price: string;
  status: string;
}

export interface ProfileEditProps {
  nickname: string;
  password: string;
}

export interface ProfileEditComponentProps extends ProfileEditProps {
  passwordConfirm: string;
  setNickname: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setPasswordConfirm: Dispatch<SetStateAction<string>>;
  duplicate: boolean;
}

// coupon
export interface CouponProps {
  index: number;
  code: string;
  title: string;
  validity: string;
}

export interface CouponArrayProps {
  couponId: number;
  endDateTime: string;
  name: string;
  serialNumber: string;
  startDateTime: string;
}
