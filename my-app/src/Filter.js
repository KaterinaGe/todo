function Filter ({filter, sort, }) {
    return (
        <div className="buttons"> 
            {filter 
            ? <button onClick={() => filter('all')}  value="All" className="statusSelected">All</button>
            : <button onClick={() => filter('all')}  value="All" className="status">All</button>
            }
            {filter 
            ? <button onClick={() => filter('done')} value="Done" className="statusSelected">Done</button>   
            : <button onClick={() => filter('done')} value="Done" className="status">Done</button>
            }
            {filter 
            ? <button onClick={() => filter('undone')} value="Undone" className="statusSelected">Undone</button>
            : <button onClick={() => filter('undone')} value="Undone" className="status">Undone</button>
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