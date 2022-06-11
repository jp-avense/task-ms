import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RpcException } from '@nestjs/microservices';
import { Connection, connections, createConnection } from 'mongoose';

@Injectable()
export class TenantService {
  private _tenantName: string;

  set tenantName(name: string) {
    this._tenantName = name;
  }

  constructor(private readonly config: ConfigService) {}

  async getConnection(): Promise<Connection> {
    const tenantName = this._tenantName;

    const details = this.config
      .get('databases')
      .find(item => item.name === tenantName);

    if (!details) throw new RpcException(`Tenant ${tenantName} not found`);

    const dbName = `saas_client_${tenantName}`;

    const conn = connections.find(item => item.name == dbName);

    if (!conn) {
      const { host, port } = details;
      return await createConnection(`mongodb://${host}:${port}`, { dbName });
    }

    return conn;
  }
}
