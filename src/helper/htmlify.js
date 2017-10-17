
export const htmlify = html => {
    return element => {
        element.innerHTML = html
    }
}