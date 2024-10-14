import { Text, TextProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Typography/Text',
	component: Text,

	args: {
		children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur molestias architecto quod harum aspernatur labore, magnam neque fugit rem debitis ex fuga deserunt repudiandae at. Culpa perferendis voluptatem expedita hic.'
	},
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Customtag: StoryObj<TextProps> = {
	args: {
		children: 'Strong text',
		as: 'strong',
	}
}