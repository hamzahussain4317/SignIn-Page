export default function ActionLink({Variables}) {
    return (
        <div className="action-link">
            <p>{Variables.ActionPara} <a href="register.html">{Variables.ActionReg}</a></p>
        </div>

    )
}