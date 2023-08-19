import http from "@/utils/request";

export const getUserInfo = (data?: any) => {
	return http("get", "/api/PartyGuidance/GetPartyMemberList1", data);
};