import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback'
				/>
				<link
					rel='stylesheet'
					href='/plugins/fontawesome-free/css/all.min.css'
				/>
				<link
					rel='stylesheet'
					href='/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
				/>
				<link
					rel='stylesheet'
					href='/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
				/>
				<link
					rel='stylesheet'
					href='/plugins/summernote/summernote-bs4.min.css'
				/>
				<link rel='stylesheet' href='/plugins/codemirror/codemirror.css' />
				<link rel='stylesheet' href='/plugins/codemirror/theme/monokai.css' />
				<link
					rel='stylesheet'
					href='/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css'
				/>
				<link
					rel='stylesheet'
					href='/plugins/datatables-responsive/css/responsive.bootstrap4.min.css'
				/>
				<link
					rel='stylesheet'
					href='/plugins/datatables-buttons/css/buttons.bootstrap4.min.css'
				/>
				<link
					rel='stylesheet'
					href='/plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css'
				/>
				<link rel='stylesheet' href='/plugins/select2/css/select2.min.css' />
				<link rel='stylesheet' href='/plugins/toastr/toastr.min.css' />

				<link
					rel='stylesheet'
					href='/plugins/daterangepicker/daterangepicker.css'
				/>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css"></link>
			</head>
			<body
				className={`${montserrat.className} sidebar-mini layout-fixed layout-navbar-fixed dark-mode sidebar-collapse`}
			>
				{children}

				<script
					src='https://code.jquery.com/jquery-3.6.0.min.js'
					integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4='
					crossOrigin='anonymous'
				></script>
				<script src='/plugins/bootstrap/js/bootstrap.bundle.min.js'></script>
				<script
					type='text/javascript'
					charSet='utf8'
					src='https://cdn.datatables.net/1.11.3/js/jquery.dataTables.js'
				></script>
				<script src='/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js'></script>
				<script src='/plugins/datatables-responsive/js/dataTables.responsive.min.js'></script>
				<script src='/plugins/datatables-responsive/js/responsive.bootstrap4.min.js'></script>
				<script src='/plugins/datatables-buttons/js/dataTables.buttons.min.js'></script>
				<script src='/plugins/datatables-buttons/js/buttons.bootstrap4.min.js'></script>
				<script src='/plugins/jszip/jszip.min.js'></script>
				<script src='/plugins/pdfmake/pdfmake.min.js'></script>
				<script src='/plugins/pdfmake/vfs_fonts.js'></script>
				<script src='/plugins/datatables-buttons/js/buttons.html5.min.js'></script>
				<script src='/plugins/datatables-buttons/js/buttons.print.min.js'></script>
				<script src='/plugins/datatables-buttons/js/buttons.colVis.min.js'></script>
				<script
					src='https://cdn.tiny.cloud/1/j51khlh7msg9tt5jyqvs54x389ung7tdxjkzfihlbb9b4fn5/tinymce/5/tinymce.min.js'
					referrerPolicy='origin'
				></script>
				<script
					src='https://cdn.tiny.cloud/1/no-api-key/tinymce/5/jquery.tinymce.min.js'
					referrerPolicy='origin'
				></script>
				<script src='/plugins/sweetalert2/sweetalert2.min.js'></script>
				<script src='/plugins/select2/js/select2.full.min.js'></script>
				<script src='/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js'></script>
				<script src='/plugins/jquery-validation/jquery.validate.min.js'></script>
				<script src='/plugins/jquery-validation/additional-methods.min.js'></script>
				<script src='/plugins/toastr/toastr.min.js'></script>
				<script src='/plugins/moment/moment.min.js'></script>
				<script src='/plugins/daterangepicker/daterangepicker.js'></script>
				<script src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js"></script>
			</body>
		</html>
	)
}
