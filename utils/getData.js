import axios from "axios";

export default async function getData (type) {
    const res = await axios.get(`/api/${type}`);
    const allValks = res.data.entriesData;
    return allValks
}

      
