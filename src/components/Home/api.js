// Carousel
// Menu
// Home
// Cards
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e634cc34bfmsh89221f01ce77407p10be94jsn39c2a7ecf4c8",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    alert(
      "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже."
    );
  }
};
export { fetchData };
