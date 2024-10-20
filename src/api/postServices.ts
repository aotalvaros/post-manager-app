import { IFormState } from "../types";
import { apiInstance } from "./apiInstance";

export const getData = async(url:string): Promise<any> => {
    const response = await apiInstance.get( url );
    return response.data;
}

export const putData = async(url:string, data: IFormState): Promise<any> => {
    const response = await apiInstance.put( url, data, );
    return response.data;
}

export const deleteData = async(url:string): Promise<any> => {
    const response = await apiInstance.delete( url );
    return response.data;
}