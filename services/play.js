import { apiPromisePost } from "../functions/apiCalls";

const apiPlayTicket = process.env.NEXT_PUBLIC_API_ROUTE + 'play';

export async function playTicket(data) {
    const promise = await apiPromisePost(apiPlayTicket,data);
    const res = await promise.json();
    console.log(res);
}