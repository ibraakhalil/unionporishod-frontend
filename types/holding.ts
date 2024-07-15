export interface UserInfoType {
  id: string;
  name: string;
  holdingNo: string | number;
  guardianName: string;
  motherName: string;
  nid: string | number;
  mobile: string | number;
  yearlyIncome: string | number;
  religion: string;
  occupation: string;
  gender: string;
  ward: string | number;
  totalMember: string | number;
  maleMember: string | number;
  femaleMember: string | number;
  maleChildren: string | number;
  femaleChildren: string | number;
  multibuilding: string | number;
  building: string | number;
  halfbuilding: string | number;
  rawhouse: string | number;
  village: string;
  postoffice: string;
  thana: string;
  district: string;
  tax: string | number;
  yearlyincome: string | number;
  comment: string;
}

export interface TransactionType {
  id: string;
  holderName: string;
  taxHolderId: string;
  fiscalYear: string;
  taxAmount: number;
  dueTax: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}
