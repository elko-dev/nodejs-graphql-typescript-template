import {IsEmail, IsPhoneNumber, IsString, IsUrl} from 'class-validator';
import {Column, Entity} from 'typeorm';
import {Model} from './model';
import {isEmpty} from "../utils/validation.utils";

@Entity({name: "User_Entity"})
export class UserEntity extends Model {

    @Column({type: 'varchar', name: 'first_name', length: 51})
    @IsString()
    firstName!: string;

    @Column({type: 'varchar', name: 'last_name', nullable: true, length: 51})
    @IsString()
    lastName!: string;

    @Column({type: 'varchar', name: 'email', nullable: false})
    @IsEmail()
    email!: string;

    @Column({type: 'varchar', name: 'phone_number', nullable: false, default: ''})
    @IsPhoneNumber('US')
    phoneNumber!: string;

    @Column({type: 'varchar', name: 'auth_id', nullable: true})
    @IsString()
    authId!: string;

    @Column({type: 'varchar', name: 'profile_photo_url', nullable: true , default: ''})
    @IsUrl()
    profilePhotoUrl!: string;


    public userIsRegistered = (): boolean => {
        return isEmpty(this.authId);
    };

    public getFullName = (): string => {
        return this.firstName + " " + this.lastName;
    };
}
