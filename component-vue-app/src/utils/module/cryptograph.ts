/*base64加密*/
export function base64Encode(str: string): string {
	return btoa(
		encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
			return String.fromCharCode(Number.parseInt(p1, 16));
		})
	);
}

/*base64解密*/
export function base64Decode(str: string): string {
	return decodeURIComponent(
		atob(str)
			.split("")
			.map(c => {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join("")
	);
}
