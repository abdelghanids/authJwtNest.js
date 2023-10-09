import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class OpningApp {
   @Prop()
   name: string;
 
   @Prop()
   discription: string;

   @Prop()
  time: Date;
}
export const OpningAppSchema = SchemaFactory.createForClass(OpningApp);