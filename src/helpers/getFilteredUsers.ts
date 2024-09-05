import type { Filter, User } from "../types";

const doesMatch = (fieldValue: string, filterValue?: string): boolean => {
  if (!filterValue) return true;
  return fieldValue.toLowerCase().includes(filterValue.toLowerCase());
};

export const getFilteredUsers = (users: User[], filters: Filter): User[] => {
  return users.filter(user => {
    const matchName = doesMatch(user.name, filters.name);
    const matchUsername = doesMatch(user.username, filters.username);
    const matchEmail = doesMatch(user.email, filters.email);
    const matchPhone = doesMatch(user.phone, filters.phone);

    return matchName && matchUsername && matchEmail && matchPhone;
  });
};
