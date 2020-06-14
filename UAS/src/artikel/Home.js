import React, { Component } from "react";
import Firebase from "../Firebase/firebase"
class Home extends Component {
  
  handleLogoutAccount() {
    const user = Firebase.auth().currentUser;
    try {
      console.log("Goodbye: " + user.email);
    } catch (e) {
      alert(e);
    }
  }

    render() {
        const { isLoggingOut, logoutError } = this.props;
       return(
            <div>
               <button
          className="btn-Signout"
          onClick={() => {
            Firebase.auth().signOut();
            this.handleLogoutAccount();
          }}
        >
          Logout
        </button>
            </div>
            
        );
    }
}


export default Home;