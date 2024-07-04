import prisma from '../db/db.config.js'

// Create Page

export const CreatePage = async (req, res) => {
    const {
        url,
        isdel,
        metakeywords,
        metadescription,
        title,
        titlename,
        description,
    } = req.body;

    try {
        // Проверка, существует ли страница с таким URL
        const findPage = await prisma.t_pages.findFirst({
            where: {
                url: url,
            },
        });

        if (findPage) {
            return res.status(400).json({status: 400, message: 'Page with this URL already exists'});
        }

        // Создание новой страницы
        const page = await prisma.t_pages.create({
            data: {
                url,
                isdel,
                metakeywords,
                metadescription,
                title,
                titlename,
                description,
            },
        });

        return res.json({status: 200, message: 'Page created successfully', data: page});
    } catch (error) {
        console.error('Error creating page:', error);
        return res.status(500).json({status: 500, message: 'An error occurred while creating the page'});
    }
};

// Delete Page

export const DeletePage = async (req, res) => {
    const {id} = req.params

    const page = await prisma.t_pages.delete({
        where: {
            id: Number(id),
        },
    })

    return res.json({status: 200, message: 'Page deleted successfully'})
}

// Show all Pages

export const ShowAllPages = async (req, res) => {
    const pages = await prisma.t_pages.findMany({})

    if (!pages)
        return res.json({status: 400, message: 'We did not find any pages'})

    return res.json({status: 200, data: pages})
}

// Show Page

export const ShowPage = async (req, res) => {
    const {id} = req.params
    const page = await prisma.t_pages.findUnique({
        where: {
            id: Number(id),
        },
    })

    if (!page)
        return res.json({status: 400, message: 'We did not find any pages'})

    return res.json({status: 200, data: page})
}

// Edit Page

export const EditPage = async (req, res) => {
    const {id} = req.params
    const {
        url,
        isdel,
        metakeywords,
        metadescription,
        title,
        titlename,
        description,
    } = req.body

    const currentTourType = await prisma.t_pages.findUnique({
        where: {
            id: Number(id),
        },
    });

    // Если текущий URL отличается от нового, проверяем уникальность
    if (currentTourType.url !== url) {
        const findUniqueType = await prisma.t_pages.findFirst({
            where: {
                url: url,
            },
        });

        if (findUniqueType) return res.status(404).send({ message: 'Page with this URL already exists' });
    }

    const page = await prisma.t_pages.update({
        where: {
            id: Number(id),
        },
        data: {
            url,
            isdel,
            metakeywords,
            metadescription,
            title,
            titlename,
            description,
        },
    })
    return res.json({status: 200, message: 'Page is edited', data: page})
}
