export default function ActionLinkMobView({ Variables }) {
    return (
        <div className="action-link mob-view">
            <p>{Variables.ActionPara} <a href="register.html">{Variables.ActionReg}</a></p>
        </div>
    )
}