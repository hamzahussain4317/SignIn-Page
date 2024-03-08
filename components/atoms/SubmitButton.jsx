export default function SubmitButton({Variables}) {
    return (
        <div className="form-btn">
            <button type="submit" className="btn-filled">{Variables.Login}</button>
        </div>
    )
}