import { UserEntity } from 'src/app/entities/user.entity';


export interface AuthStateModel{
    user?: UserEntity;
    token?: string;
    userSignedOut?: boolean;
    error?: Error;
    isLoading?: boolean;
}