export const LocalStorageService = {
  exists: typeof window !== 'undefined',

  get<T>(key: string, initialValue: T) {
    if (this.exists) {
      const state = localStorage.getItem(key);
      return state ? JSON.parse(state) : initialValue;
    }
    return initialValue;
  },

  set<T>(key: string, data: T) {
    if (this.exists) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  },
};
