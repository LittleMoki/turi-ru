import Breadcrumbs from '@mui/material/Breadcrumbs'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Container } from '..'
import {usePathname} from "next/navigation";

export const BreadcrumbsComp = ({ breadcrumb, style = '' }) => {
	const path = usePathname().split('/').splice(1, 20)
	console.log(path)
	return (
		<Container>
			<div className={`flex gap-1 items-center flex-wrap py-5 ${style}`}>
				<Breadcrumbs
					style={{ color: 'black' }}
					separator={<MdKeyboardArrowRight />}
					aria-label='breadcrumb'
				>
					{breadcrumb}
				</Breadcrumbs>
			</div>
		</Container>
	)
}
