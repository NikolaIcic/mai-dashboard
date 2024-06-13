const apiGetLearningGroups = process.env.NEXT_PUBLIC_API_ROUTE + 'learning/list';
const apiStartLearning = process.env.NEXT_PUBLIC_API_ROUTE + 'learning/start/';
const apiStopLearning = process.env.NEXT_PUBLIC_API_ROUTE + 'learning/stop/';

const dataType = process.env.DATA_TYPE;

export async function getLearningGroups() {
    if (dataType == 'static')
        return null;
    const promise = await fetch(apiGetLearningGroups);
    return await promise.json();
}

export async function postStartLearning(learnObj) {
    if (dataType == 'static')
        return;
    const promise = await fetch(apiStartLearning + learnObj.name + '/' + learnObj.algorithm);
    return await promise.text();
}

export async function postStopLearning(folderName) {
    if (dataType == 'static')
        return;
    const promise = await fetch(apiStopLearning + folderName);
    return await promise.text();
}