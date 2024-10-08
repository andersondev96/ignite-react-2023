import { Button, ButtonProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Form/Button',
	component: Button,

	args: {
		children: 'Enviar',
		
	}
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj = {
	args: {
		size: 'big',
	}
}
