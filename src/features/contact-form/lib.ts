

// const TOKEN = "";
// const CHAT_ID = "";
// const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setIsLoading(true);

//     const text = `
//     📩 New Form Submission:\n
//     👤 Name: ${formValues.name}\n
//     📧 Phone: ${formValues.phone}\n
//     📍 Service: ${slug?.replaceAll("-", " ")?.toLocaleUpperCase() || "General Inquiry"}\n
//     💬 Message: ${formValues.message || "No message"}
//     `;

//     fetch(URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chat_id: CHAT_ID,
//         text: text,
//         parse_mode: "HTML",
//       }),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(t("error_message"));
//         }
//         setFormValues({
//           name: "",
//           phone: "",
//           message: "",
//         });
//         alert(t("success_message"));
//         return res.json();
//       })
//       .catch((err) => alert("Error: " + err))
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }