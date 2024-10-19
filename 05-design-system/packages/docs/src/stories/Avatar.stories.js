import { Avatar } from '@ignite-ui/react';
export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/andersondev96.png',
        alt: 'Anderson Fernandes'
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            }
        },
    },
};
export const Primary = {};
export const WithFallback = {
    args: {
        src: undefined,
    }
};
