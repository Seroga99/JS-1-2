const deadline = new Date(2020, 0, 1, 0, 0, 0);

const timer = () => {
  const today = new Date();
  const deadline = new Date(2020, 0, 1, 0, 0, 0);

  let result = deadline - today;

  let sec = Math.floor((result / 1000) % 60);
  let min = Math.floor((result / 1000 / 60) % 60);
  let hours = Math.floor((result / 1000 / 60 / 60) % 60);
  let dayes = Math.floor(result / 1000 / 60 / 60 / 24);

  let secc = document.querySelector('.seconds');
  let minn = document.querySelector('.minutes');
  let hourss = document.querySelector('.hours');
  let dayess = document.querySelector('.days');
  secc.textContent = sec;
  minn.textContent = min;
  hourss.textContent = hours;
  dayess.textContent = dayes;
};
setInterval(timer, 1000);
