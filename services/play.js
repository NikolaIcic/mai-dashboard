import { apiFetchPost } from "../functions/apiCalls";

const apiPlayTicket = process.env.NEXT_PUBLIC_API_ROUTE + 'play';

export async function playTicket(data) {
    return await apiFetchPost(apiPlayTicket, data);
}