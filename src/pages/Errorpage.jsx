import { useNavigate } from 'react-router-dom'
import './ErrorPage.css'
export const ErrorPage = () => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <section className="error-section">
            <h1>Something went wrong...</h1>
            <button className='backButton' onClick={handleGoBack}>Go Back</button>
        </section>
    )
}