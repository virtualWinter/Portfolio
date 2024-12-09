'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    })

    const mailOptions = {
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.CONTACT_EMAIL,
        subject: `New message from ${name}`,
        text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    }

    try {
        await transporter.sendMail(mailOptions)
        return { success: true, message: 'Email sent successfully' }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, message: 'Failed to send email' }
    }
}

