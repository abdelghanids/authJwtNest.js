import { Document } from 'mongoose';
export interface IOpningApp extends Document{
  readonly name: string;
  readonly discription: string;
  readonly time: Date;
}