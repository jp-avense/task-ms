import {
  Catch,
  ArgumentsHost,
  HttpException,
  RpcExceptionFilter,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';

@Catch(HttpException)
export class ValidationExceptionFilter
  implements RpcExceptionFilter<HttpException>
{
  catch(exception: HttpException, host: ArgumentsHost): Observable<any> {
    const response = exception.getResponse();
    return throwError(() => response);
  }
}
