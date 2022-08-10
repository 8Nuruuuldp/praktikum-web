const {createApp,ref } = Vue
const app = createApp({
    setup() {
        const kegiatan = ref ("");
        const dataKegiatan = ref(["Makan", "Minum"]);
        const modeUpdate=ref(false);

        const tambahKegiatan = () => {
            dataKegiatan.value.push(kegiatan.value);
            kegiatan.value = "";
        };

        const hapusKegiatan = (index) => {
            dataKegiatan.value.splice(index,1);
        };

        const getDataKegiatan = (kegiatan) => {
            modeUpdate.value=true;
            kegiatan.value="";
        };

        const updtaeKegiatan = (index) => {
            modeUpdate.value=true;
            modeUpdate.value=false;
            dataKegiatan.value[index] = kegiatan.value;
        };

        return {
            kegiatan,
            dataKegiatan,
            tambahKegiatan,
            hapusKegiatan,
        };
    },
});

app.mount("#app");
