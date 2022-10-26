export const UserRoles = [
  "procuring_entity",
  "procuring_entity_manager",
  "procuring_entity_head",
] as const;

export type UserRole = typeof UserRoles[number];

function isUserRole(value: string): value is UserRole {
  return UserRoles.includes(value as UserRole);
}

enum USER_ROLES {
  PROCURING_ENTITY = "procuring_entity",
  PROCURING_ENTITY_MANAGER = "procuring_entity_manager",
  PROCURING_ENTITY_HEAD = "procuring_entity_head",
}

export default USER_ROLES;
