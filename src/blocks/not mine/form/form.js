class Form {
  constructor(element) {
    this.element = element;
    this.preventSending();
  }

  preventSending() {
    this.element[0].addEventListener('click', (event) => event.preventDefault());
  }
}

export default Form;
