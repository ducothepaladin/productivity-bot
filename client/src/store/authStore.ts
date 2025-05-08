import type { BaseUser } from '@/type/Auth';
import {create} from 'zustand';


type AuthStore = {
    accessToken: string | null;
    user: BaseUser | null;
    setAccessToken: (token: string) => void;
    logout: () => void;
}


const useAuthStore = create<AuthStore>((set) => ({
    accessToken: localStorage.getItem('accessToken') || null,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
    setAccessToken: (token: string) => {
        set({ accessToken: token});
        localStorage.setItem('accessToken', token);
    },
    setUser: (user: BaseUser) => {
        set({ user });
        localStorage.setItem('user', JSON.stringify(user));
    },
    logout: () => { 
        set({ accessToken: null, user: null});
        localStorage.removeItem('accessToken');
    },
}))

export default useAuthStore;