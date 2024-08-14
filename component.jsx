/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Y4kpDFk9piY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-black">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8 text-primary-foreground">
          <img
            src="/placeholder.svg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            width={1920}
            height={1080}
            style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
          />
          <div className="flex items-center gap-6">
            <img
              src="/placeholder.svg"    // Change to the actual image path
              alt="Shota Tonari"
              className="w-32 h-32 rounded-full object-cover"
              width={128}
              height={128}
              style={{ aspectRatio: "128/128", objectFit: "cover" }}
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold tracking-tight mb-4">Shota Tonari</h1>
              <p className="text-xl max-w-[700px]">
                IT Professional with a passion for helping businesses and individuals succeed in the digital era.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Resume
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Work Experience</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">IT Consulting Coordinator</h3>
                  <p className="text-muted-foreground mb-1">Mann Consulting | Present</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Developed and maintained web applications using React, Node.js, and MongoDB.</li>
                    <li>Collaborated with cross-functional teams to design and implement new features.</li>
                    <li>Participated in code reviews and provided technical guidance to junior developers.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Residential Networking Technical Support</h3>
                  <p className="text-muted-foreground mb-1">ResNet; University of California, Santa Cruz | 2023 - 2024</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Assisted in the development and testing of web applications.</li>
                    <li>Gained experience in agile development methodologies and project management.</li>
                    <li>Participated in team meetings and presentations.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">IT Support</h3>
                  <p className="text-muted-foreground mb-1">ResNet; University of California, Santa Cruz | 2022 - 2023</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provided technical support to users and administrators.</li>
                    <li>Assisted in the installation and configuration of new IT systems.</li>
                    <li>Maintained and monitored the IT infrastructure.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Education</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Bachelor in Network and Digital Technology</h3>
                  <p className="text-muted-foreground mb-1">University of California, Santa Cruz | 202 - 2019</p>
                  <p className="text-muted-foreground">Graduated with Honors</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">High School Diploma</h3>
                  <p className="text-muted-foreground mb-1">Somewhere High School | 2011 - 2015</p>
                  <p className="text-muted-foreground">Graduated with Distinction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-2">Programming Languages</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>Java</li>
                  </ul>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-2">Frameworks & Libraries</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Django</li>
                  </ul>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-2">Tools & Technologies</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-2">Soft Skills</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Problem-solving</li>
                    <li>Teamwork</li>
                    <li>Communication</li>
                    <li>Adaptability</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Certifications</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">AWS Certified Solutions Architect - Associate</h3>
                  <p className="text-muted-foreground mb-1">Issued by Amazon Web Services | 2021</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scrum Master Certification</h3>
                  <p className="text-muted-foreground mb-1">Issued by Scrum Alliance | 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Achievements</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Hackathon Winner</h3>
                  <p className="text-muted-foreground mb-1">Acme Hackathon | 2021</p>
                  <p className="text-muted-foreground">
                    Won the Acme Hackathon with a team for developing a innovative web application.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Published Article</h3>
                  <p className="text-muted-foreground mb-1">Tech Blog | 2020</p>
                  <p className="text-muted-foreground">Published an article on the latest trends in web development.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Hobbies & Interests</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Photography</h3>
                  <p className="text-muted-foreground">
                    I enjoy capturing the beauty of the world through my camera lens.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hiking</h3>
                  <p className="text-muted-foreground">
                    I love exploring the great outdoors and going on hiking adventures.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reading</h3>
                  <p className="text-muted-foreground">
                    I'm an avid reader and enjoy delving into a wide range of literary genres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Email
            </Link>
            <Link href="#" prefetch={false}>
              LinkedIn
            </Link>
            <Link href="#" prefetch={false}>
              GitHub
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Resume
            </Link>
            <Link href="#" prefetch={false}>
              Portfolio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}