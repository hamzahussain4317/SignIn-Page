import ActionLink from '../atoms/ActionLink'
import RegFormText from '../molecules/RegFormText'
import EmailField from '../molecules/EmailField'
import PasswordField from '../molecules/PasswordField'
import RememberCheck from '../molecules/RememberCheck'
import ForgetPassword from '../atoms/ForgetPassword'
import SubmitButton from '../atoms/SubmitButton'
import ActionLinkM from '../atoms/ActionLinkM'
export default function RightSide({Variables}) {
    return (
        <div className="right-side">
            <ActionLink Variables={Variables}/>
            <div className="register-inner">
                <RegFormText Variables={Variables}/>
                <div className="form-area">
                    <form action="" autoComplete='off'>
                        <EmailField Variables={Variables}/>
                        <PasswordField Variables={Variables}/>
                        <div className="register-action">
                            <RememberCheck Variables={Variables}/>
                            < ForgetPassword Variables={Variables}/>
                        </div>
                        <SubmitButton Variables={Variables}/>
                    </form>
                </div>
                <ActionLinkM Variables={Variables}/>
            </div>
        </div>
    )
}