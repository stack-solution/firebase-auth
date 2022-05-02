import { ResponseModel } from "./api-interfaces";

export class ResponseEntity<T> implements ResponseModel<T>{
    readonly data?: T;
    readonly error?: Error;
    constructor(obj?: Partial<ResponseEntity<T>>) {
      Object.assign(this, obj);
    }
}