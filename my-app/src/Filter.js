function Filter ({filter, sort, filtered}) {
        return (
            <div className="buttons">                
                <button onClick={() => filter('all')}  value="All" className={filtered ? "statusSelected" : "status"}>All</button>
                <button onClick={() => filter('done')} value="Done" className={filtered ? "statusSelected" : "status"}>Done</button>
                <button onClick={() => filter('undone')} value="Undone" className="status">Undone</button>
                <p className="lettering">
                    Sort by date
                </p>
                <button onClick={() => sort('sortDown')} value="sortDown" className ="arrow"> \/ </button>
                <button onClick={() => sort('sortUp')} value="sortUp" className ="arrow"> /\ </button>
            </div>
        )
}

export default Filter;