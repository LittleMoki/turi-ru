import { Button } from '@nextui-org/react'

const CustomButton = ({ children, type = 'submit' ,fn,className }) => {
	return (
		<Button className={`dark w-[150px] ${className}`} onClick={fn} type={type}>
			{children}
		</Button>
	)
}

export default CustomButton
