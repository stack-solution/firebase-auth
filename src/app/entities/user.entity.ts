import { UserModel } from "./api-interfaces";

export class UserEntity implements UserModel { 
  readonly _id?: string;
  readonly name?: string | null;
  readonly email?: string;
  readonly photoUrl?: string;
  readonly memberSince?: Date;
  readonly currentBalance?: number;
  readonly totalDebts?: number;
  readonly totalEvents?: number;
  constructor(obj: Partial<UserEntity>) {
    Object.assign(this, obj);
  }
}