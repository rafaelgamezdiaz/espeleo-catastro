import { define } from "typeorm-seeding";
import { Membership } from "../../common/membership/entities/membership.entity";

define(Membership, () => {

  const membership = new Membership();
  membership.name = 'probando';
  return membership;
});