import React, {useEffect, useState} from 'react'
import {useParams, useRouter} from "next/navigation.js";
import {api} from "@/Api/api.js";
import CustomInput from "@/UI/CustomInput.jsx";
import CustomButton from "@/UI/CustomButton.jsx";
import CustomEditor from "@/UI/CustomEditor.jsx";

export default function AdminTourType() {
    const router = useRouter()
    const {id, slug} = useParams()
    const [formData, setFormData] = useState({
        parent: 0,
        name: '',
        type: '',
        url: '',
        photo: '',
        description: '',
        title: '',
        metakeywords: '',
        metadescription: '',
        sorting: 0,
    })
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return
            try {
                const {data} = await api.get(`/tour_type/${id}`)
                const {
                    parent,
                    name,
                    type,
                    url,
                    photo,
                    description,
                    title,
                    metakeywords,
                    metadescription,
                    sorting,
                } = data.data
                setFormData({
                    parent: parent || 0,
                    name: name || '',
                    type: type || '',
                    url: url || '',
                    photo: photo || '',
                    description: description || '',
                    title: title || '',
                    metakeywords: metakeywords || '',
                    metadescription: metadescription || '',
                    sorting: sorting || 0,
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
            [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (id) {
                await api.put(`/tour_type/${id}`, formData)
            } else {
                await api.post(`/tour_type`, formData)
            }
            router.push(`/admin/${slug}`)
        } catch (error) {
            setError(error.message)
        }
    }

    const handleEditorChange = (name, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    if (error) {
        return (
            <div className='pt-3'>
                <p>{error}</p>
            </div>
        )
    }
    return (
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <CustomInput name='name' label='Заголовок' value={formData.name} fn={handleInputChange}/>
            <CustomInput name='parent' label='Родительская категория' value={formData.parent} fn={handleInputChange}/>
            <label className="text-white">
                Описание
                <CustomEditor id={'description'}
                              fn={handleEditorChange}
                              name={'description'}
                              value={formData.description}
                />
            </label>
            <CustomInput name='url' label='Ссылка на тип' value={formData.url} fn={handleInputChange}/>
            <CustomInput name='title' label='Title' value={formData.title} fn={handleInputChange}/>
            <CustomInput name='metakeywords' label='Metakeywords' value={formData.metakeywords} fn={handleInputChange}/>
            <CustomInput name='metadescription' label='Metadescription' value={formData.metadescription}
                         fn={handleInputChange}/>
            <CustomButton type='submit'>Save</CustomButton>
        </form>
    )
}
