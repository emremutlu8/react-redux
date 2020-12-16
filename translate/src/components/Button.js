import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // static contextType = LanguageContext; // Kesinlikle böyle görünmeli, the context system'i kullanma şartı bu
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Onayla';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Onayla';
    return (
      <ColorContext.Consumer>
        {(color) =>
          this.renderButton(color)
        }
      </ColorContext.Consumer>
    );
  }
}
// Button.contextType = LanguageContext; => Bunu burda tanımlarsak static olanla aynı işlemi görüyor.

export default Button;