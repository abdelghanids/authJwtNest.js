import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { OpningAppService } from './opning-apps.service';
import { CreateOpningAppDto } from './dto/create-opning-app.dto';
@Controller('OpningApp')
export class OpningAppController {
  constructor(private readonly OpningAppService: OpningAppService) {}
@Post()
  async createOpningApp(
    @Res() response,
    @Body() createOpningAppDto: CreateOpningAppDto,
  ) {
  try {
      const newOpningApp =
        await this.OpningAppService.createOpningApp(createOpningAppDto);
    return response.status(HttpStatus.CREATED).json({
    message: 'OpningApp has been created successfully',
        newOpningApp,
      });
 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    statusCode: 400,
    message: 'Error: OpningApp not created!',
        error: 'Bad Request',
 });
 }
}
@Put('/:id')
async updateOpningApp(@Res() response,@Param('id') OpningAppId: string,
@Body() updateOpningAppDto: UpdateOpningAppDto) {
  try {
   const existingOpningApp = await this.OpningAppService.updateOpningApp(OpningAppId, updateOpningAppDto);
  return response.status(HttpStatus.OK).json({
  message: 'OpningApp has been successfully updated',
  existingOpningApp,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Get()
async getOpningApps(@Res() response) {
try {
  const OpningAppData = await this.OpningAppService.getAllOpningApps();
  return response.status(HttpStatus.OK).json({
  message: 'All OpningApps data found successfully',OpningAppData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}
@Get('/:id')
async getOpningApp(@Res() response, @Param('id') OpningAppId: string) {
 try {
    const existingOpningApp = await
this.OpningAppService.getOpningApp(OpningAppId);
    return response.status(HttpStatus.OK).json({
    message: 'OpningApp found successfully',existingOpningApp,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
@Delete('/:id')
async deleteOpningApp(@Res() response, @Param('id') OpningAppId: string)
{
  try {
    const deletedOpningApp = await this.OpningAppService.deleteOpningApp(OpningAppId);
    return response.status(HttpStatus.OK).json({
    message: 'OpningApp deleted successfully',
    deletedOpningApp,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }
}