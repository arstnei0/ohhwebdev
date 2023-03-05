export const platform = /mac/gi.test(navigator.userAgent)
	? "mac"
	: /windows/gi.test(navigator.userAgent)
	? "windows"
	: "linux"

export const isMac = platform === "mac"
