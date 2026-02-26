import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatDateRange = (startDate: string, endDate: string): string => {
	const formatOptions: Intl.DateTimeFormatOptions = {
		month: "long",
		year: "numeric",
	};

	const formattedStart = new Date(startDate).toLocaleDateString(
		"en-US",
		formatOptions
	);

	const formattedEnd =
		endDate.toLowerCase() === "present"
			? "Present"
			: new Date(endDate).toLocaleDateString("en-US", formatOptions);

	return `${formattedStart} - ${formattedEnd}`;
};
