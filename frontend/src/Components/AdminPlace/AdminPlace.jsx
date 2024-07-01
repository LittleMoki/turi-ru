'use client'
import {api} from '@/Api/api'
import CustomInput from '@/UI/CustomInput'
import {useParams, useRouter} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import CustomEditor from "@/UI/CustomEditor.jsx";
import Image from "next/image";
import CustomButton from "@/UI/CustomButton.jsx";

const AdminPlace = () => {
    const router = useRouter()
    const {id, slug} = useParams()
    const [city, setCity] = useState([])
    const [formData, setFormData] = useState({
        country_id: 0,
        cityid: 0,
        url: '',
        name: '',
        body: '',
        photo: '',
        foto: '',
        fotoext: '',
        metakeywords: '',
        metadescription: '',
        publics: 0,
    })
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cityResponse = await api.get('city')
                setCity(cityResponse.data.data)

                if (id) {
                    const {data} = await api.get(`/place/${id}`)
                    const {
                        country_id,
                        cityid,
                        url,
                        name,
                        body,
                        photo,
                        foto,
                        fotoext,
                        metakeywords,
                        metadescription,
                        publics,
                    } = data.data
                    setFormData({
                        country_id: country_id || 0,
                        cityid: cityid || 0,
                        url: url || '',
                        name: name || '',
                        body: body || '',
                        photo: photo || '',
                        foto: foto || '',
                        fotoext: fotoext || '',
                        metakeywords: metakeywords || '',
                        metadescription: metadescription || '',
                        publics: publics || 0,
                    })
                }
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
            [name]: name === 'cityid' ? Number(value) : value,
        }))
    }

    const handleSelectChange = keys => {
        setFormData(prevState => ({
            ...prevState,
            cityid: Number([...keys][0])
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
            'foto': img.name, // Store the file object directly
        }));
        if (id) {
            router.push(`/admin/${slug}/edit/${id}`)
        } else{
            router.push(`/admin/${slug}`)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (id) {
                await api.put(`/place/${id}`, formData)
            } else {
                await api.post(`/place`, formData)
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
        <form className='grid md:grid-cols-3 gap-3'  onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3 col-span-2'>
                <CustomInput
                    name='name'
                    fn={handleInputChange}
                    value={formData.name}
                    label='Название достопримечательности:'
                />
                <Select
                    label="Выберите город"
                    placeholder="Выберите город"
                    selectedKeys={new Set([formData.cityid.toString()])}
                    className="w-full"
                    onSelectionChange={handleSelectChange}
                >
                    {city.map(el => (
                        <SelectItem key={el.id} value={el.id.toString()}>
                            {el.name}
                        </SelectItem>
                    ))}
                </Select>
                <CustomInput
                    name='url'
                    fn={handleInputChange}
                    value={formData.url}
                    label='Ссылка на достопримечательность:'
                />

                <label className='w-full text-white'>
                    Описание :
                    <CustomEditor
                        id='body'
                        fn={handleEditorChange}
                        name='body'
                        value={formData.body}
                    />
                </label>
                <CustomInput
                    name='metakeywords'
                    fn={handleInputChange}
                    value={formData.metakeywords}
                    label='Metakeywords:'
                />
                <CustomInput
                    name='metadescription'
                    fn={handleInputChange}
                    value={formData.metadescription}
                    label='Metadescription:'
                />
                <CustomInput
                    name='foto'
                    fn={handleInputChange}
                    value={formData.foto}
                    label='Фото достопримечательности:'
                />
            </div>
            <label className='text-white flex flex-col gap-3 w-full'>
                Фото достопримечательности
                <input
                    className='bg-white w-full py-3	px-2 rounded-xl cursor-pointer'
                    name='foto'
                    type='file'
                    onChange={(e) => handleImageChange(e.target.files[0])}
                />
                Файл изображения должен быть в формате JPG или PNG
                {formData.foto ? (
                    <Image
                        width={'500'}
                        height={'500'}
                        alt={formData.foto}
                        src={`http://localhost:4000/uploads/${formData.foto}`
                        }
                    />
                ) : ''}
            </label>
            <CustomButton
                className='bg-black py-2 px-5 rounded-md'
                type='submit'
            >Save</CustomButton>
        </form>
    )
}

export default AdminPlace
