'use client'
import {api} from '@/Api/api'
import CustomInput from '@/UI/CustomInput'
import CustomButton from '@/UI/CustomButton'
import {useParams, useRouter} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import Image from "next/image";
import {object, ref, string} from "yup";
import {Input} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-regular-svg-icons";

const AdminUsers = () => {
    const router = useRouter()
    const {id, slug} = useParams()
    const [formData, setFormData] = useState({
        login: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        confirmPassword: '',
        email: '',
        password: '',
        role: 2,
        photo: '',
    })

    const [errors, setErrors] = useState({});

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
                    password: '',
                })
            } catch (error) {
                console.error(error.message)
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

    const handleSubmit = async e => {
        if (e !== undefined) e.preventDefault()

        const data = {...formData}

        try {
            await userSchema.validate(formData, {abortEarly: false})
            if (id) {
                await api.put(`/users/${id}`, data)
            } else {
                await api.post(`/users`, data)
            }
            router.push(`/admin/${slug}`)
        } catch (error) {
            const newErrors = {};

            error?.inner?.forEach((err) => {
                newErrors[err.path] = err.message;
            });

            setErrors(newErrors);
        }
    }

    const handleImageChange = async (img) => {
        const formDataImage = new FormData();
        formDataImage.append('file', img);
        formDataImage.append('oldPhotoName', formData.photo || ''); // Передаем старое имя файла для удаления
        try {
            const response = await api.post('/upload', formDataImage);
            const newPhotoLocation = response.data.location; // URL новой фотографии

            // Обновляем состояние с новым именем файла
            setFormData((prevState) => ({
                ...prevState,
                'photo': newPhotoLocation, // Обновляем поле photo с новым именем файла
            }));

            router.push(`/admin/${slug}/edit/${id}`);
        } catch (error) {
            console.error('Ошибка загрузки изображения:', error);
        }
    };

    const userSchema = object({
        password: string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(
                /[!@#$%^&*(),.?":{}|<>]/,
                "Password must contain at least one symbol"
            )
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
        confirmPassword: string()
            .oneOf([ref("password")], "Passwords must match")
            .required("Confirm password is required"),
        email: string()
            .min(1,'Email is Required')
            .email("Invalid email format"),
        phone_number: string()
            .matches(/^\d{10}$/, "Phone Number must be 10 digits")
            .required(),
        first_name:string().min(1,'Please enter first name'),
        last_name:string().min(1,'Please enter last name'),
        login:string().min(1,'Please enter login'),
    })

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <form className={'flex flex-col gap-3'} onSubmit={handleSubmit}>
            <CustomInput
                name='login'
                fn={handleInputChange}
                value={formData.login}
                label='Логин:'
                error={errors.login}
            />
            <CustomInput
                name='first_name'
                fn={handleInputChange}
                value={formData.first_name}
                label='Имя:'
                error={errors.first_name}

            />
            <CustomInput
                name='last_name'
                fn={handleInputChange}
                value={formData.last_name}
                label='Фамилия:'
                error={errors.last_name}

            />
            <CustomInput
                name='phone_number'
                fn={handleInputChange}
                value={formData.phone_number}
                error={errors.phone_number}
                label='Номер телефона:'
            />
            <CustomInput
                name='email'
                fn={handleInputChange}
                value={formData.email}
                label='Email:'
                error={errors.email}
            />
            <Input
                label="Пароль"
                name="password"
                value={formData.password}
                onChange={(e)=>handleInputChange(e)}
                placeholder="Enter your password"
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <FontAwesomeIcon icon={faEye} />

                        ) : (
                           <FontAwesomeIcon icon={faEyeSlash} />
                        )}
                    </button>
                }
                type={isVisible ? "text" : "password"}
            />
            <Input
                label="Подтверждение пароля:"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e)=>handleInputChange(e)}
                placeholder="Enter your password"
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <FontAwesomeIcon icon={faEye} />

                        ) : (
                            <FontAwesomeIcon icon={faEyeSlash} />
                        )}
                    </button>
                }
                type={isVisible ? "text" : "password"}
            />
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
