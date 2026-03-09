const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
             // const url = a.href
                const url = a.getAttribute("href")
            })
        })
    },
    go: (route, addToHistory=True) => {
        console.log(`Going to ${route}`)
    }
}

export default Router;