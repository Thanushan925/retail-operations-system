import { permissions } from "./permissions";

export function hasPermission(
  role: string,
  permission: string
): boolean {
  const rolePermissions =
    permissions[role as keyof typeof permissions];

  if (!rolePermissions) {
    return false;
  }

  return (rolePermissions as readonly string[]).includes(permission);
}