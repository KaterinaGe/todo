function Filter ({filter, sorted, sort, handleFiltering, }) {
    return (
        <div className="buttons"> 
            <button onClick={() => handleFiltering('all')}  value="All" className={filter === 'all' ? "statusSelected" : "status"}>All</button>
            <button onClick={() => handleFiltering('done')} value="Done" className={filter === 'done' ? "statusSelected" : "status"}>Done</button> 
            <button onClick={() => handleFiltering('undone')} value="Undone" className={filter === 'undone' ? "statusSelected" : "status"}>Undone</button>       
          
            <p className="lettering">
                Sort by date
            </p>

            <button onClick={() => sorted('sortDown')} value="sortDown" className ={sort === 'sortDown' ? "arrowSelected" : "arrow"}> \/ </button>
            <button onClick={() => sorted('sortUp')} value="sortUp" className ={sort === 'sortUp' ? "arrowSelected" : "arrow"}> /\ </button>
        </div>
    )
}

export default Filter;