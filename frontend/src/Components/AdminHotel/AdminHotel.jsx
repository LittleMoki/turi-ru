import React, {useEffect, useState} from 'react';
import {useParams, useRouter} from "next/navigation";
import {api} from "@/Api/api.js";
import {Card, CardBody, Checkbox, CheckboxGroup, Select, SelectItem, Tab, Tabs} from "@nextui-org/react";
import CustomInput from "@/UI/CustomInput.jsx";
import CustomButton from "@/UI/CustomButton.jsx";
import CustomEditor from "@/UI/CustomEditor.jsx";
import Image from "next/image.js";

export default function AdminHotel() {
    const router = useRouter();
    const {id, slug} = useParams();
    const [formData, setFormData] = useState({
        country_id: 0,
        cityid: 0,
        name: "",
        url: "",
        title: "",
        metakeywords: "",
        metadescription: "",
        rating: "",
        address: "",
        photo: "",
        body: "",
        map: "",
        services: "",
        service_text: "",
        conditions: "",
        publics: 0,
    });
    const [error, setError] = useState(null);
    const [city, setCity] = useState([]);
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const countryResponse = await api.get('/country');
            const cityResponse = await api.get('/city');
            setCountry(countryResponse.data.data);
            setCity(cityResponse.data.data);

            if (!id) return;

            try {
                const {data} = await api.get(`/hotel/${id}`);
                const {
                    country_id,
                    cityid,
                    name,
                    url,
                    title,
                    metakeywords,
                    metadescription,
                    rating,
                    address,
                    photo,
                    body,
                    map,
                    services,
                    service_text,
                    conditions,
                    publics,
                } = data.data;
                setFormData({
                    country_id: country_id || 0,
                    cityid: cityid || 0,
                    name: name || '',
                    url: url || '',
                    title: title || '',
                    metakeywords: metakeywords || '',
                    metadescription: metadescription || '',
                    rating: rating || '',
                    address: address || '',
                    photo: photo || '',
                    body: body || '',
                    map: map || '',
                    services: services || '',
                    service_text: service_text || '',
                    conditions: conditions || '',
                    publics: publics || 0,
                });
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [id]);

    const handleInputChange = e => {
        const {name, value, type, checked} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
        }));
    };

    const handleCheckboxChange = (value) => {
        setFormData(prevState => ({
            ...prevState,
            services: value,
        }));
    };

    const handleSelectChange = (keys, type) => {
        setFormData(prevState => ({
            ...prevState,
            [type]: Number([...keys][0]),
        }));
    };

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
            router.push(`/admin/${slug}`)
        }
    }


    const handleSubmit = async e => {
        e.preventDefault();
        try {
            if (id) {
                await api.put(`/hotel/${id}`, formData);
            } else {
                await api.post(`/hotel`, formData);
            }
            router.push(`/admin/${slug}`);
        } catch (error) {
            setError(error.message);
        }
    };

    if (error) {
        return (
            <div className='pt-3'>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className='dark'>
            <Tabs>
                <Tab key='Общие настройки' title='Общие настройки'>
                    <Card>
                        <CardBody>
                            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                                <CustomInput description='Будет показываться на всем сайте' label='Название' name='name'
                                             value={formData.name} fn={handleInputChange}/>
                                <CustomInput description='Используется для SEO' label='Заголовок' name='title'
                                             value={formData.title} fn={handleInputChange}/>
                                <CustomInput label='Metakeywords' name='metakeywords' value={formData.metakeywords}
                                             fn={handleInputChange}/>
                                <CustomInput label='Metadescription' name='metadescription'
                                             value={formData.metadescription} fn={handleInputChange}/>
                                <CustomInput label='Сслыка на гостницу' name='url' value={formData.url}
                                             fn={handleInputChange}/>
                                <CustomInput label='Рейтинг гостницы' name='rating' value={formData.rating}
                                             fn={handleInputChange}/>
                                <CustomInput description='Для правильного отображения, указывайте цифры от 1 до 5 '
                                             label='Рейтинг гостницы' name='rating' value={formData.rating}
                                             fn={handleInputChange}/>
                                <CustomInput
                                    description='Для правильного отображения, можете указать дробные числа. Пример "9.3" '
                                    label='Рейтинг гостницы на Booking.com' name='booking_rating'
                                    value={formData.booking_rating} fn={handleInputChange}/>
                                <Select
                                    label="Страна гостницы"
                                    placeholder="Страна гостницы"
                                    selectedKeys={new Set([formData.country_id.toString()])}
                                    className="w-full"
                                    onSelectionChange={(keys) => handleSelectChange(keys, 'country_id')}
                                >
                                    {country.map(el => (
                                        <SelectItem key={el.id} value={el.id.toString()}>
                                            {el.name}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Select
                                    label="Город гостницы"
                                    placeholder="Город гостницы"
                                    selectedKeys={new Set([formData.cityid.toString()])}
                                    className="w-full"
                                    onSelectionChange={(keys) => handleSelectChange(keys, 'cityid')}
                                >
                                    {city.map(el => (
                                        <SelectItem key={el.id} value={el.id.toString()}>
                                            {el.name}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <label className='w-full text-white'>
                                    Расположение гостницы
                                    <CustomEditor
                                        id='map'
                                        fn={handleEditorChange}
                                        name='map'
                                        value={formData.map}
                                    />
                                </label>
                                <CustomButton>Save</CustomButton>
                            </form>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key='Номера' title='Номера'>
                    <Card>
                        <CardBody>
                            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                                <CustomButton>Save</CustomButton>
                            </form>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key='Описание гостиницы' title='Описание гостиницы'>
                    <Card>
                        <CardBody>
                            <form onSubmit={handleSubmit}>
                                <label className='w-full text-white'>
                                    Описание гостиницы
                                    <CustomEditor
                                        id='body'
                                        fn={handleEditorChange}
                                        name='body'
                                        value={formData.body}
                                    />
                                </label>
                                <CustomButton>Save</CustomButton>
                            </form>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key='Изображение' title='Изображение'>
                    <Card>
                        <CardBody>
                            <form onSubmit={handleSubmit}>
                                <label className='text-white flex flex-col gap-3 w-full'>
                                    Основное фото
                                    <input
                                        className='bg-white w-full py-3	px-2 rounded-xl cursor-pointer'
                                        name='foto'
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
                                <CustomButton>Save</CustomButton>
                            </form>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key='Услуги' title='Услуги'>
                    <Card>
                        <CardBody>
                            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                                <CheckboxGroup
                                    value={formData.services}
                                    onChange={handleCheckboxChange}
                                    // type='none'
                                    label='Услуги:'
                                >
                                    <Checkbox value={1}>Wifi</Checkbox>
                                    <Checkbox value={2}>Бар</Checkbox>
                                    <Checkbox value={3}>Бассейн</Checkbox>
                                    <Checkbox value={4}>Ресторан</Checkbox>
                                    <Checkbox value={5}>Пункт обмена</Checkbox>
                                    <Checkbox value={6}>Салон красоты</Checkbox>
                                    <Checkbox value={7}>Сувенирная лавка</Checkbox>
                                    <Checkbox value={8}>Не курить</Checkbox>
                                    <Checkbox value={9}>Конференц зал</Checkbox>
                                    <Checkbox value={10}>Фитнес клуб</Checkbox>
                                    <Checkbox value={11}>Сауна</Checkbox>
                                </CheckboxGroup>
                                <CustomButton>Save</CustomButton>
                            </form>
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    );
}
