import { UserEntity } from 'src/app/entities/user.entity';


export interface AuthStateModel{
    user?: UserEntity;
    token?: string;
    userSignedIn?: boolean;
    error?: Error;
    isLoading?: boolean;
}