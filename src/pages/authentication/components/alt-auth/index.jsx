import React from 'react'
import Wrapper from '../wrapper'
import { Link } from 'react-router-dom'

export default function AltAuth(props) {
    return (
        <Wrapper className="w-full h-20 flex flex-col justify-between items-center">
            <p className='text-xs text-gray-700 text-center'>
                By clicking Submit, you agree to our
                <span className='text-blue-400'> terms and conditions </span>
                and
                <span className='text-blue-400'> privacy policy.</span>
            </p>

            <p className='text-xs text-gray-700 text-center'>
                Already have an account?
                <Link to={`/${props.destination}`} className='text-blue-400'>{props.children}</Link>
            </p>
        </Wrapper>
    )
}
