export async function analyzeBowling() {
  console.log("Calling backend...");
  
  const res = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Backend request failed");
  }

  return res.json();
}
