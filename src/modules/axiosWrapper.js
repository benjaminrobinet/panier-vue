import Axios from "axios";

export default (function axiosWrapper() {
    let endpoint = "https://tools.sopress.net/iut/panier/api/";
    let token = "test@test.fr";
    function setUrl(uri) {
        if(uri.indexOf('?')>-1) {
            uri+= '&'
        } else {
            uri+= '?'
        }
        return endpoint + uri + "token=" + encodeURIComponent(token);
    }

    return {
        get(uri) {
            return Axios.get(setUrl(uri))
        },
        post(uri) {
            return Axios.post(setUrl(uri))
        },
        put(uri) {
            return Axios.put(setUrl(uri))
        },
        delete(uri) {
            return Axios.delete(setUrl(uri))
        },
    };
})();

/*
**** tests d'appel de l'api via axios
axiosWrapper.get("products").then(function(response) {
    console.table(response.data);
});

axiosWrapper.get("route qui n'existe pas").then(function(response) {
    console.table(response);
}).catch(function(error) {
    console.log(error);
});

axiosWrapper.post("cart/1").then(function(response) {
    console.table(response.data);
});

axiosWrapper.post("cart/2").then(function(response) {
    console.table(response.data);
});
*/

