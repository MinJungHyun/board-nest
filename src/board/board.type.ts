export type BoardList = {
  sno: number;
  subject: string;
  contents: string;
  userNo: number;
  name: string;
  param: object;
  createdAt: Date;
  updatedAt: Date;
};
export type BoardParam = {
  page: number;
};
