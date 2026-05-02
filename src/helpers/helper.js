async function getData() {
  const res = await fetch("https://qurbani-hut-v2-xxxv.vercel.app/data.json");
  const data = await res.json();
  return data;
}

async function getDatWithId(id) {
  const data = await getData();
  return data.find((item) => item.id === Number(id));
}

export { getData, getDatWithId };
