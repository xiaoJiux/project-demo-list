import http from "@/utils/request";

export const getUserInfo = (data?: any) => http("get", "/api/home", data);
