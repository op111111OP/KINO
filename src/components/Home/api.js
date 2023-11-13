// Carousel
// Menu
// Home
// Cards
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDZjNmEyYmZkNmQ1MDRiODY0YzIzMTI2NzM3MThhNSIsInN1YiI6IjY1MjQxYmMzZmQ2MzAwMDExYzc3ZGE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6UJmamV2guxBJvRTiiSEVqCqS4jkO545CMafUEV8ZQ",
  },
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error for the caller to handle if needed
  }
};

export { fetchData };
