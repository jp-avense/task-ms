import { Module } from '@nestjs/common';
import { tenantProvider } from './providers/tenant.provider';
import { TenantService } from './tenant.service';

@Module({
  providers: [TenantService, ...tenantProvider],
  exports: [...tenantProvider],
})
export class TenantModule {}
