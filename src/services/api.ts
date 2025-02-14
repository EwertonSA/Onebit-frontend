import axios from "axios";

const baseURL= process.env.NEXT_PUBLIC_BASEURL;
console.log("Base URL:", baseURL);

export const api = axios.create({
   
    baseURL,
})