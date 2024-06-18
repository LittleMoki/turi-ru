import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/react'
import { api } from '../../Api/api'
import { VerticalDotsIcon } from './VerticalDotsIcon'

const DropDownDoted = ({ id, params, onDelete }) => {
	const DeleteData = async id => {
		try {
			await api.delete(`${params.slug}/${id}`)
			onDelete(id) // Call this after successful API call
		} catch (error) {
			console.error('There was an error deleting the item:', error)
		}
	}

	return (
		<div className='relative flex justify-end items-center gap-2'>
			<Dropdown className='dark'>
				<DropdownTrigger>
					<Button isIconOnly size='sm' variant='light'>
						<VerticalDotsIcon className='text-default-300' />
					</Button>
				</DropdownTrigger>
				<DropdownMenu>
					<DropdownItem>View</DropdownItem>
					<DropdownItem>Edit</DropdownItem>
					<DropdownItem onClick={() => DeleteData(id)}>Delete</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	)
}

export default DropDownDoted
