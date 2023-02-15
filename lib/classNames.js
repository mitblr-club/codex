export const classNames = (...classes) => 
	classes.filter((a) => a = !!a).join(" ");