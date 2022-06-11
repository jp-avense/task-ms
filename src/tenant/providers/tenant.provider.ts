import { TenantService } from '../tenant.service';
import { Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { TenantContext } from '../dto/tenant.dto';
import { RequestContext } from '@nestjs/microservices';

export const tenantProvider = [
  {
    provide: 'TENANT_CONTEXT',
    scope: Scope.REQUEST,
    inject: [REQUEST],
    useFactory: (req: RequestContext): TenantContext => {
      const { tenantName } = req.data;
      return new TenantContext(tenantName);
    },
  },
  {
    provide: 'TENANT_CONNECTION',
    useFactory: async (context: TenantContext, connection: TenantService) => {
      connection.tenantName = context.tenantName;

      return await connection.getConnection();
    },
    inject: ['TENANT_CONTEXT', TenantService],
  },
];
