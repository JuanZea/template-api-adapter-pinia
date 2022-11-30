import { useStore } from '@/stores/main';
import { useRouter } from 'vue-router';

export const start = async () => {
    console.log('[app] start');
    const store = useStore();
    console.log('store', store);
    const { currentRoute, isReady } = useRouter();
    await isReady();
    console.log('currentRoute', currentRoute.value);
};
