import {api} from '@/Api/api'
import CustomButton from '@/UI/CustomButton'
import CustomInput from '@/UI/CustomInput'
import {useParams, useRouter} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import CustomEditor from "@/UI/CustomEditor.jsx";
import Image from "next/image.js";

const AdminCity = () => {
    const router = useRouter()
    const {id, slug} = useParams()
    const [country, setCountry] = useState([])
    const [formData, setFormData] = useState({
        country_id: 0,
        name: '',
        url: '',
        body: '',
        map: '',
        photo: '',
        metakeywords: '',
        metadescription: '',
        title: '',
    })
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const countryResponse = await api.get('country')
                setCountry(countryResponse.data.data)

                if (id) {
                    const {data} = await api.get(`/city/${id}`)
                    const {
                        country_id,
                        name,
                        url,
                        body,
                        map,
                        photo,
                        metakeywords,
                        metadescription,
                        title,
                    } = data.data
                    setFormData({
                        country_id: country_id || 0,
                        name: name || '',
                        url: url || '',
                        body: body || '',
                        map: map || '',
                        photo: photo || '',
                        metakeywords: metakeywords || '',
                        metadescription: metadescription || '',
                        title: title || '',
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
            [name]: name === 'country_id' ? Number(value) : value,
        }))
    }

    const handleSelectChange = keys => {
        setFormData(prevState => ({
            ...prevState,
            country_id: Number([...keys][0])
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
        } else{
            router.push(`/admin/${slug}`)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (id) {
                await api.put(`/city/${id}`, formData)
            } else {
                await api.post(`/city`, formData)
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
        <form className='grid gap-3 md:grid-cols-3' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3 md:col-span-2'>
                <CustomInput
                    name='name'
                    fn={handleInputChange}
                    value={formData.name}
                    label='Название города:'
                />
                <Select
                    label="Выберите страну"
                    placeholder="Выберите страну"
                    selectedKeys={new Set([formData.country_id.toString()])}
                    className="w-full"
                    onSelectionChange={handleSelectChange}
                >
                    {country.map(el => (
                        <SelectItem key={el.id} value={el.id.toString()}>
                            {el.name}
                        </SelectItem>
                    ))}
                </Select>
                <CustomInput
                    name='url'
                    fn={handleInputChange}
                    value={formData.url}
                    label='Ссылка на город:'
                />
                <label className='text-white w-full'>
                    Описание города:
                    <CustomEditor
                        id='body'
                        fn={handleEditorChange}
                        name='body'
                        value={formData.body}
                    />
                </label>
                <CustomInput
                    name='title'
                    fn={handleInputChange}
                    value={formData.title}
                    label='Title:'
                />
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
            </div>
            <div>
                <CustomInput
                    name='map'
                    fn={handleInputChange}
                    value={formData.map}
                    label='Карта:'
                />
                <label className='text-white flex flex-col gap-3 w-full'>
                    Фото города
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
            </div>
            <CustomButton type='submit'>Save</CustomButton>
        </form>
    )
}

export default AdminCity
