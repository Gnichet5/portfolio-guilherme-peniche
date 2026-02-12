import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Validação de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Rate limiting simples
const recentSubmissions = new Map<string, number>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const lastSubmission = recentSubmissions.get(ip) || 0
  
  if (now - lastSubmission < 60000) return false
  
  recentSubmissions.set(ip, now)
  
  // Limpar cache antigo
  for (const [key, value] of recentSubmissions.entries()) {
    if (now - value > 300000) recentSubmissions.delete(key)
  }
  
  return true
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Aguarde 1 minuto antes de enviar outra mensagem.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, subject, message, honeypot } = body

    // Anti-spam
    if (honeypot) {
      return NextResponse.json({ error: 'Spam detectado' }, { status: 400 })
    }

    // Validações
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    if (message.length < 4) {
      return NextResponse.json(
        { error: 'Mensagem muito curta (mínimo 4 caracteres)' },
        { status: 400 }
      )
    }

    // Configurar email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
        })

    await transporter.verify()

    // Email para você
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfólio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #4f46e5;">Nova Mensagem do Portfólio</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Assunto:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #4f46e5;">
            <h3>Mensagem:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Enviado em ${new Date().toLocaleString('pt-BR')}
          </p>
        </div>
      `
    })

    // Email de confirmação
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Recebi sua mensagem! - Guilherme Peniche',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #4f46e5;">Olá ${name}!</h2>
          <p>Recebi sua mensagem e vou responder em breve.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Sua mensagem:</strong></p>
            <p style="white-space: pre-wrap; color: #666;">${message}</p>
          </div>
          
          <p>Obrigado pelo contato!</p>
          <p style="margin-top: 30px;">
            <strong>Guilherme Peniche Cordeiro</strong><br>
          </p>
        </div>
      `
    })

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada! Verifique seu email para confirmação.'
    })

  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}