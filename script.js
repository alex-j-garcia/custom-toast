//@ts-check
// message: string, color: string, timeout: number,icon: string
const toast = (() => {
  /**
   * Creates basic markup for a toast message.
   *
   * @returns {HTMLElement} toast
   */
  const getToastMarkup = () => {
    let toast = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    toast.appendChild(h1);
    toast.appendChild(p);
    return toast;
  };

  /**
   * @param message string
   * @param {ToastOptions} options
   */
  const info = (message, options) => {
    let toast = getToastMarkup(); // getToastMarkup should probably send the icons and messages so all
    // that stuff can be added via .textContent
  };



  // TODO:
  // -How to prevent repetition of code for each?
  //   -maybe they can all call some private function with
  //   -the type of function they are (e.g. info) and the args passed to it
  // -Toast should render on the DOM
  return { info };
})();
