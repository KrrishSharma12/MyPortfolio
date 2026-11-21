
import {generateContactEmail} from "./emailTemplate.js";
import dotenv from "dotenv";
dotenv.config();
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (name, subject, email, message) => {
    const { data, error } = await resend.emails.send({
        from: "Portfolio <contact@krrishlabs.tech>",
        to: ['krrishxtech@gmail.com'],
        subject: subject,
        replyTo: email,
        html: generateContactEmail({
            name,
            email,
            subject,
            message,
        }),
    });

    if (error) {
        return { success: false, error: error.message };
    }


}
