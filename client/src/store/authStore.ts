import {create} from 'zustand';


type AuthStore = {
    accessToken: string | null;
    setAccessToken: (token: string) => void;
    logout: () => void;
}


const useAuthStore = create<AuthStore>((set) => ({
    accessToken: localStorage.getItem('accessToken') || null,
    setAccessToken: (token: string) => {
        set({ accessToken: token});
        localStorage.setItem('accessToken', token);
    },
    logout: () => { 
        set({ accessToken: null});
        localStorage.removeItem('accessToken');
    },
}));

export const getAccessToken = () => useAuthStore.getState().accessToken;

export default useAuthStore;