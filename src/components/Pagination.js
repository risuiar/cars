import { Link } from "react-router-dom";
import cn from 'clsx'
import PropTypes from 'prop-types';

const Page = ({ page, selected, totalPageCount }) => {
    const isRoundedLeft = page === 1
    const isRoundedLast = page === totalPageCount
    return (
        <li>
            <Link to={{ pathname: `/${page}` }} className={cn("flex items-center justify-center px-4 h-10 leading-tight  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                ,isRoundedLeft && 'rounded-l-lg',
                isRoundedLast && 'rounded-r-lg',
                selected ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800")}>
                {page}
            </Link>
        </li>
    );
};

const Pagination = ({ currentPage, totalPageCount }) => {
    const pages = Array.from(Array(totalPageCount).keys())
    return (
        <div className="flex items-center justify-center mt-10 pb-10 w-full pt-10">
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    {pages.map((index) => {
                        const page = index + 1
                        return <Page key={page} page={page} totalPageCount={totalPageCount} selected={currentPage === page} />
                    })}
                </ul>
            </nav>
        </div>
    );
};
Page.propTypes = {
    page: PropTypes.number.isRequired,
    selected: PropTypes.bool,
    totalPageCount: PropTypes.number.isRequired
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPageCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination
