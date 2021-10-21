function Filter ({filter, sort, handleFiltering}) {
    return (
        <div className="buttons"> 
            {filter === 'all' 
            ? <button onClick={() => handleFiltering('all')}  value="All" className="statusSelected">All</button>
            : <button onClick={() => handleFiltering('all')}  value="All" className="status">All</button>
            }
            {filter === 'done'
            ? <button onClick={() => handleFiltering('done')} value="Done" className="statusSelected">Done</button>   
            : <button onClick={() => handleFiltering('done')} value="Done" className="status">Done</button>
            }
            {filter === 'undone'
            ? <button onClick={() => handleFiltering('undone')} value="Undone" className="statusSelected">Undone</button>
            : <button onClick={() => handleFiltering('undone')} value="Undone" className="status">Undone</button>
            }          
                   
            <p className="lettering">
                Sort by date
            </p>

            

            <button onClick={() => sort('sortDown')} value="sortDown" className ="arrow"> \/ </button>
            <button onClick={() => sort('sortUp')} value="sortUp" className ="arrow"> /\ </button>
        </div>
    )
}

export default Filter;