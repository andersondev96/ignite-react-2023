import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text, TextInput } from '@ignite-ui/react';
export default {
    title: 'Form/TextInput',
    component: TextInput,
    args: {},
    decorators: [
        (Story) => {
            return (_jsxs(Box, { as: "label", css: { display: 'flex', flexDirection: 'column', gap: '$2' }, children: [_jsx(Text, { size: "sm", children: "E-mail address" }), Story()] }));
        }
    ],
};
export const Primary = {
    args: {
        placeholder: 'Type your name'
    }
};
export const WithPrefix = {
    args: {
        prefix: 'cal.com/'
    }
};
export const Disabled = {
    args: {
        disabled: true,
    }
};
