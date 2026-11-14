import { IsAlphanumeric, IsInt, IsNotEmpty, IsString, Length, Matches, MaxLength, MinLength } from "class-validator"

export class CreateCvDto {
    
    @IsNotEmpty()
    @IsAlphanumeric()
    @MinLength(3)
    @MaxLength(10)
    name : string

    @IsNotEmpty()
    @IsAlphanumeric()
    @MinLength(3)
    @MaxLength(10)
    firstname : string

    @IsNotEmpty()
    @IsInt()
    age : number 

    @IsNotEmpty()
    @Matches(/^[0-9]{8}$/, { message: 'La CIN doit contenir exactement 8 chiffres.' })
    cin: string;   
    @IsNotEmpty()
    @IsString()
    job  : string
    @IsNotEmpty() 
    @IsString()
    path : string 
    

}
