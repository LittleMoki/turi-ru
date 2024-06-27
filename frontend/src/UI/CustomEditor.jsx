import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'
import axios from 'axios' // Assuming axios is used for API requests

const CustomEditor = () => {
	const [editor, setEditor] = useState('')

	const handleImageUpload = async (blobInfo, progress, success, failure) => {
		const formData = new FormData()
		formData.append('file', blobInfo.blob(), blobInfo.filename())

		try {
			const response = await axios.post(
				'http://localhost:4000/upload',
				formData,
				{
					headers: { 'Content-Type': 'multipart/form-data' },
					onUploadProgress: progressEvent => {
						const percentCompleted = Math.round(
							(progressEvent.loaded * 100) / progressEvent.total
						)
						if (progress && typeof progress === 'function') {
							progress(percentCompleted)
						}
					},
				}
			)

			if (response.status >= 200 && response.status < 300) {
				const json = response.data
				if (json && typeof json.location === 'string') {
					success(json.location)
				} else {
					throw new Error('Invalid JSON response: ' + JSON.stringify(json))
				}
			} else {
				throw new Error('HTTP Error: ' + response.status)
			}
		} catch (error) {
			if (failure && typeof failure === 'function') {
				failure('Image upload failed: ' + error.message)
			}
		}
	}

	return (
		<div>
			<Editor
				className='w-full'
				style={{ width: '100%' }}
				apiKey='u190yql3pdvp1t1p1x3wziih00tj4p7vzfqcp1pd9lsnhfo4'
				init={{
					selector: 'textarea',
					plugins: 'image imagetools',
					toolbar: 'image',
					automatic_uploads: true,
					images_upload_handler: handleImageUpload, // Correct handler function
				}}
				initialValue='Fuck your self)'
			/>
		</div>
	)
}

export default CustomEditor
