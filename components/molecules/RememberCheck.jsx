import RememberChcekLabel from "../atoms/RememberCheckLabel"
import RememberChcekInput from "../atoms/RememberCheckInput"

export default function RememberCheck({Variables}) {
    return (
        <div className="form-check">
            <RememberChcekInput/>
            <RememberChcekLabel Variables={Variables} />
        </div>
    )
}