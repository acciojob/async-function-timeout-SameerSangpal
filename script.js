const btn = document.getElementById("btn");
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const output = document.getElementById("output");
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
btn.addEventListener("click", async () => {
  const message = textInput.value;
  const delayMs = parseInt(delayInput.value);
  if (!message || isNaN(delayMs) || delayMs < 0) {
    output.textContent = "Please enter valid text and delay.";
    return;
  }
  output.textContent = "";
  await delay(delayMs); 
  output.textContent = message;
});
