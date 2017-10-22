

export default () => {
    let url = location.hash
    if (url.startsWith('#/index/')) {
        return 'index'
    } else if (url.startsWith('#/environments/')) {
        return 'environments'
    } else if (url.startsWith('#/docs/')) {
        return 'docs'
    } else if (url.startsWith('#/contribute/')) {
        return 'contribute'
    } else {
        return 'index'
    }
}