import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Widget } from '@models/widget.entity';

@Crud({
  model: {
    type: Widget,
  },
})
@Controller('interceptor')
export class InterceptorController {}
