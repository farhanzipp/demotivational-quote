const addTooltips = ({ label }) => {
  label.classList.remove('hidden');
  setTimeout(() => {
    label.classList.add('hidden');
  }, 1000);
};

export default addTooltips;
