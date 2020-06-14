import React, {Component} from "react";
import './BlogPost.css';
import Post from "./Post";
// import API from "../../services";    
import firebase from "firebase";
// import * as firebase from "../Firebase/firebase";
import { logoutUser } from "../actions/auth";
import { connect } from "react-redux";

class BlogPost extends Component{
    // state = {                    // komponen state dari React untuk statefull component
    //     listArtikel: [],         // variabel array yang digunakan untuk menyimpan data API
    //     insertArtikel: {         // variable yang digunakan untuk menampung sementara data yang akan di insert
    //         userId: 1,           // kolom userId, id, title, dan body sama, mengikuti kolom yang ada pada listArtikel.json
    //         id: 1,
    //         title: "",
    //         body: ""
    //     }
    // }
    constructor(props){
        super(props);

        this.state = {
            listArtikel: []
        }
    }

    ambilDataDariServerAPI = () => {                // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);   
        })
        // API.getNewsBlog().then(result => {
        //     this.setState({
        //         listArtikel: result
        //     })
        // })
    }

    simpanDataKeServerAPI = () => {
        firebase.database().ref("/").set(this.state);
    }

    componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()  // ambil data dari server API lokal
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState !== this.state){
            this.simpanDataKeServerAPI();
        }
    }

    handleHapusArtikel = (idArtikel) => {        // fungsi yang meng-handle button action hapus data
        // API.deleteNewsBlog(data)
        //     .then(res => {      // ketika proses hapus berhasil, maka ambil data dari server API lokal
        //         this.ambilDataDariServerAPI()
        //     })
        const {listArtikel} = this.state;
        const newState = listArtikel.filter(data => {
            return data.uid !== idArtikel;
        })
        this.setState({listArtikel: newState})
    }

    handleTambahArtikel = (event) => {      // fungsi untuk meng-hadle form tambah data artikel
        let formInsertArtikel = {...this.state.insertArtikel};      // clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();                       // digunakan untuk menyimpan waktu (sebagai ID artikel)
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;  // menyimpan data onchange ke formInsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = (event) => {            // fungsi untuk meng-handle tombol simpan
        // API.postNewsBlog(this.state.insertArtikel)
        //     .then( (response) => {
        //         this.ambilDataDariServerAPI();                  // reload / refresh data
        //     });
        let title = this.refs.judulArtikel.value;
        let body = this.refs.isiArtikel.value;
        let uid = this.refs.uid.value;

        if (uid && title && body){                  // Cek apakah semuad data memiliki nilai (tidak null)
            const {listArtikel} = this.state;
            const indeksArtikel = listArtikel.findIndex(data => {
                return data.uid === uid;
            })
            listArtikel[indeksArtikel].title = title;
            listArtikel[indeksArtikel].body = body;
            this.setState({listArtikel});
        } else if (title && body){                  // Cek jika apakah tidak ada data di server
            const uid = new Date().getTime().toString();
            const {listArtikel} = this.state;
            listArtikel.push({ uid, title, body });
            this.setState({listArtikel});
        }

        this.refs.judulArtikel.value = "";
        this.refs.isiArtikel.value = "";
        this.refs.uid.value = "";
    }
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
      };

    render() {
        return(
            <React.Fragment>
{/*             
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Notes</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                            </li>
                
                        </ul>
                        <form class="form-inline my-2 my-lg-0"> <button type="submit" className="btn btn-primary" onClick={this.handleLogout}>Logout</button>   
                        </form>
                    </div>
                </nav>     */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">  Applikasi To Do List Sederhana</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0"onClick={this.handleLogout} type="submit">Logout</button>
    </form>
  </div>
</nav>

<br></br>
<div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" ref="judulArtikel"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Masa Berlaku</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" ref="isiArtikel"></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid"/>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {  // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <Post key={artikel.uid} judul={artikel.title} isi={artikel.body} 
                        idArtikel={artikel.uid} hapusArtikel={this.handleHapusArtikel}/>     // mappingkan data json dari API sesuai dengan kategorinya
                    })
                }
            </div>
        
        </React.Fragment>
        );
    }
   
}
 function mapStateToProps(state) {
        return {
          isLoggingOut: state.auth.isLoggingOut,
          logoutError: state.auth.logoutError,
        };
    }

export default connect(mapStateToProps)(BlogPost);