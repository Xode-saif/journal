"use client"
import { baseUrl } from "./baseUrl";

type RequestOptions = {
    method?: "GET" | "POST";
    body?: any;
    shouldCache?: boolean;
    tags?: string[];
};

const apiRequest = async (
    url: string,
    options: RequestOptions = {}
) => {
    const {
        method = "GET",
        body,
        shouldCache = false,
        tags,
    } = options;

    const fetchUrl = url.startsWith("http")
        ? url
        : baseUrl + url;

    try {
        const requestConfig: RequestInit & { next?: any } = {
            method,
            headers: { "Content-Type": "application/json" },
            keepalive: true,
            credentials: "include",
        };

        if (body) {
            requestConfig.body = JSON.stringify(body);
        }

        if (shouldCache) {
            requestConfig.next = { revalidate: 86400, tags };
        } else {
            requestConfig.cache = "no-cache";
        }

        const response = await fetch(fetchUrl, requestConfig);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error(`API ${method} error:`, error);
        return false;
    }
};
export const fetchGet = (
    url: string,
    options?: Omit<RequestOptions, "method" | "body">
) => {
    return apiRequest(url, { ...options, method: "GET" });
};
export const fetchPost = (
    url: string,
    body: any,
    options?: Omit<RequestOptions, "method">
) => {
    return apiRequest(url, { ...options, method: "POST", body });
};


export const loginUser = async(email:string,password:string)=>{
    const response = await fetchPost("/auth/login",{email,password});
    return response;
}
export const registerUser = async(name:string,email:string,password:string)=>{
    const response = await fetchPost("/auth/register",{name,email,password});
    return response;
}