export function getEnvValue<T = string>(key: keyof ViteEnv): T {
	const envValue = import.meta.env[key];
	return (envValue === "true" ? true : envValue === "false" ? false : envValue) as unknown as T;
}