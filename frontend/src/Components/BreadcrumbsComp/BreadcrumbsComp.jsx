import Breadcrumbs from '@mui/material/Breadcrumbs'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Container } from '..'

export const BreadcrumbsComp = ({ breadcrumb, style = '' }) => {
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
