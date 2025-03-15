import { useJadwal } from "../context/JadwalContext";
import { useEffect, useState } from "react";

const KomponenJadwal = ({ jdwl }) => {
    const { hapusJadwal, editJadwal } = useJadwal(); // ✅ Pastikan editJadwal dipanggil di sini
    const [isEditing, setIsEditing] = useState(false);
    const [editedTugas, setEditedTugas] = useState(jdwl.tugas);

    useEffect(() => {
        if (jdwl && jdwl.tugas) {
            console.log(`Tugas ditambahkan: ${jdwl.tugas}`);
            return () => console.log(`Tugas dihapus: ${jdwl.tugas}`);
        }
    }, [jdwl]);

    const handleEdit = () => {
        if (isEditing && editedTugas.trim() !== "") {
            editJadwal(jdwl.id, editedTugas); // ✅ Pastikan fungsi ini berjalan
        }
        setIsEditing(!isEditing);
    };

    if (!jdwl || !jdwl.tugas) return null;

    return (
        <li>
            {isEditing ? (
                <input 
                    type="text"
                    value={editedTugas}
                    onChange={(e) => setEditedTugas(e.target.value)}
                />
            ) : (
                <span>{jdwl.tugas}</span>
            )}
            <button onClick={handleEdit}>{isEditing ? "Simpan" : "Edit"}</button>
            <button onClick={() => hapusJadwal(jdwl.id)}>Hapus</button>
        </li>
    );
};

export default KomponenJadwal;
