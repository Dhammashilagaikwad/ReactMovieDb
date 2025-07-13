import { useEffect, useState } from "react";

function useFetchData(apiPath,extra=[]) {
    console.log(apiPath);
    var [record, setRecord] = useState([]);

    useEffect(() => {
        fetch(apiPath)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setRecord(data.results);
            })
    }, extra);
    return record;
}

export default useFetchData;