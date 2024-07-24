export type Message = {
  _id?: number;
  fullName: string;
  email: string;
  message: string;
  createdAt?: Date;
  isDeleted?: Boolean;
};
export type MessageEmail = {
  user_name: string;
  user_email: string;
  message: string;
};
