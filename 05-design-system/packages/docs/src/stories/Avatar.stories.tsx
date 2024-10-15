import { Avatar, AvatarProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Data display/Avatar',
	component: Avatar,

	args: {
		src: 'https://github.com/andersondev96.png',
		alt: 'Anderson Fernandes'
	},
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	}
}
