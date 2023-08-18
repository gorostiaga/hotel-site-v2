import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.name || !body.phone || !body.text) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "WTF!" });
  }

  //Send the data!
  const data = {
    name: body.name,
    number: body.phone,
    text: body.text,
  };
  const JSONdata = JSON.stringify(data);
  const endpoint = "http://54.207.148.233:5000/apiV1/question";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };
  try {
    const response = await fetch(endpoint, options);
    const result = await response.json();
    // Send the result as the response
    res.status(200).json(result);
  } catch (error) {
    console.error("Error sending data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}
