import React, {useEffect, useState} from 'react';
import {useParams, usePathname, useRouter} from "next/navigation";
import {api} from "@/Api/api.js";
import {
    Card,
    CardBody,
    Checkbox,
    CheckboxGroup,
    Tabs,
    Tab,
    Select,
    SelectItem, Input, Textarea, AccordionItem, Accordion,
} from "@nextui-org/react";
import CustomInput from "@/UI/CustomInput.jsx";
import CustomButton from "@/UI/CustomButton.jsx";
import CustomEditor from "@/UI/CustomEditor.jsx";
import Image from "next/image";
import {number, object, string} from "yup";

const AdminMainTour = () => {

    const router = useRouter();
    const pathName = usePathname()
    const {id, slug} = useParams();
    const [team, setTeam] = useState([]);
    const [type, setType] = useState([]);
    const [country, setCountry] = useState([]);
    const [city, setCity] = useState([]);
    const [services, setServices] = useState([]);
    const [hotel, setHotel] = useState([]);
    const [formData, setFormData] = useState({
        typeId: 0,
        teamId: 0,
        main_title: '',
        name: '',
        name2: '',
        price: 0,
        oldPrice: 0,
        sales: '',
        body: '',
        map: '',
        url: '',
        photo: '',
        date: '',
        metakeywords: '',
        metadescription: '',
        ftext: '',
        ftext2: '',
        intop: 0,
        intop2: 0,
        intop3: 0,
        types: [],
        include: [],
        exclude: [],
        notes: '',
        paid_services: '',
        places: '',
        transport: [],
        travellers: '',
        archive: 0,
        solo_price: 0,
        single_price: 0,
        guaranted: 0,
        new_type: '',
        country: [],
        city: [],
        tourtoday: [],
        tour_faqs: [],
        faqIds: [],
        tourphoto: []
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataTeam = await api.get(`/team`);
                const dataType = await api.get(`/tour_type`);
                const dataCountry = await api.get(`/country`);
                const dataCity = await api.get(`/city`);
                const dataServices = await api.get(`/services`);
                const dataFaq = await api.get(`/faq`);
                const dataHotel = await api.get(`/hotel`);
                setTeam(dataTeam.data.data);
                setType(dataType.data.data);
                setCountry(dataCountry.data.data);
                setCity(dataCity.data.data);
                setServices(dataServices.data.data);
                setHotel(dataHotel.data.data);

                if (id) {
                    const {data} = await api.get(`/tour/${id}`);
                    const {
                        teamId,
                        typeId,
                        main_title,
                        name,
                        name2,
                        price,
                        oldPrice,
                        sales,
                        body,
                        map,
                        url,
                        photo,
                        date,
                        metakeywords,
                        metadescription,
                        ftext,
                        ftext2,
                        intop,
                        intop2,
                        intop3,
                        types,
                        include,
                        exclude,
                        notes,
                        paid_services,
                        places,
                        transport,
                        travellers,
                        archive,
                        solo_price,
                        single_price,
                        guaranted,
                        new_type,
                        country,
                        city,
                        tourtoday,
                        tour_faqs,
                        tourphoto
                    } = data.data;

                    setFormData({
                        teamId: teamId || 0,
                        typeId: typeId || 0,
                        main_title: main_title || '',
                        name: name || '',
                        name2: name2 || '',
                        price: price || 0,
                        oldPrice: oldPrice || 0,
                        sales: sales || '',
                        body: body || '',
                        map: map || '',
                        url: url || '',
                        photo: photo || '',
                        date: date || '',
                        metakeywords: metakeywords || '',
                        metadescription: metadescription || '',
                        ftext: ftext || '',
                        ftext2: ftext2 || '',
                        intop: intop || 0,
                        intop2: intop2 || 0,
                        intop3: intop3 || 0,
                        types: types || [],
                        include: include || [],
                        exclude: exclude || [],
                        notes: notes || '',
                        paid_services: paid_services || '',
                        places: places || '',
                        transport: transport || [],
                        travellers: travellers || '',
                        archive: archive || 0,
                        solo_price: solo_price || 0,
                        single_price: single_price || 0,
                        guaranted: guaranted || 0,
                        new_type: new_type || 'i',
                        country: country || [],
                        city: city || [],
                        tourtoday: tourtoday || [],
                        tour_faqs: dataFaq.data.data || tour_faqs,
                        faqIds: (data.data.tour_faqs || []).map(faq => faq.faqid),
                        tourphoto: tourphoto || []
                    });
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, [id]);


    const handleInputChange = (name, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: name === 'typeId' || name === 'teamId' ? Number(value) : value,
        }));
    };

    const handleInputChangeForRoutes = (index, field, value) => {
        setFormData((prevState) => {
            const newTourToday = [...prevState.tourtoday];
            newTourToday[index] = {...newTourToday[index], [field]: value};
            return {...prevState, tourtoday: newTourToday};
        });
    };

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


    const handleSubmit = async (e) => {
        if (e !== undefined) e.preventDefault();
        try {
            if (id) {
                await tourSchemaPut.validate(formData, {abortEarly: false});
                await api.put(`/tour/${id}`, formData);
                router.push(`/admin/${slug}`);
            } else {
                await tourSchemaPost.validate(formData, {abortEarly: false});
                const response = await api.post(`/tour`, formData);
                const id = await response.data.id;
                router.push(`/admin/${slug}/edit/${id}`);
            }
        } catch (error) {
            const newErrors = {};

            error?.inner?.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            if (error?.response?.data?.message) {
                newErrors['url'] = error?.response?.data?.message;
            }
            setErrors(newErrors);
        }
    };


    const [includeFilter, setIncludeFilter] = useState('')
    const [excludeFilter, setExcludeFilter] = useState('')
    const [countryFilter, setCountryFilter] = useState('')
    const [cityFilter, setCityFilter] = useState('')
    const [hotelFilter, setHotelFilter] = useState('')

    const filteredHotels = hotel.filter(
        (el) => el.name.toLowerCase().includes(hotelFilter.toLowerCase())
    );

    const filteredIncludeServices = services.filter(
        (el) => el.type_id == 1 && el.title.toLowerCase().includes(includeFilter.toLowerCase())
    );

    const filteredExcludeServices = services.filter(
        (el) => el.type_id == 3 && el.title.toLowerCase().includes(excludeFilter.toLowerCase())
    );

    const filteredCountry = country.filter(
        el => el.name.toLowerCase().includes(countryFilter.toLowerCase())
    )

    const filteredCity = city.filter(
        el => el.name.toLowerCase().includes(cityFilter.toLowerCase())
    )

    // Состояние для хранения списка элементов аккордеона

    const addItem = () => {
        setFormData((prevState) => ({
            ...prevState,
            tourtoday: [
                ...prevState.tourtoday,
                {
                    id: formData.tourtoday.length + 1,
                    tourid: Number(id),
                    name: '',
                    body: '',
                    breakfast: false,
                    lunch: false,
                    dinner: false,
                    hotels: null
                }
            ]
        }));

    };

    const removeItem = async (id) => {
        try {
            await api.delete(`/tour/${id}/tourtoday`); // Удаление элемента на сервере
            setFormData((prevState) => ({
                ...prevState,
                tourtoday: prevState.tourtoday.filter(item => item.id !== id)
            }));
        } catch (error) {
            console.error(error.message);
        }
    };

    const removeFaq = async (isFaq, faqId, id) => {
        const tourFaqId = faqId.filter(el => el.faqid === id).map(el => el.id)

        if (!isFaq && tourFaqId[0] !== undefined) {
            console.log(tourFaqId[0]);
            await api.delete(`/tour/${tourFaqId[0]}/faq`);
        } // Удаление элемента на сервере
    }

    const tourSchemaPost = object({
        typeId: number().min(1).required('Please select a type'),
        main_title: string().required('Please enter H1'),
        teamId: number().min(1).required('Please select a team'),
    })

    const tourSchemaPut = object({
        typeId: number().min(1).required('Please select a type'),
        main_title: string().required('Please enter H1'),
        teamId: number().min(1).required('Please select a team'),
        name: string(),
        name2: string(),
        metakeywords: string(),
        metadescription: string(),
        url: string().required('Please enter url'),
        sales: string(),
        price: number().typeError('Must be number'),
        oldPrice: number().typeError('Must be number'),
        single_price: number().typeError('Must be number'),
        solo_price: number().typeError('Must be number'),
        transfer_price: number().typeError('Must be number'),
        body: string().typeError('Must be string'),
        map: string(),
    })

    const handleUploadImage = async (e) => {
        const formDataUpload = new FormData();
        for (let i = 0; i < e.length; i++) {
            formDataUpload.append('files', e[i]);
        }

        try {
            const response = await api.post('/uploadmany', formDataUpload);
            const uploadedPhotos = response.data.locations; // Получаем массив URL загруженных файлов

            const newPhotos = uploadedPhotos.map((location, i) => ({
                id: i,
                tourid: Number(id),
                photo: location
            }));

            setFormData(prevState => ({
                ...prevState,
                tourphoto: [...prevState.tourphoto, ...newPhotos]
            }));

            if (id) {
                router.push(`/admin/${slug}/edit/${id}`);
            } else {
                router.push(`/admin/${slug}`);
            }

        } catch (error) {
            console.error('Ошибка загрузки файлов:', error);
        }
    };

    const handleDeleteImage = async (file, id) => {
        await api.delete(`/uploads/${file}`);
        await api.delete(`tour/${id}/images`);
        setFormData((prevState) => ({
            ...prevState,
            tourphoto: prevState.tourphoto.filter(item => item.id !== id)
        }));
    }

    return (
        <>
            {pathName.startsWith('/admin/tour/create') ? (
                <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                    <CustomInput
                        name='main_title'
                        value={formData.main_title || ''}
                        fn={(e) => handleInputChange('main_title', e.target.value)}
                        label='Заголовок H1:'
                        white='true'
                        error={errors.main_title}
                    />
                    <Select
                        name='typeId'
                        label="Тип тура :"
                        className="w-full"
                        isInvalid={errors.typeId}
                        errorMessage={errors.typeId}
                        selectedKeys={new Set([formData.typeId.toString()])}
                        onSelectionChange={(keys) => handleInputChange('typeId', keys.values().next().value)}
                    >
                        {type.map((el) => (
                            <SelectItem key={el.id} value={el.id.toString()}>
                                {el.name}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select
                        label="Команда:"
                        className="w-full"
                        isInvalid={errors.teamId}
                        errorMessage={errors.teamId}
                        selectedKeys={new Set([formData.teamId.toString()])}
                        onSelectionChange={(keys) => handleInputChange('teamId', keys.values().next().value)}
                    >
                        {team.map((el) => (
                            <SelectItem key={el.id} value={el.id.toString()}>
                                {el.name}
                            </SelectItem>
                        ))}
                    </Select>

                    <CustomButton type='submit'>Save</CustomButton>

                </form>
            ) : (
                <div className='flex w-full dark flex-col'>
                    <Tabs aria-label='Options'>
                        <Tab key='settings' title='Общие настройки'>
                            <Card>
                                <CardBody>
                                    <form className='flex flex-col gap-3 items-start' onSubmit={handleSubmit}>
                                        <CustomInput
                                            name='main_title'
                                            value={formData.main_title || ''}
                                            fn={(e) => handleInputChange('main_title', e.target.value)}
                                            label='Заголовок H1:'
                                            white='true'
                                            error={errors.main_title}
                                        />
                                        <CustomInput
                                            name='name2'
                                            value={formData.name2 || ''}
                                            fn={(e) => handleInputChange('name2', e.target.value)}
                                            label='Заголовок H2:'
                                            white='true'
                                            error={errors.name2}
                                        />

                                        <CustomInput
                                            name='name'
                                            value={formData.name || ''}
                                            fn={(e) => handleInputChange('name', e.target.value)}
                                            label='Title:'
                                            white='true'
                                            error={errors.name}
                                        />

                                        <CustomInput
                                            name='metakeywords'
                                            value={formData.metakeywords || ''}
                                            fn={(e) => handleInputChange('metakeywords', e.target.value)}
                                            label='Metakeywords:'
                                            white='true'
                                            error={errors.metakeywords}
                                        />


                                        <CustomInput
                                            name='metadescription'
                                            value={formData.metadescription || ''}
                                            fn={(e) => handleInputChange('metadescription', e.target.value)}
                                            label='Metadescription:'
                                            white='true'
                                            error={errors.metadescription}
                                        />

                                        <CustomInput
                                            name='url'
                                            value={formData.url || ''}
                                            fn={(e) => handleInputChange('url', e.target.value)}
                                            label='Ссылка на страницу:'
                                            white='true'
                                            error={errors.url}
                                        />
                                        <Checkbox
                                            name='intop'
                                            onChange={() => handleInputChange('intop', formData.intop === 1 ? 0 : 1)}
                                            isSelected={formData.intop === 1}
                                        >
                                            Показать на главной странице (В разделе популярные туры)
                                        </Checkbox>
                                        <small className='pl-4'>
                                            Для правильного показа туров на главной странице, надо выбрать 3 тура в одну
                                            категорию
                                        </small>
                                        <Checkbox
                                            name='guaranted'
                                            onChange={() => handleInputChange('guaranted', formData.guaranted === 1 ? 0 : 1)}
                                            isSelected={formData.guaranted === 1}
                                        >Добавить галочку (Гарантированный тур)</Checkbox>
                                        <Checkbox
                                            name='archive'
                                            onChange={() => handleInputChange('archive', formData.archive === 1 ? 0 : 1)}
                                            isSelected={formData.archive === 1}
                                        >
                                            Перенести тур в архив
                                        </Checkbox>
                                        <small className='pl-4'>После переноса тура в архив, он не будет отображаться на
                                            сайте</small>

                                        <CustomInput
                                            name='sales'
                                            value={formData.sales || ''}
                                            fn={(e) => handleInputChange('sales', e.target.value)}
                                            label='Скидка на тур | Новый тур:'
                                            white='true'
                                            error={errors.sales}
                                        />
                                        <CustomButton type='submit'>Save</CustomButton>
                                    </form>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key='cost and date' title='Цены и даты'>
                            <Card>
                                <CardBody>
                                    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                                        <Tabs isVertical={true}>
                                            <Tab className='w-full' key='Групповые цены' title='Групповые цены'>
                                                <Card>
                                                    <CardBody>

                                                    </CardBody>
                                                </Card>
                                            </Tab>
                                            <Tab className='w-full' key='Индивидуальные цены'
                                                 title='Индивидуальные цены'>
                                                <Card>
                                                    <CardBody>
                                                        <CustomInput
                                                            name='oldPrice'
                                                            value={formData.oldPrice || ''}
                                                            fn={(e) => handleInputChange('oldPrice', e.target.value)}
                                                            label='Цена (Старая):'
                                                            white='true'
                                                            error={errors.oldPrice}
                                                            description='Цена, которая показывается на всем сайте. Указывайте цену за 1 человека в двухмесном номере. Не участвует в подсчесте тура на странице бронирования. '
                                                        />
                                                        <CustomInput
                                                            name='price'
                                                            value={formData.price || ''}
                                                            fn={(e) => handleInputChange('price', e.target.value)}
                                                            label='Цена (Новая):'
                                                            white='true'
                                                            error={errors.price}
                                                            description='Основная цена, которая показывается на всем сайте. Указывайте цену за 1 человека в двухмесном номере. Участвует в подсчесте тура на странице бронирования. '
                                                        />
                                                        <CustomInput
                                                            name='single_price'
                                                            value={formData.single_price || ''}
                                                            fn={(e) => handleInputChange('single_price', e.target.value)}
                                                            label='Доплата за одноместное размещение:'
                                                            white='true'
                                                            error={errors.single_price}
                                                            description='Цена тура для индивидуального путешественника. Для правильного подсчета указывайте полную стоимость тура. Участвует в подсчесте тура на странице бронирования. '
                                                        />
                                                        <CustomInput
                                                            name='single_room_price'
                                                            value={formData.transfer_price || ''}
                                                            fn={(e) => handleInputChange('transfer_price', e.target.value)}
                                                            label='Доплата за трансфер:'
                                                            white='true'
                                                            error={errors.transfer_price}
                                                            description='Цена для рассчета тура по индивидуальной дате. Умножается на количество ночей. Участвует в подсчесте тура на странице бронирования. '
                                                        />
                                                        <CustomInput
                                                            name='solo_price'
                                                            value={formData.solo_price || ''}
                                                            fn={(e) => handleInputChange('solo_price', e.target.value)}
                                                            label='Цена тура(Solo traveller):'
                                                            white='true'
                                                            error={errors.solo_price}
                                                            description='Цена для путешественника который едит один. '
                                                        />
                                                    </CardBody>
                                                </Card>
                                            </Tab>
                                        </Tabs>
                                        <CustomButton type='submit'>Save</CustomButton>
                                    </form>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key='description' title='Описание тура'>
                            <Card>
                                <CardBody>
                                    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                                        <label className='w-full text-white'>
                                            Описание тура :
                                            <CustomEditor value={formData.body}
                                                          fn={handleInputChange}
                                                          name={'body'}
                                                          id={'body'}
                                            />
                                            {errors.body && <div>{errors.body}</div>}
                                        </label>
                                        <CheckboxGroup
                                            label="Тип транспорта:"
                                            value={formData.transport}
                                            onChange={(value) => handleInputChange('transport', value)}
                                        >
                                            <Checkbox value={1}>Самолет</Checkbox>
                                            <Checkbox value={2}>Поезд</Checkbox>
                                            <Checkbox value={3}>Легковое авто</Checkbox>
                                            <Checkbox value={4}>Минивен</Checkbox>
                                            <Checkbox value={5}>Минибас</Checkbox>
                                            <Checkbox value={6}>Автобус</Checkbox>
                                        </CheckboxGroup>
                                        <CustomInput
                                            name='travellers'
                                            value={formData.travellers || ''}
                                            fn={(e) => handleInputChange('travellers', e.target.value)}
                                            label='Количество путешественников:'
                                            white='true'
                                        />
                                        <small>Укажите минимальное и максимальное количество путешественников. </small>
                                        <Select
                                            label="Команда:"
                                            className="max-w-xs"
                                            isInvalid={errors.teamId}
                                            errorMessage={errors.teamId}
                                            selectedKeys={new Set([formData.teamId.toString()])}
                                            onSelectionChange={(keys) => handleInputChange('teamId', keys.values().next().value)}
                                        >
                                            {team.map((el) => (
                                                <SelectItem key={el.id} value={el.id.toString()}>
                                                    {el.name}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        <CustomButton type='submit'>Save</CustomButton>
                                    </form>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key='photo' title='Изображение'>
                            <Card>
                                <CardBody>
                                    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                                        <label className='text-white flex flex-col gap-3 w-full'>
                                            Основное фото
                                            {formData.photo ? (
                                                <Image
                                                    width={'500'}
                                                    height={'500'}
                                                    alt={formData.photo}
                                                    src={`http://localhost:4000/uploads/${formData.photo}`
                                                    }
                                                />
                                            ) : ''}
                                            <input
                                                className='bg-white w-full py-3	px-2 rounded-xl cursor-pointer'
                                                name='photo'
                                                type='file'
                                                onChange={(e) => handleImageChange(e.target.files[0])}
                                            />
                                        </label>
                                        <label className='text-white flex flex-col gap-3 w-full'>
                                            Галерея
                                            <input
                                                className='bg-white w-full py-3	px-2 rounded-xl cursor-pointer'
                                                name='foto'
                                                type='file'
                                                multiple
                                                onChange={(e) => handleUploadImage(e.target.files)}
                                            />
                                            Файл изображения должен быть в формате JPG или PNG
                                            <div className='flex flex-wrap gap-3'>
                                                {formData.tourphoto.map(el => (
                                                    <div className='relative'>
                                                        <Image
                                                            width={'300'}
                                                            height={'300'}
                                                            alt={el.photo}
                                                            src={`http://localhost:4000/uploads/${el.photo}`
                                                            }
                                                        />
                                                        <i className="fa-solid fa-circle-xmark absolute top-0 left-0 cursor-pointer"
                                                           style={{color: "#c01c28"}}
                                                           onClick={() => handleDeleteImage(el.photo, el.id)}
                                                        ></i>
                                                    </div>
                                                ))}
                                            </div>
                                        </label>
                                        <CustomButton>Save</CustomButton>
                                    </form>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key='tour type' title='Тип тура'>
                            <Card>
                                <CardBody>
                                    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                                        <Select
                                            name='typeId'
                                            label=" Главный тип тура :"
                                            className="w-full"
                                            isInvalid={errors.typeId}
                                            errorMessage={errors.typeId}
                                            selectedKeys={new Set([formData.typeId.toString()])}
                                            onSelectionChange={(keys) => handleInputChange('typeId', keys.values().next().value)}
                                        >
                                            {type.map((el) => (
                                                <SelectItem key={el.id} value={el.id.toString()}>
                                                    {el.name}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
                                            <CheckboxGroup
                                                label="Базовые категории:"
                                                value={formData.types}
                                                onChange={(value) => handleInputChange('types', value)}
                                            >
                                                {type.map((el) => (
                                                    <Checkbox key={el.id} value={el.name}>{el.name}</Checkbox>
                                                ))}
                                            </CheckboxGroup>
                                            <CheckboxGroup
                                                label="Сезоны:"
                                                value={formData.types}
                                                onChange={(value) => handleInputChange('types', value)}
                                            >
                                                <Checkbox value={'Зимой'}>Зимой</Checkbox>
                                                <Checkbox value={'Весной'}>Весной</Checkbox>
                                                <Checkbox value={'Летом'}>Летом</Checkbox>
                                                <Checkbox value={'Осенью'}>Осенью</Checkbox>
                                                <Checkbox value={'Круглый год'}>Круглый год</Checkbox>
                                            </CheckboxGroup>
                                            <CheckboxGroup
                                                label="Страны:"
                                                value={formData.types}
                                                onChange={(value) => handleInputChange('types', value)}
                                            >
                                                {country.map((el) => (
                                                    <Checkbox key={el.id} value={el.name}>{el.name}</Checkbox>
                                                ))}
                                            </CheckboxGroup>
                                        </div>
                                        <CustomButton type='submit'>Save</CustomButton>
                                    </form>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key='services' title='Услуги'>
                            <Card>
                                <CardBody>
                                    <form onSubmit={handleSubmit} className='grid md:grid-cols-2 md:gap-3 gap-10'>
                                        <div className='flex flex-col gap-3'>
                                            <CustomInput
                                                placeholder='Искать...'
                                                value={includeFilter}
                                                fn={(e) => setIncludeFilter(e.target.value)}
                                            />
                                            <CheckboxGroup
                                                label="Включено:"
                                                value={formData.include}
                                                onChange={(value) => handleInputChange('include', value)}
                                            >
                                                <div
                                                    className='max-h-[300px] overflow-y-auto flex flex-col gap-3 overflow-x-hidden'>
                                                    {filteredIncludeServices.length > 0 ? (
                                                        filteredIncludeServices.map((el) => (
                                                            <Checkbox key={el.id}
                                                                      value={`<i className={el.icon}/> ${el.title}`}><i
                                                                className={el.icon}/> {el.title}
                                                            </Checkbox>
                                                        ))
                                                    ) : (
                                                        <div className='flex justify-center items-center'>Ничего не
                                                            найдено</div>
                                                    )}
                                                </div>
                                            </CheckboxGroup>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <CustomInput
                                                placeholder='Искать...'
                                                value={excludeFilter}
                                                fn={(e) => setExcludeFilter(e.target.value)}
                                            />
                                            <CheckboxGroup
                                                label="Доп расходы:"
                                                value={formData.exclude}
                                                onChange={(value) => handleInputChange('exclude', value)}
                                            >
                                                <div
                                                    className='max-h-[300px] overflow-y-auto flex flex-col gap-3 overflow-x-hidden'>
                                                    {filteredExcludeServices.length > 0 ? (
                                                        filteredExcludeServices.map((el) => (
                                                            <Checkbox key={el.id}
                                                                      value={`<i className={el.icon}/> ${el.title}`}><i
                                                                className={el.icon}/> {el.title}</Checkbox>
                                                        ))
                                                    ) : (
                                                        <div className='flex justify-center items-center'>Ничего не
                                                            найдено</div>
                                                    )}
                                                </div>
                                            </CheckboxGroup>
                                        </div>
                                        <CustomButton type='submit'>Save</CustomButton>
                                    </form>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key='route' title='Маршрут'>
                            <Card>
                                <CardBody>
                                    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                                        <Textarea
                                            label="Маршрут тура"
                                            labelPlacement="outside"
                                            placeholder="Enter your description"
                                            minRows={50}
                                            className="w-full"
                                            value={formData.map}
                                            name='map'
                                            onChange={e => handleInputChange('map', e.target.value)}
                                        />
                                        <a href="https://yandex.ru/map-constructor/" target='_blank'>Конструктор
                                            карт</a>
                                        <div className='grid md:grid-cols-2 gap-3'>
                                            <div className='flex flex-col gap-3'>
                                                <CustomInput
                                                    placeholder='Искать...'
                                                    value={countryFilter}
                                                    fn={(e) => setCountryFilter(e.target.value)}
                                                />
                                                <CheckboxGroup
                                                    label="Страны:"
                                                    value={formData.city}
                                                    onChange={(value) => handleInputChange('city', value)}
                                                >
                                                    <div
                                                        className='max-h-[350px] overflow-y-auto flex flex-col gap-3 overflow-x-hidden'>
                                                        {filteredCountry.length > 0 ? (
                                                            filteredCountry.map((el) => (
                                                                <Checkbox key={el.id}
                                                                          value={el.name}>{el.name}</Checkbox>
                                                            ))
                                                        ) : (
                                                            <div className='flex justify-center items-center'>Ничего не
                                                                найдено</div>
                                                        )}
                                                    </div>
                                                </CheckboxGroup>
                                            </div>
                                            <div className='flex flex-col gap-3'>
                                                <CustomInput
                                                    placeholder='Искать...'
                                                    value={cityFilter}
                                                    fn={(e) => setCityFilter(e.target.value)}
                                                />
                                                <CheckboxGroup
                                                    label="Города:"
                                                    value={formData.city}
                                                    onChange={(value) => handleInputChange('city', value)}
                                                >
                                                    <div
                                                        className='max-h-[350px] overflow-y-auto flex flex-col gap-3 overflow-x-hidden'>
                                                        {filteredCity.length > 0 ? (
                                                            filteredCity.map((el) => (
                                                                <Checkbox key={el.id}
                                                                          value={el.name}>{el.name}</Checkbox>
                                                            ))
                                                        ) : (
                                                            <div className='flex justify-center items-center'>Ничего не
                                                                найдено</div>
                                                        )}
                                                    </div>
                                                </CheckboxGroup>
                                            </div>
                                        </div>
                                        <div>
                                            <Accordion variant="splitted">
                                                {formData.tourtoday.map((el, i) => (
                                                    <AccordionItem key={el.id} title={`День: ${i + 1} ${el.name}`}>
                                                        <CustomInput
                                                            label="Name"
                                                            value={el.name}
                                                            fn={(e) => handleInputChangeForRoutes(i, 'name', e.target.value)}
                                                        />
                                                        <br/>
                                                        <CustomEditor
                                                            value={el.body}
                                                            name="body"
                                                            id={`editor-${i}`}
                                                            index={i}
                                                            fn1={handleInputChangeForRoutes}
                                                        />
                                                        <br/>
                                                        <div className='flex gap-3'>
                                                            <Checkbox name='breakfast'
                                                                      isSelected={el.breakfast}
                                                                      onValueChange={(e) => handleInputChangeForRoutes(i, 'breakfast', e)}>
                                                                Завтрак
                                                            </Checkbox>
                                                            <Checkbox
                                                                name='lunch'
                                                                isSelected={el.lunch}
                                                                onValueChange={(e) => handleInputChangeForRoutes(i, 'lunch', e)}>
                                                                Обед</Checkbox>
                                                            <Checkbox
                                                                name='dinner'
                                                                isSelected={el.dinner}
                                                                onValueChange={(e) => handleInputChangeForRoutes(i, 'dinner', e)}>
                                                                Ужин</Checkbox>
                                                        </div>
                                                        <br/>
                                                        <div className='flex flex-col gap-3'>
                                                            <CustomInput
                                                                placeholder='Искать...'
                                                                value={hotelFilter}
                                                                fn={(e) => setHotelFilter(e.target.value)}
                                                            />
                                                            <CheckboxGroup
                                                                label="Добавить гостиницу"
                                                                value={el.hotels ?? []}
                                                                name='hotels'
                                                                onValueChange={(value) => handleInputChangeForRoutes(i, 'hotels', value)}
                                                            >

                                                                <div
                                                                    className='min-h-[150px] overflow-y-auto flex flex-col gap-3 overflow-x-hidden'>
                                                                    {filteredHotels.length > 0 ? (
                                                                        filteredHotels.map((el) => (
                                                                            <Checkbox key={el.id}
                                                                                      value={el.id}>{el.name}</Checkbox>
                                                                        ))
                                                                    ) : (
                                                                        <div
                                                                            className='flex justify-center items-center'>Ничего
                                                                            не
                                                                            найдено</div>
                                                                    )}
                                                                </div>
                                                            </CheckboxGroup>
                                                        </div>
                                                        <CustomButton fn={() => removeItem(el.id)}
                                                                      color="secondary"
                                                                      type='button'
                                                        >
                                                            Удалить
                                                        </CustomButton>
                                                    </AccordionItem>
                                                ))}
                                            </Accordion>
                                            <CustomButton className='my-3' fn={addItem} type='button'>
                                                Добавить день
                                            </CustomButton>
                                        </div>
                                        <CustomButton type='submit'>Save</CustomButton>
                                    </form>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key='faq' title='Вопросы'>
                            <Card>
                                <CardBody>
                                    <form onSubmit={handleSubmit}>
                                        <CheckboxGroup
                                            label="Добавить вопросы:"
                                            value={formData.faqIds}
                                            onChange={(value) => handleInputChange('faqIds', value)}
                                        >
                                            {formData.tour_faqs.map(el => (
                                                <Checkbox key={el.id}
                                                          onValueChange={(e) => removeFaq(e, el.tour_faqs, el.id)}
                                                          value={el.id}>{el.name}</Checkbox>
                                            ))}
                                        </CheckboxGroup>
                                        <CustomButton type='submit'>Save</CustomButton>
                                    </form>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
            )
            }
        </>
    );
};

export default AdminMainTour;