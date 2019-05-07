export const set = city => localStorage.setItem('last-city-weather', JSON.stringify(city));

export const get = () => {
  const city = localStorage.getItem('last-city-weather');
  return city ? JSON.parse(city) : null;
};
