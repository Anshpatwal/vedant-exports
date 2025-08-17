import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// init resend
const resend = new Resend(process.env.RESEND_API_KEY);

// API endpoint for form submission
app.post("/api/send-inquiry", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // send email
    await resend.emails.send({
      from: "Inquiry Form <onboarding@resend.dev>", // replace with your domain email
      to: "anshpatwal2703@gmail.com", // your inbox
      subject: "New Website Inquiry",
      html: `
        <h2>New Inquiry from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Inquiry sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send inquiry" });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await resend.emails.send({
      from: "Inquiry Form <onboarding@resend.dev>",
      to: "anshpatwal2703@gmail.com",
      subject: `New Inquiry: ${subject}`,
      html: `
        <h2>New Inquiry from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Inquiry sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send inquiry" });
  }
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
