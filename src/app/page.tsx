import { redirect } from 'next/navigation'

export default function Home() {              // Next.js server-side redirect to current valid website URL
  redirect('https://wicucsd.vercel.app/')
}