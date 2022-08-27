export interface AppMenusInterface {
    title: string;
    url: string;
    icon: string;
}
export const AppMenus: AppMenusInterface[] = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Cart', url: '/folder/Outbox', icon: 'cart' },
    { title: 'Profile', url: '/folder/Favorites', icon: 'person' },
    { title: 'Wishlist', url: '/folder/Archived', icon: 'heart' },
    { title: 'Orders', url: '/folder/Trash', icon: 'bag-check' },
    { title: 'UI', url: '/folder/Trash', icon: 'build' },
];