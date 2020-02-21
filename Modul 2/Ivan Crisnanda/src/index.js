import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import myPhoto from  './photo.jpg'; 
// import App from './App';
import * as serviceWorker from './serviceWorker';

 const Biodata = () => {
 	return(  
 		<div className="Biodata"> 
 			<header className="App-header">
 				<h2 id="bio">Biodata</h2>
 				<img src={myPhoto} alt="" id="photo"/>
 				<br></br> 
 				<p>
 					<table id="table" align="center" className="table table-responsive-sm">
 						<tr>
 							<td> Nama</td><td>:</td><td>Ivan Crisnanda</td>
 						</tr>
 						<tr>
 							<td>Nim</td><td>:</td><td>1741720024</td>
 						</tr>
 						<tr>
 							<td>Prodi</td><td>:</td><td>D-4 Teknik Informatika</td>
 						</tr>
 						<tr>
 							<td>no hp</td><td>:</td><td>081231672170</td>
 						</tr>
 						<tr>
 							<td>alamat</td><td>:</td><td>anggrek garuda 41</td>
 						</tr>
 					</table>
 				</p>		 	 
 			</header>
		</div> 	
 	)
 }


ReactDOM.render(<Biodata />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
