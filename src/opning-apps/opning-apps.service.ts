import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IOpningApp } from './interface/opningApp.interface';
import { CreateOpningAppDto } from './dto/create-opning-app.dto';
import { Model } from 'mongoose';
import { UpdateOpningAppDto } from './dto/update-opning-app.dto';

@Injectable()
export class OpningAppService {
  constructor(
    @InjectModel('OpningApp') private OpningAppModel: Model<IOpningApp>,
  ) {}
  async createOpningApp(
    createOpningAppDto: CreateOpningAppDto,
  ): Promise<IOpningApp> {
   const newOpningApp = await new this.OpningAppModel(createOpningAppDto);
   return newOpningApp.save();
}
  async updateOpningApp(
    OpningAppId: string,
    updateOpningAppDto: UpdateOpningAppDto,
  ): Promise<IOpningApp> {
    const existingOpningApp = await this.OpningAppModel.findByIdAndUpdate(
      OpningAppId,
      updateOpningAppDto,
      { new: true },
    );
   if (!existingOpningApp) {
     throw new NotFoundException(`OpningApp #${OpningAppId} not found`);
   }
   return existingOpningApp;
}
async getAllOpningApps(): Promise<IOpningApp[]> {
    const OpningAppData = await this.OpningAppModel.find();
    if (!OpningAppData || OpningAppData.length == 0) {
        throw new NotFoundException('OpningApps data not found!');
    }
    return OpningAppData;
}
async getOpningApp(OpningAppId: string): Promise<IOpningApp> {
   const existingOpningApp = await     this.OpningAppModel.findById(OpningAppId).exec();
   if (!existingOpningApp) {
    throw new NotFoundException(`OpningApp #${OpningAppId} not found`);
   }
   return existingOpningApp;
}
async deleteOpningApp(OpningAppId: string): Promise<IOpningApp> {
    const deletedOpningApp = await this.OpningAppModel.findByIdAndDelete(OpningAppId);
   if (!deletedOpningApp) {
     throw new NotFoundException(`OpningApp #${OpningAppId} not found`);
   }
   return deletedOpningApp;
}
}