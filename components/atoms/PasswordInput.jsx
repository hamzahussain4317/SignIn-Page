export default function PasswordInput() {
    return (
        <input type="password" className="form-control password" id="password-field"
            placeholder="Enter password here" name="user_password" autoComplete="new-password"
            required />
    )
}