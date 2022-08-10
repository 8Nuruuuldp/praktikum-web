import express from "express";
const app = express();
app.use(express.json());
const port = 7000;

app.get("/", (req, res) => {
    res.send({
        nama: "Nurul Dwi Pajriah",
    });
});

app.get("/makanan", (req, res) => {
    res.send([
        {
            id: 1,
            nama: "Mie Sedaap",
            rasa: "Ayam Bawang",
        },
        {
            id: 2,
            nama: "indomie",
            rasa: "Ayam Bawang"
        },
    ]);
});

app.get("/minuman", (req, res) => {
    res.send([
        {
            id: 1,
            nama: "Marimas",
            rasa: "Jeruk",
        },
        {
            id: 2,
            nama: "Tea Jus",
            rasa: "Gula batu",
        },
    ]);
});

app.post("/create", (req, res) => {
    res.send([
        nama.req.body,
    ]);
});

app.listen(port, () => {
    console.log(`Aplikasi Berjalan di port ${port}`);
});