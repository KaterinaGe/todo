import 'antd/dist/antd.css';
import { Card } from 'antd'


function Error ({error, errorWindow, message}) {
    if (!error) return null
    return (
        <Card title="Error!" className="error" onClick={errorWindow}>
            {message}
        </Card>
    )    
}

export default Error;