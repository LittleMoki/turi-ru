'use client'
import {api} from '@/Api/api'
import CustomInput from '@/UI/CustomInput'
import {useParams, useRouter} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import CustomButton from '@/UI/CustomButton'
import CustomEditor from "@/UI/CustomEditor.jsx";
import Image from "next/image.js";

const AdminNewsType = () => {
    const router = useRouter()
    const {id, slug} = useParams()
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        photo: '',
        url: '',
        title: '',
        metakeywords: '',
        metadescription: '',
    })
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return
            try {
                const {data} = await api.get(`/news_type/${id}`)
                const {
                    name,
                    description,
                    photo,
                    url,
                    title,
                    metakeywords,
                    metadescription,
                } = data.data
                setFormData({
                    name: name || '',
                    description: description || '',
                    photo: photo || '',
                    url: url || '',
                    title: title || '',
                    metakeywords: metakeywords || '',
                    metadescription: metadescription || '',
                })
            } catch (error) {
                setError(error.message)
            }
        }

        fetchData()
    }, [id])

    const handleInputChange = e => {
        const {name, value} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleEditorChange = (name, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = async (img) => {
        const formDataImage = new FormData();
        formDataImage.append('file', img);
        await api.post('/upload', formDataImage);
        setFormData((prevState) => ({
            ...prevState,
            'photo': img.name, // Store the file object directly
        }));
        if (id) {
            router.push(`/admin/${slug}/edit/${id}`)
        } else {
            handleSubmit()
            // router.push(`/admin/${slug}`)
        }
    }


    const handleSubmit = async e => {
        if (e !== undefined) e.preventDefault()
        try {
            if (id) {
                await api.put(`/news_type/${id}`, formData)
            } else {
                await api.post(`/news_type`, formData)
            }
            router.push(`/admin/${slug}`)
        } catch (error) {
            setError(error.message)
        }
    }

    if (error) {
        return (
            <div className='pt-3'>
                <p>{error}</p>
            </div>
        )
    }

    return (
        <form className='flex flex-col gap-3 items-start' onSubmit={handleSubmit}>
            <CustomInput
                name='name'
                fn={handleInputChange}
                value={formData.name}
                label='Название'
            />
            <CustomInput
                name='url'
                fn={handleInputChange}
                value={formData.url}
                label='Ссылка на тип'
            />
            <label className='w-full text-white'>
                Описание
                <CustomEditor
                    id='description'
                    fn={handleEditorChange}
                    name='description'
                    value={formData.description}
                />
            </label>
            <CustomInput
                name='title'
                fn={handleInputChange}
                value={formData.title}
                label='Title'
            />
            <CustomInput
                name='metakeywords'
                fn={handleInputChange}
                value={formData.metakeywords}
                label='Metakeywords'
            />
            <CustomInput
                name='metadescription'
                fn={handleInputChange}
                value={formData.metadescription}
                label='Metadescription'
            />
            <CustomInput
                name='photo'
                fn={handleInputChange}
                value={formData.photo}
                label='Фото типа'
            />

            <label className='text-white flex flex-col gap-3 w-full'>
                Фото типа
                <input
                    className='bg-white w-full py-3	px-2 rounded-xl cursor-pointer'
                    name='photo'
                    type='file'
                    onChange={(e) => handleImageChange(e.target.files[0])}
                />
                Файл изображения должен быть в формате JPG или PNG
                {formData.photo ? (
                    <Image
                        width={'500'}
                        height={'500'}
                        alt={formData.photo}
                        src={`http://localhost:4000/uploads/${formData.photo}`
                        }
                    />
                ) : ''}
            </label>

            <CustomButton type='submit'>Save</CustomButton>
        </form>
    )
}

export default AdminNewsType
