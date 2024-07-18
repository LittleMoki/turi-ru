// create news

import prisma from '../db/db.config.js'

export const CreateNews = async (req, res) => {
    const {
        new_date,
        header,
        body,
        firsttext,
        lang,
        typeId,
        view,
        photo,
        foto,
        fototext,
        title,
        metakeywords,
        metadescription,
        url,
        publick,
        country,
        tags,
    } = req.body

    // Проверка, существует ли страница с таким URL
    const findPage = await prisma.t_news.findFirst({
        where: {
            url: url,
        },
    });

    if (findPage) {
        return res.status(400).json({status: 400, message: 'Page with this URL already exists'});
    }


    const news = await prisma.t_news.create({
        data: {
            new_date,
            header,
            body,
            firsttext,
            lang,
            typeId,
            view,
            photo,
            foto,
            fototext,
            title,
            metakeywords,
            metadescription,
            url,
            publick,
            country,
            tags,
        },
    })

    res.json({status: 200, data: news})
}

// get news

export const ShowAllNews = async (req, res) => {
    const news = await prisma.t_news.findMany({
        include: {
            type: true,
        },
    })

    return res.json({status: 200, data: news})
}

// get by id news

export const ShowNews = async (req, res) => {
    const {id} = req.params

    const news = await prisma.t_news.findUnique({
        where: {
            id: Number(id),
        },
    })

    if (!news)
        return res.json({status: 400, message: 'We did not find any news'})

    res.json({status: 200, data: news})
}


export const ShowNewsUrlType = async (req, res) => {
    const {url} = req.params


    const news = await prisma.t_news.findMany({
        where: {
            type: {
                url: url
            }
        },
        include: {
            type: true,
        }
    })

    if (news.length >! 0) {
        res.json({status: 400, message: 'No news found'})
    }

    res.json({status: 200, data: news})
}

export const ShowNewsUrl = async (req, res) => {
    const {url} = req.params
    console.log(url,'url')
    const news = await prisma.t_news.findFirst({
        where: {
            url:url,
        }
    })
    res.json({status: 200, data: news })
}

export const EditNews = async (req, res) => {
    const {id} = req.params
    const {
        new_date,
        header,
        body,
        firsttext,
        lang,
        typeId,
        view,
        photo,
        foto,
        fototext,
        title,
        metakeywords,
        metadescription,
        url,
        publick,
        country,
        tags,
    } = req.body

    const currentTourType = await prisma.t_news.findUnique({
        where: {
            id: Number(id),
        },
    });

    // Если текущий URL отличается от нового, проверяем уникальность
    if (currentTourType.url !== url) {
        const findUniqueType = await prisma.t_news.findFirst({
            where: {
                url: url,
            },
        });

        if (findUniqueType) return res.status(404).send({message: 'Page with this URL already exists'});
    }


    const news = await prisma.t_news.update({
        data: {
            new_date,
            header,
            body,
            firsttext,
            lang,
            typeId,
            view,
            photo,
            foto,
            fototext,
            title,
            metakeywords,
            metadescription,
            url,
            publick,
            country,
            tags,
        },
        where: {
            id: Number(id),
        },
    })
    return res.json({status: 200, data: news})
}

// delete news

export const DeleteNews = async (req, res) => {
    const {id} = req.params

    const findNews = await prisma.t_news.findUnique({
        where: {
            id: Number(id),
        },
    })

    if (!findNews)
        return res.json({status: 400, message: 'We did not find any news'})

    const news = await prisma.t_news.delete({
        where: {
            id: Number(id),
        },
    })

    res.json({status: 200, message: 'We deleted news successfully'})
}
