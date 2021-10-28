import 'antd/dist/antd.css';
import { Button, Form } from 'antd'

function Pages ({TASK_PER_PAGE, total, paginate, prevPage, nextPage, currentPage}) {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(total/TASK_PER_PAGE); i++) {
        pageNumber.push(i)
    }

    return (
        <Form className="pages">
            <Button className="prevPage" onClick={prevPage}> {'<<'} </Button>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number}>
                        <a href="!#" 
                            className={currentPage === number ? "pageSelected" : "page"} 
                            onClick={() => paginate(number)}>
                                {number}
                        </a>
                    </li>
                ))}
            </ul>
            <Button className="nextPage" onClick={nextPage}> {'>>'} </Button>
        </Form>
    )
    
}

export default Pages