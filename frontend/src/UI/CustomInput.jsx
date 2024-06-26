import {Input} from '@nextui-org/react'

const CustomInput = ({
                         type = 'text',
                         label,
                         value,
                         fn,
                         name,
                         description,
                         placeholder = '',
                         white = true,
                     }) => {
    return (
        <Input
            placeholder={placeholder}
            className={`flex flex-col ${white ? '' : 'dark'}`}
            type={type}
            label={label}
            value={value}
            onChange={e => fn(e)
            }
            name={name}
            description={description}
            style={{fontSize: '1rem', fontWeight: '400'}}
            // className='dark'
        />
    )
}

export default CustomInput
