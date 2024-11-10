import { create } from 'zustand';
import { getUsers } from '../services/users';

interface UserStore {
  users: UserModel[];
  setUsers: (users: UserModel[]) => void;
  addUser: (user: UserModel) => void;
  fetchUsers: () => Promise<void>;
  updateUser: (updatedUser: UserModel) => void;
  deleteUser: (id: number) => void;
  getUserById: (id: number) => UserModel | undefined;  

}

const userStore = create<UserStore>((set,get) => ({
  users: [],

  setUsers: (users) => set(() => ({ users })),
  
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user]
    })),

  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),

  fetchUsers: async () => {
    try {
      const data = await getUsers();
      set({ users: data.users });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },

  getUserById: (id) => {
    return get().users.find((user) => user.id === id);
  },
}));
export default userStore;