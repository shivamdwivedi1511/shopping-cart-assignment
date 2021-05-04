const { useState, useEffect } = require("react");
import axios from '../Utils/axiosConfig'
const useApi = (path) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(path).then(res => setData(res.data)).then(err => console.log(err))
    }, [path]);

    return data;
}

export default useApi