import Notiflix from 'notiflix';

const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
  console.log(`${delay.value}, ${step.value}, ${amount.value}`)

  let delayCounter = 0;
  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, delayCounter)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayCounter = delay + step;
  }
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);

  });
}