import { define } from 'typeorm-seeding';
import { Parameter } from '../../modules/parameters/entity/parameters.entity';

define(Parameter, () => {
  return new Parameter();
});
