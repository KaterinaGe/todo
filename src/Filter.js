import 'antd/dist/antd.css';
import { Radio } from 'antd'

function Filter ({filterBy, order, setFilterBy, setOrder }) {
    return (
        <div className="buttons"> 
            <Radio.Group value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
                <Radio.Button value=''>All</Radio.Button>
                <Radio.Button value='done'>Done</Radio.Button> 
                <Radio.Button value='undone'>Undone</Radio.Button>       
            </Radio.Group>
            <p className="lettering">
                Sort by date
            </p>
            <Radio.Group value={order} onChange={(e) => setOrder(e.target.value)}>
                <Radio.Button value='asc'> \/ </Radio.Button>
                <Radio.Button value='desc'> /\ </Radio.Button>
            </Radio.Group>
        </div>
    )
}

export default Filter;