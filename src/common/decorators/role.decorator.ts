import { SetMetadata } from '@nestjs/common';
import { UserRoleEnum } from 'src/users/common/enums/user-role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRoleEnum[]) =>
  SetMetadata(ROLES_KEY, roles);