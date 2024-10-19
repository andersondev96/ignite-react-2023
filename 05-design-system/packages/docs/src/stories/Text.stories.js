import { Text } from '@ignite-ui/react';
export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur molestias architecto quod harum aspernatur labore, magnam neque fugit rem debitis ex fuga deserunt repudiandae at. Culpa perferendis voluptatem expedita hic.'
    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio',
            }
        },
    }
};
export const Primary = {};
export const Customtag = {
    args: {
        children: 'Strong text',
        as: 'strong',
    }
};
