export let devMode =
	typeof process !== 'undefined'
	? (process.env.NODE_ENV !== "production") 
	: true

export let production = !devMode

export function setDevMode() {
	devMode = true
	production = false
}

export function setProduction() {
	devMode = false
	production = true
}
