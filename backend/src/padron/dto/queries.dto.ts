import { IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

export class QueryDto {

  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  cursor?: string;

}