import axios, {AxiosRequestConfig} from "axios";

const url = "https://ais.bstu.ru/cms/api/" as string;
const token = "105f886ec1c16bc08e6b3568532072ad725791f8106b26fabc78675414c08837b0a22ee094397577cedc27d8568ca194abbe26ec14d4ea63162097a53bdc8231e63a0c977e648145ab4705cb3d784ff604d2ec7603fd1c36f8580d96363a5f4341b326733e5454b11c63f83297d5627f38cc650b4cd313c6772dc71c3bf6d45d" as string;
const methods = {
    post: 'POST',
    get: 'GET'
}
const config = (method: string, type: string, params: any) => {
    return {
        method: method,
        url: `${url}${type}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: params
    }
};
export const getAbout = axios(
    config(
        methods.get,
        'about',
        {
            locale: localStorage.getItem('locale')
        }
    )
);
export const getOffices = axios(
    config(
        methods.get,
        'about-job',
        {
            locale: localStorage.getItem('locale')
        }
    )
);


export const getNews =  (page: number) => {
    return new Promise(function (resolve, reject) {
        const response= axios(
            config(
                methods.get,
                'news',
                {
                    locale: localStorage.getItem('locale')
                }
            )
        )
        resolve(response);
        reject('error get news')
    });
};
export const getPartners = axios(
    config(
        methods.get,
        'partners',
        {
            locale: localStorage.getItem('locale'),
            populate: '*'
        }
    )
);