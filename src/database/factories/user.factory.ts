import { define } from "typeorm-seeding";
import { User } from "../../modules/users/entities/user.entity";

define(User, () => {

  const user = new User();
 // user.email = 'test@mail.com';
  return user;
});