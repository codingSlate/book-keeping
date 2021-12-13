import { Fragment, useRef } from 'react'
import uniqid from 'uniqid'

const Input = ({ type, labelText, ...props }) => {
    // to stop generate id frequently when this component gets render we use useRef
    const id = useRef(uniqid())
    return (
        <Fragment>
            <label htmlFor={id.current}>{labelText}</label>
            {type === 'textarea' ?
                <textarea id={id.current} {...props}></textarea> :
                <input id={id.current} {...props} />
            }
        </Fragment>
    )
}
export default Input