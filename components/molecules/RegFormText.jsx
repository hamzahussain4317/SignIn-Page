import RegFormTextHeading from "../atoms/RegFormTextHeading"
import RegFormTextPara from "../atoms/RegFormTextPara"
export default function RegFormText({Variables}) {
    return (
        <div className="register-form-text">
            <RegFormTextHeading Variables={Variables}/>
            <RegFormTextPara Variables={Variables}/>
        </div>
    )
}

