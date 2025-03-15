import { createContext, useState, useEffect, useContext } from "react";

const JadwalContext = createContext();

export const JadwalGlobal = ({ children }) => {
    const [jadwal, setJadwal] = useState([]);

    useEffect(() => {
        const simpanJadwal = localStorage.getItem("jadwal");
        if (simpanJadwal) {
            try {
                setJadwal(JSON.parse(simpanJadwal));
            } catch (error) {
                console.error("Gagal memuat jadwal dari localStorage:", error);
                setJadwal([]);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("jadwal", JSON.stringify(jadwal));
    }, [jadwal]);

    const tambahJadwal = (tugas) => {
        if (!tugas || typeof tugas !== "string" || tugas.trim() === "") {
            console.warn("Tugas tidak valid:", tugas);
            return;
        }
        setJadwal([...jadwal, { id: Date.now(), tugas: tugas.trim() }]);
    };

    const hapusJadwal = (id) => {
        setJadwal(jadwal.filter((jdwl) => jdwl.id !== id));
    };

    // ✅ Pastikan fungsi editJadwal sudah ada di sini
    const editJadwal = (id, tugasBaru) => {
        setJadwal((prevJadwal) =>
            prevJadwal.map((jdwl) => jdwl.id === id ? { ...jdwl, tugas: tugasBaru.trim() } : jdwl)
        );
    };

    return (
        <JadwalContext.Provider value={{ jadwal, tambahJadwal, hapusJadwal, editJadwal }}>
            {children}
        </JadwalContext.Provider>
    );
};

export const useJadwal = () => useContext(JadwalContext);
