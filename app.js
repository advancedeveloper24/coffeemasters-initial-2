import API from "./services/API.js"
import { loadData } from "./services/Menu.js";
import  Store  from "./services/Store.js"
import Router from './services/Router.js'

// Creates a global object attached to window object
window.app = {}
app.store = Store;
app.router = Router;

// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init()
})