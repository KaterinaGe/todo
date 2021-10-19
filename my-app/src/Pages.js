function Pages ({pages, total, paginate }) {
    const pageNumber =  []

    for (let i = 1; i <= Math.ceil(total/pages); i++) {
        pageNumber.push(i)
    }

    return (
        <div>
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
        </div>
    )
    
}

export default Pages