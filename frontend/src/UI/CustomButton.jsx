import { Button } from '@nextui-org/react'

const CustomButton = ({ children, type }) => {
	return (
		<Button className='dark w-4' type={type}>
			{children}
		</Button>
	)
}

export default CustomButton
