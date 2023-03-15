const capitalizeFirstLetter = (str: string): string => {
	const newStr = str[0].toUpperCase() + str.slice(1);
	return newStr;
};

export { capitalizeFirstLetter };
