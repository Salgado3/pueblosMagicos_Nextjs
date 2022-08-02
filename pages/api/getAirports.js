
import {MongoClient} from "mongodb"
export default async function handler(req, res) {
 if(req.method === "POST") {
  const data = req.body
  console.log("data")
   const client = await MongoClient.connect()
   const db = client.db()
 }
}

export async function getStaticPaths() {
return {
  //fallback indicates whether or not all paths are mapped out. Setting it to false tells next.js that all paths are defined
  fallback: true,
  paths[
    {params: {
      airportID:"bjx"
    }},
    {params: {
      airportID:"bjx"
    }},
  ]
}

}

//will never run on client side.
export async function getStaticProps(context) {
  const airportId = context.params.airportID;
  console.log(airportId);
  //fetch data from an API
  //always need to return an object return props:{}
}
