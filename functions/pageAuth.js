export function redirectPage(page) {
    return {
        redirect: {
            destination: '/' + page,
            permanent: false
        }
    }
}