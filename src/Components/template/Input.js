import { Fragment } from 'react/cjs/react.production.min'

const Input = ({ type, labelText, ...props }) => {
    return (
        <Fragment>
            <label htmlFor={props.id}>{labelText}</label>
            {type === 'textarea' ?
                <textarea id={props.id} {...props}></textarea> :
                <input id={props.id} {...props} />
            }
        </Fragment>
    )
}
export default Input