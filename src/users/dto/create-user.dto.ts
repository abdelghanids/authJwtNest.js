import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: 'this required properities',
  })
  username: string;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: 'this required properities',
  })
  email: string; // Add this line
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: 'this required properities',
  })
  password: string; 

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: 'this required properities',
  })
  role: string; 
 
}
