import { createClient } from "redis";

const client = createClient({
  url: "redis://localhost:6379",
});

async function main(client) {
  try {
    await client.connect();
    client.on("error", (err) => console.error(err));
    await client.set("title", "product1");
    const result = await client.get("title");
    console.log(result);
    client.quit();
  } catch(err) {
    console.error(err);
  }
}
main(client);