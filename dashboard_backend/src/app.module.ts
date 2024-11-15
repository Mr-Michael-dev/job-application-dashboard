import { Module } from '@nestjs/common';
import { ApplicationModule } from "./applications/applications.module"

@Module({
  imports: [ApplicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
