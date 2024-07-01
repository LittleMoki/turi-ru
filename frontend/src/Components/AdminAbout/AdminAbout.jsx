'use client'
import React, {useEffect, useState} from 'react'
import {useParams, useRouter} from "next/navigation.js";
import {api} from "@/Api/api.js";
import CustomInputAdmin from "@/UI/CustomInputAdmin.jsx";
import CustomInput from "@/UI/CustomInput.jsx";
import {Checkbox} from "@nextui-org/react";
import CustomButton from "@/UI/CustomButton.jsx";
import Image from "next/image.js";

export default function AdminAbout() {
    const router = useRouter()
    const {id, slug} = useParams()
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        employment: "",
        body: "",
        publick: 0,
        order_number: 0,
        photo: "",
    })
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return
            try {
                const {data} = await api.get(`/about/${id}`)
                const {
                    name,
                    position,
                    employment,
                    body,
                    publick,
                    order_number,
                    photo,
                } = data.data
                setFormData({
                    name: name || '',
                    position: position || '',
                    employment: employment || '',
                    body: body || '',
                    publick: publick || 0,
                    order_number: order_number || 1,
                    photo: photo || '',
                })
            } catch (error) {
                setError(error.message)
            }
        }

        fetchData()
    }, [id])

    const handleInputChange = e => {
        const {name, value, type, checked} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? (checked ? 1 : 0) : name == 'order_number' ? Number(value) : value,
        }))
    }

    const handleSubmit = async e => {
        if (e !== undefined) e.preventDefault()
        try {
            if (id) {
                await api.put(`/about/${id}`, formData)
            } else {
                await api.post(`/about`, formData)
            }
            router.push(`/admin/${slug}`)
        } catch (error) {
            setError(error.message)
        }
    }

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
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <CustomInput label='ФИО' name='name' fn={handleInputChange} value={formData.name}/>
            <CustomInput label='Должность' name='position' fn={handleInputChange} value={formData.position}/>
            <CustomInput label='Обязанности' name='employment' fn={handleInputChange} value={formData.employment}/>
            <CustomInput label='Порядок показа карточек на сайте' name='order_number' fn={handleInputChange}
                         value={formData.order_number}/>
            <Checkbox className='dark' isSelected={formData.publick === 1} onChange={handleInputChange} name='publick'>Опубликовать
                на сайте?</Checkbox>
            <label className='text-white flex  gap-3 w-full'>
                {formData.photo ? (
                    <Image
                        className='rounded-full w-[100px] object-center h-[100px] '
                        width={'300'}
                        height={'300'}
                        alt={formData.photo}
                        src={`http://localhost:4000/uploads/${formData.photo}`
                        }
                    />
                ) : ''}
                <div>
                    Фото сотрудника
                    <input
                        className='bg-white w-full py-3	px-2 rounded-xl cursor-pointer'
                        name='photo'
                        type='file'
                        onChange={(e) => handleImageChange(e.target.files[0])}
                    />
                    Файл изображения должен быть в формате JPG или PNG.
                    Размер изображения должен быть 100х100 пикселей
                </div>

            </label>
            <CustomButton type='submit'>Save</CustomButton>
        </form>
    )
}
