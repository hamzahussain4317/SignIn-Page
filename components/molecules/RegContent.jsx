import BlockLogo from '../atoms/Block-logo'
import RegTextheading from '../atoms/RegTextHeading'
import RegTextPara from '../atoms/RegtextPara'
import RegImage from '../atoms/RegImage'


export default function RegText({Variables}) {
    return (
        <div className="register-content">
            <BlockLogo />
            <div className="register-text">
                <RegTextheading Variables={Variables}/>
                <RegTextPara  Variables={Variables}/>
            </div>
            <RegImage />
        </div>


    )
}