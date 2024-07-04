import prisma from '../db/db.config.js'

export const CreateTour = async (req, res) => {
    const {
        typeId,
        teamId,
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
    } = req.body
    const findUniqueType = await prisma.t_tour.findFirst({
        where: {
            url: url
        }
    })

    if(findUniqueType) return res.status(404).send({message: 'Page with this URL already exists'});


    try {
        // Создание тура
        const tour = await prisma.t_tour.create({
            data: {
                typeId,
                teamId,
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
            },
        })

        res.json({status: 200, data: tour, id: tour.id})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Ошибка при создании тура или дня тура'})
    }
}

export const ShowAllTours = async (req, res) => {
    const tour = await prisma.t_tour.findMany({})

    res.json({status: 200, data: tour})
}

export const ShowTour = async (req, res) => {
    const {id} = req.params

    const tour = await prisma.t_tour.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            tour_faqs: true,
            tourtoday: true,
            tourphoto:true
        }
    })

    if (!tour)
        return res.json({status: 400, message: 'We could not find any tour'})

    res.json({status: 200, data: tour})
}

export const EditTour = async (req, res) => {
    const {id} = req.params;
    const {
        typeId,
        teamId,
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
        faqIds,
        tourphoto
    } = req.body;

    const currentTourType = await prisma.t_tour.findUnique({
        where: {
            id: Number(id),
        },
    });

    // Если текущий URL отличается от нового, проверяем уникальность
    if (currentTourType.url !== url) {
        const findUniqueType = await prisma.t_tour.findFirst({
            where: {
                url: url,
            },
        });

        if (findUniqueType) return res.status(404).send({ message: 'Page with this URL already exists' });
    }

    try {
        const tour = await prisma.t_tour.update({
            where: {
                id: Number(id)
            },
            data: {
                typeId,
                teamId,
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
            },
        });

        for (const faq of faqIds) {
            const existingFaq = await prisma.t_tour_faqs.findFirst({
                where: {
                    faqid: faq,
                    tourid: Number(id)
                }
            });

            if (!existingFaq) {
                await prisma.t_tour_faqs.create({
                    data: {
                        tourid: Number(id),
                        faqid: faq
                    }
                });
            }
        }

        for(const photo of tourphoto){
            const existingRecords = await prisma.t_tourphoto.findUnique({
                where: {
                    id: photo.id,
                    tourid: Number(id)
                }
            });


            if (existingRecords) {
                // Если записи существуют, обновляем их
                await prisma.t_tourphoto.updateMany({
                    where: {id: photo.id},
                    data: {
                        tourid: Number(id),
                        photo:photo.photo,
                    },
                });
            } else {

                // Если записи не существуют, создаем новые
                await prisma.t_tourphoto.createMany({
                    skipDuplicates: true,
                    data: {
                        tourid: Number(id),
                        photo:photo.photo,
                    },
                });
            }
        }

        // TourToday model
        for (const t of tourtoday) {
            // Проверяем, существует ли запись с указанным tourid
            const existingRecords = await prisma.t_tourtoday.findUnique({
                where: {
                    id: t.id,
                    tourid: Number(id)
                }
            });


            if (existingRecords) {
                // Если записи существуют, обновляем их
                await prisma.t_tourtoday.updateMany({
                    where: {id: t.id},
                    data: {
                        name: t.name,
                        body: t.body,
                        breakfast: t.breakfast,
                        lunch: t.lunch,
                        dinner: t.dinner,
                        hotels: t.hotels,
                        tourid: Number(id)
                    },
                });
            } else {

                // Если записи не существуют, создаем новые
                await prisma.t_tourtoday.createMany({
                    skipDuplicates: true,
                    data: {
                        name: t.name,
                        body: t.body,
                        breakfast: t.breakfast,
                        lunch: t.lunch,
                        dinner: t.dinner,
                        hotels: t.hotels,
                        tourid: Number(id),
                    },
                });
            }
        }


        return res.json({status: 200, data: tour});
    } catch (error) {
        console.error('Error updating or creating records:', error);
        res.status(500).json({error: 'An error occurred while updating or creating records.'});
    }
};

// controller for deleting tourToday

export const DeleteTourToday = async (req, res) => {
    const {id} = req.params;

    const tourToday = await prisma.t_tourtoday.findUnique({
        where: {
            id: Number(id),
        },
    })

    if (!tourToday)
        return res.json({status: 400, message: 'We could not find this tourToday'})

    const deletedTourToday = await prisma.t_tourtoday.delete({
        where: {
            id: Number(id),
        },
    })

    res.json({
        status: 200,
        message: 'Tour deleted successfully',
        data: deletedTourToday,
    })
}

// controller for deleting tour
export const DeleteTour = async (req, res) => {
    const {id} = req.params

    const tour = await prisma.t_tour.findUnique({
        where: {
            id: Number(id),
        },
    })

    if (!tour)
        return res.json({status: 400, message: 'We could not find this tour'})


    const deletedTour = await prisma.t_tour.delete({
        where: {
            id: Number(id),
        },
    })

    res.json({
        status: 200,
        message: 'Tour deleted successfully',
        data: deletedTour,
    })
}

// controller for deleting tourFaq

export const DeleteTourFaq = async (req, res) => {
    const {id} = req.params
    const faqUnique = await prisma.t_tour_faqs.findUnique({
        where:{
            id: Number(id),
        }
    })
    if(!faqUnique) return res.json({status: 400, message: 'We could not find this faq'})

    const faq = await prisma.t_tour_faqs.delete({
        where: {
            id: Number(id),
        }
    })

    res.json({status: 200, data: faq})
}

export const DeleteTourImages = async (req, res) => {
    const {id} = req.params

    const tourUnique = await prisma.t_tourphoto.findUnique({
        where: {
            id: Number(id),
        }
    })
    if (!tourUnique) return res.json({status: 400, message: 'We could not find this hotel rooms'})

    const tourPhoto = await prisma.t_tourphoto.delete({
        where: {
            id: Number(id),
        }
    })

    res.json({status: 200, data: tourPhoto})
}