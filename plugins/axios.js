export default function({ store, app: { $axios },redirect}) {
    $axios.onRequest((config) => {
        // check if the user is authenticated
        if (store.state.auth.accessToken) {
            // set the Authorization header using the access token
            config.headers['x-access-token'] = store.state.auth.accessToken;
        }

        return config;
    });
    $axios.onError((error) => {
        // check if the user is authenticated
        if (error.response.status === (401||undefined)) {
            // console.log(error.response.status)
            store.commit('auth/logout')
            redirect('/login')

        }
    });
}