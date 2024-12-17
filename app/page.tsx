import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farouk Daadaa - Resume',
  description: 'Resume of Farouk Daadaa - Computer Engineering Student',
}

export default function ResumePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <object
        data="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        className="absolute inset-0"
      >
        <p>It appears you don't have a PDF plugin for this browser. You can <a href="/resume.pdf">click here to download the PDF file.</a></p>
      </object>
    </div>
  )
}

