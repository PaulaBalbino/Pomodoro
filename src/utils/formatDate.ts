import { format } from "date-fns";


export function formatDate(timestamp: number) {
	const date = new Date(timestamp);
	return format(date, 'dd/MM/yyyy HH:mm')
}

//para mais infos ver documentacao do date fns