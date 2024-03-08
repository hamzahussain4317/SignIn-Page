import EmailLabel from '../atoms/EmailLabel'
import EmailInput from '../atoms/EmailInput'

export default function EmailField({ Variables }) {
    return (
        <div className="form-group email mb-20">
            <EmailLabel Variables={Variables} />
            <EmailInput  />
        </div >
    )
}