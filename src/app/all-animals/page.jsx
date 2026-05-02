import { getData } from "@/helpers/helper";

export default async function Animals() {
  const cows = await getData();
  console.log(cows);
  return <div>Animals</div>;
}
