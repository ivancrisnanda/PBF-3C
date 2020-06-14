import React from "react";

const Mahasiswa = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="http://placeimg.com/640/480/any" alt="Gambar Tumbnail Mahasiswa" />
            </div>
            <div className="konten-mahasiswa">
                <table className="table table-borderless">
                    <tr>
                        <td>NIM</td>
                        <td>:</td>
                        <td>{props.nim}</td>
                    </tr>
                    <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>{props.nama}</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>:</td>
                        <td>{props.alamat}</td>
                    </tr>
                    <tr>
                        <td>No Hp</td>
                        <td>:</td>
                        <td>{props.hp}</td>
                    </tr>
                    <tr>
                        <td>Angkatan</td>
                        <td>:</td>
                        <td>{props.angkatan}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>:</td>
                        <td>{props.status}</td>
                    </tr>
                </table>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}

export default Mahasiswa;