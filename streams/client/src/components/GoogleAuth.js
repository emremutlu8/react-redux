import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  // state = { isSignedIn: null } // Bunu null yapmamız başlangıçta işlem yapılmadığını ifade eder

  componentDidMount() { // Çalıştı mı? Life cycle method
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init ({ // Bunun içine girip clientId'mizi dahil ettik.
        clientId: '943092448602-turnf1dvbd2aj0kob1buim7di4419ple.apps.googleusercontent.com',
        scope: 'email' // Neler istediğimizi bildirdik.
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance(); // Google'a istek gönderdik ve dönüşler aldık
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // True veya false döner
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange); // Sol tarafı dinleyip, sağ tarafı çalıştırıyoruz
      });
    }); // auth2'yi istediğimizi bildirdik ve bu başarıyla çalışınca arrow functionumuzu da çalıştıracak.
  }

    onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
      // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      // State'deki isSignedIn kısmını değiştirdik
    };

    onSignInClick = () => {
      this.auth.signIn();
    };

    onSignOutClick = () => {
      this.auth.signOut();
    };


  renderAuthButton() {
    if (this.props.isSignedIn === null){
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
 return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuth);