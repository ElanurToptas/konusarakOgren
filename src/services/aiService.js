// export const warmupModel = async () => {
//   try {
//     const res = await fetch(
//       "https://router.huggingface.co/hf-inference/models/savasy/bert-base-turkish-sentiment-cased",
//       {
//         method: "POST",
//         headers: {
//           Authorization: " ",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ inputs: "warmup" }),
//       }
//     );

//     console.log("WARMUP MODEL:", await res.text());
//   } catch (err) {
//     console.log("WARMUP ERROR:", err);
//   }
// };

// export const analyzeSentiment = async (text) => {
//   try {
//     const res = await fetch(
//       "https://router.huggingface.co/hf-inference/models/savasy/bert-base-turkish-sentiment-cased",
//       {
//         method: "POST",
//         headers: {
//           Authorization: " ",
//           "Content-Type": "application/json",
//           "X-Wait-For-Model": "true",
//           Accept: "application/json"
//         },
//         body: JSON.stringify({ inputs: text }),
//       }
//     );

//     const raw = await res.text();
//     console.log("HF RAW 🇹🇷:", raw);

//     const data = JSON.parse(raw);

//     if (data && data.label) {
//       return data;
//     }

//     if (Array.isArray(data) && Array.isArray(data[0])) {
//       const best = data[0].sort((a, b) => b.score - a.score)[0];
//       return best;
//     }

//     return null;
//   } catch (err) {
//     console.log("AI ERROR:", err);
//     return null;
//   }
// };


