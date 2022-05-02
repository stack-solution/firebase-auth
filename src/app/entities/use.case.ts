import { RequestModel } from "./api-interfaces";
import { ResponseEntity } from "./response.entities";

export interface UseCase<R>{
    execute(params?: RequestModel): Promise<ResponseEntity<R> | Error>
}