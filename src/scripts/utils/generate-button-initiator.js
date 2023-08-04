import { createGenerateButton } from '../views/templates/template-creator';

const GenerateButtonInitiator = {
  async init(generateButtonContainer) {
    this._generateButtonContainer = generateButtonContainer;
    // this._quote = quote;

    await this._renderButton;
  },
  async _renderButton() {
    this._generateButtonContainer.innerHtml = createGenerateButton();
    const generateBtn = document.querySelector('#generate-quote');
    generateBtn.addEventListener('click', () => {
      const textToPrint = 'hello world';
      console.log(textToPrint);
    });
  },
};

export default GenerateButtonInitiator;
