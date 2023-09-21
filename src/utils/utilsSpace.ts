import { type SpacexTypes } from "../types/SpacesTypes";

export const prerender = false;

export const getLaunches = async () => {


    const res = await fetch('https://api.spacexdata.com/v5/launches/query',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: {},
            options: {
                limit: 12
            }
        })
    });
    const data = (await res.json()) as SpacexTypes ;
    return data;
}



export const getLaunchesById = async (id: string) => {

    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
    const data = await res.json();
    return data;

}