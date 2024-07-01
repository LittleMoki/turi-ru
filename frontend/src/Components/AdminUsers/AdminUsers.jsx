'use client'
import {api} from '@/Api/api'
import CustomInput from '@/UI/CustomInput'
import CustomButton from '@/UI/CustomButton'
import {useParams, useRouter} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import Image from "next/image";

const AdminUsers = () => {
    const router = useRouter()
    const {id, slug} = useParams()
    const [formData, setFormData] = useState({
        login: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        password: '',
        role: 2,
        photo: '',
    })
    const [formPassword, setFormPassword] = useState({
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return
            try {
                const {data} = await api.get(`/users/${id}`)
                const {
                    login,
                    first_name,
                    last_name,
                    phone_number,
                    email,
                    role,
                    photo,
                    password
                } = data.data
                setFormData({
                    login: login || '',
                    first_name: first_name || '',
                    last_name: last_name || '',
                    phone_number: phone_number || '',
                    email: email || '',
                    role: role || 2,
                    photo: photo || '',
                    password: password || '',
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

    const handlePassword = e => {
        const {name, value} = e.target

        setFormPassword(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const validatePasswords = () => {
        if (formPassword.password !== formPassword.confirmPassword) {
            setPasswordError('Пароли не совпадают')
            return false
        }
        formData.password = formPassword.password
        return true
    }

    const handleSubmit = async e => {
        if (e !== undefined) e.preventDefault()

        if (!validatePasswords()) {
            return
        }

        const data = {...formData}
        if (formPassword.password) {
            data.password = formPassword.password
        }

        try {
            if (id) {
                await api.put(`/users/${id}`, data)
            } else {
                await api.post(`/users`, data)
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
        <form className={'flex flex-col gap-3'} onSubmit={handleSubmit}>
            <CustomInput
                name='login'
                fn={handleInputChange}
                value={formData.login}
                label='Логин:'
            />
            <CustomInput
                name='first_name'
                fn={handleInputChange}
                value={formData.first_name}
                label='Имя:'
            />
            <CustomInput
                name='last_name'
                fn={handleInputChange}
                value={formData.last_name}
                label='Фамилия:'
            />
            <CustomInput
                name='phone_number'
                fn={handleInputChange}
                value={formData.phone_number}
                label='Номер телефона:'
            />
            <CustomInput
                name='email'
                fn={handleInputChange}
                value={formData.email}
                label='Email:'
            />
            <CustomInput
                name='photo'
                fn={handleInputChange}
                value={formData.photo}
                label='Фото пользователя:'
            />
            <CustomInput
                name='password'
                fn={handlePassword}
                value={formPassword.password}
                label='Пароль:'
                type='password'
            />
            <CustomInput
                name='confirmPassword'
                fn={handlePassword}
                value={formPassword.confirmPassword}
                label='Подтверждение пароля:'
                type='password'
            />
            {passwordError ? (
                <p className='text-red'>{passwordError}</p>
            ) : ''}

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
                    Фото пользователя
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
            <CustomButton type={'submit'}>Save</CustomButton>
        </form>
    )
}

export default AdminUsers
