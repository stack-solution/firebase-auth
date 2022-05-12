import { UserModel } from "./api-interfaces";

export class UserEntity implements UserModel { 
  readonly _id?: string;
  readonly name?: string | null;
  readonly email?: string;
  readonly phoneNumber?: string;
  readonly memberSince?: Date;
  readonly photoUrl?: string;
  constructor(obj: Partial<UserEntity>) {
    Object.assign(this, obj);
  }
}