import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateOpningAppDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;
   
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly discription: string;
    @IsNumber()
    @IsNotEmpty()
    readonly time: Date;
}