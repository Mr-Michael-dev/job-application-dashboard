import { Controller, Get } from '@nestjs/common';
import { ApplicationService } from './applications.service';
import { Application } from './applications.interface';

@Controller('applications')
export class ApplicationController{
    // application controller class to handle http requests
  constructor(private readonly applicationService: ApplicationService) {}

  @Get()
  // method to get all application data
  getApplications(): Application[] {
    return this.applicationService.getApplications();
  }

  @Get('stats')
  // method to get application statistics
    getApplicationStats(): Record<string, number> {
      return this.applicationService.getApplicationStats();
    }
}
