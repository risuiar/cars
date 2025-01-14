import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return <div className='p-5'>
        404 page not found
        <br /><br />
        <Link to="/" className='underline'>Go back to search</Link>
    </div>
}

export default NotFoundPage
