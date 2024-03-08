import PasswordLabel from "../atoms/PasswordLabel"
import PasswordInput from "../atoms/PasswordInput"
import PasswordEyeIcon from "../atoms/PasswordEyeIcon"
export default function PasswordField({Variables}) {
    return (
    <div className="form-group password form-field">
        <PasswordLabel Variables={Variables}/>
        <PasswordInput />
        <PasswordEyeIcon />
    </div>
    )
}