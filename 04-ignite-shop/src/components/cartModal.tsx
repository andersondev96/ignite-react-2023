import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { ButtonContainer, CloseButton, Content, FooterContainer, ImageContainer, ItemContainer, ItemsContainer, Overlay, ProductsContainer } from '../styles/pages/cartModal'

import camiseta1 from "../assets/camisetas/1.png"

export function CartModal() {
	return (
		<Dialog.Portal>
			<Overlay />

			<Content>
				<Dialog.Title>Carrinho de compras</Dialog.Title>

				<CloseButton>
					<X size={24} />
				</CloseButton>

				<ProductsContainer>
					<ItemsContainer>
						<ItemContainer>
							<ImageContainer>
								<Image src={camiseta1} alt='' width={94.79} />
							</ImageContainer>
							<div>
								<span>Camiseta Beyond the Limits</span>
								<strong>R$ 79,90</strong>
								<a>Remover</a>
							</div>
						</ItemContainer>

						<ItemContainer>
							<ImageContainer>
								<Image src={camiseta1} alt='' width={94.79} />
							</ImageContainer>
							<div>
								<span>Camiseta Beyond the Limits</span>
								<strong>R$ 79,90</strong>
								<a>Remover</a>
							</div>
						</ItemContainer>

						<ItemContainer>
							<ImageContainer>
								<Image src={camiseta1} alt='' width={94.79} />
							</ImageContainer>
							<div>
								<span>Camiseta Beyond the Limits</span>
								<strong>R$ 79,90</strong>
								<a>Remover</a>
							</div>
						</ItemContainer>
					</ItemsContainer>

					<FooterContainer>
							<div>
								<span>Quantidade:</span>
								<p>3 itens</p>
							</div>

							<div>
								<strong>Valor total:</strong>
								<p>R$ 270,00</p>
							</div>

						<ButtonContainer>Finalizar compra</ButtonContainer>
					</FooterContainer>
				</ProductsContainer>
			</Content>
		</Dialog.Portal>
	)
}