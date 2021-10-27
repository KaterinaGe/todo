function Filter ({filterBy, order, setFilterBy, setOrder }) {
    return (
        <div className="buttons"> 
            <button onClick={() => setFilterBy('')} className={filterBy === '' ? "statusSelected" : "status"}>All</button>
            <button onClick={() => setFilterBy('done')} className={filterBy === 'done' ? "statusSelected" : "status"}>Done</button> 
            <button onClick={() => setFilterBy('undone')} className={filterBy === 'undone' ? "statusSelected" : "status"}>Undone</button>       
          
            <p className="lettering">
                Sort by date
            </p>

            <button onClick={() => setOrder('asc')} value="sortDown" className ={order === 'asc' ? "arrowSelected" : "arrow"}> \/ </button>
            <button onClick={() => setOrder('desc')} value="sortUp" className ={order === 'desc' ? "arrowSelected" : "arrow"}> /\ </button>
        </div>
    )
}

export default Filter;