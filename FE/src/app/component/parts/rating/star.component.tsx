import { FunctionComponent } from 'react'

interface StarIconProps {
    props?: unknown
}

const StarIcon: FunctionComponent<StarIconProps> = () => {
    return (
        <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 24 24'
            fontSize={18}
            height='18'
            width='18'
            xmlns='http://www.w3.org/2000/svg'
            style={{ color: '#ffc107' }}
        >
            <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'></path>
        </svg>
    )
}

export default StarIcon