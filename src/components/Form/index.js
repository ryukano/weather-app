import React from 'react';

class Form extends React.Component {
   constructor(props) {
      super(props);

      this.checkingCorrectInput = this.checkingCorrectInput.bind(this);
   }

   checkingCorrectInput(e) {
      let regex = new RegExp(/[^a-zA-Z]/gi);
      if (regex.test(e.target.value)) {
         alert("Введите название города на латинице");
         e.target.value = e.target.value.replace(/[^a-zA-Z]/gi,'');
      }
   }

   render() {
      const gettingData = this.props.gettingData;
      console.log(this.props);
      return (
         <form onSubmit = {gettingData}>
            <input type="text" name="city" onKeyUp={this.checkingCorrectInput} required placeholder="Название города" />
            <button className="button">Подтвердить</button>
         </form>
      )
   }
}

export default Form;
