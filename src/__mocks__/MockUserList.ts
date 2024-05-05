import { User } from "../types/User";

export const mockUserList: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    emailAddress: "john.doe@example.com",
  },
  {
    id: 2,
    firstName: "Alice",
    lastName: "Smith",
    emailAddress: "alice.smith@example.com",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    emailAddress: "bob.johnson@example.com",
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Brown",
    emailAddress: "emily.brown@example.com",
  },
  {
    id: 5,
    firstName: "",
    lastName: "",
    emailAddress: "empty@example.com",
  },
];