const {createApp, ref} = Vue;

const app = createApp({
    setup() {
        const url = "https://http://127.0.0.1:5500/";
        const nameUser = ref ("");
        const lastName = ref ("");
        const image = ref ("");

        const generateUser = async () => {
            const resUser = await axios.get(url);
            nameUser.value = resUser.data.results[0].name.first;
        };
        return{
            generateUser,
            profileUser,
            nameUser,
            lastName,
            image,
        };
    },
});

app.mount("#app");