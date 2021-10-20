function Pages ({TASK_PER_PAGE, total, paginate, prevPage, nextPage }) {
    const pageNumber =  []
    const nextPageArrow = ">>"
    const prevPageArrow = "<<"


    for (let i = 1; i <= Math.ceil(total/TASK_PER_PAGE); i++) {
        pageNumber.push(i)
    }

    return (
        <div className="pages">
            <button className="prevPage"onClick={prevPage}> {prevPageArrow} </button>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li className="nuber" key={number}>
                        <a href="!#" 
                            className="page" 
                            onClick={() => paginate(number)}>
                                {number}
                        </a>
                    </li>
                ))}
            </ul>
            <button className="nextPage" onClick={nextPage}> {nextPageArrow} </button>
        </div>
    )
    
}

export default Pages