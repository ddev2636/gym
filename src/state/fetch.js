export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8f54d709c4msh3837e5c5d694768p1de50fjsn2a5b5791132d",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com${url}`,
    exerciseOptions
  );
  const data = await response.json();
  return data;
};
