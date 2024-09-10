import { MailIcon, LinkedinIcon, GithubIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mx-auto">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 mx-auto">
            <Image
              src="/profile.jpg"
              alt="Shota Tonari"
              width={512}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mx-auto">
              Shota Tonari
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              IT / Network / Security / DevOps / Cloud / Automation
            </p>
            <div className="flex flex-col items-center space-y-2 mx-auto">
              <div className="flex items-center space-x-2">
                <MailIcon className="w-4 h-4" />
                <a href="mailto:tona.shota@gmail.com" className="hover:underline">tona.shota@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <LinkedinIcon className="w-4 h-4" />
                <a href="https://linkedin.com/in/shotatonari" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/shotatonari</a>
              </div>
              <div className="flex items-center space-x-2">
                <GithubIcon className="w-4 h-4" />
                <a href="https://github.com/sh0takun" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/sh0takun</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}