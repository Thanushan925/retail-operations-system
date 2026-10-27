export const permissions = {
  Admin: [
    "view_inventory",
    "add_products",
    "edit_products",
    "delete_products",
    "adjust_inventory",
    "create_transfers",
    "approve_transfers",
    "view_reports",
    "manage_users",
  ],

  "Store Manager": [
    "view_inventory",
    "adjust_inventory",
    "create_transfers",
    "approve_transfers",
    "view_reports",
  ],

  Employee: [
    "view_inventory",
    "adjust_inventory",
  ],

  Analyst: [
    "view_inventory",
    "view_reports",
  ],
} as const;