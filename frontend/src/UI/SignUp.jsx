
import {
    Button, Input, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure,
} from '@nextui-org/react'

const SignUp = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    return (<>
            <Button onPress={onOpen} color='c'>
                Регистрация
            </Button>
            <Modal
                className='max-w-[800px]'
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement='top-center'
            >
                <ModalContent>
                    {onClose => (<>
                            <ModalBody>
                                <div>
                                    <div className='flex flex-col gap-2 text-center py-5'>
                                        <h2 className='text-[1.5rem]'>Начни путешествовать по-новому</h2>
                                        <small className='text-[.875em]'>Зарегистрируйтесь сейчас и получите доступ к
                                            эксклюзивным предложениям,
                                            уникальным маршрутам и специальным скидкам на туры по Центральной Азии.
                                            Не упустите возможность первыми узнать о новых направлениях и лучших
                                            ценах! </small>
                                    </div>
                                    <form className='flex flex-col gap-3 pb-3'>
                                        <Input
                                            label='Имя'
                                            placeholder='Ваше имя'
                                            variant='bordered'
                                        />
                                        <Input
                                            label='Email'
                                            placeholder='Ваш Email'
                                            variant='bordered'
                                        />
                                        <Input
                                            label='Телефон'
                                            placeholder='Ваш tелефон'

                                            variant='bordered'
                                        />
                                        <Input
                                            label='Пароль'
                                            placeholder='Ваш пароль'
                                            type='password'
                                            variant='bordered'
                                        />
                                        <Input
                                            label='Пароль'
                                            placeholder='Подтвердите пароль'
                                            type='password'
                                            variant='bordered'
                                        />
                                        <input className='bg-[#198754] py-2 rounded-lg text-white'
                                               value='Согласиться и продолжить' type='submit'/>
                                    </form>
                                </div>
                            </ModalBody>
                            {/* <ModalFooter>
								<Button
									className='text-white'
									color='success'
									onPress={onClose}
								>
									Sign in
								</Button>
							</ModalFooter> */}
                        </>)}
                </ModalContent>
            </Modal>
        </>)
}

export default SignUp
