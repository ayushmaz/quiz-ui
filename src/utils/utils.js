export const decodeHtmlEntities = (str) => {
    let txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}