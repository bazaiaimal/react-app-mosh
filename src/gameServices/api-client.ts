import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2d954049a2234dd386e51af250f79a11'
    }
});
