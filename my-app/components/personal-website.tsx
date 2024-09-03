'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseIcon, GraduationCapIcon, MailIcon, PhoneIcon, LinkedinIcon, GithubIcon, CodeIcon, WrenchIcon, GlobeIcon } from "lucide-react"
import Link from 'next/link'; // Add this line

export function PersonalWebsite() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#" prefetch={false}>
          <span className="font-bold">Shota Tonari</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#education" prefetch={false}>
            Education
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills" prefetch={false}>
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#experience" prefetch={false}>
            Experience
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects" prefetch={false}>
            Projects
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Shota Tonari"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Shota Tonari
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Network and Digital Technology Professional
                </p>
                <div className="flex flex-col items-center md:items-start space-y-2">
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-4 h-4" />
                    <span>669-237-6993</span>
                  </div>
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
        
        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Education</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <GraduationCapIcon className="w-4 h-4 mr-2 inline-block" />
                    University of California, Santa Cruz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Bachelor in Network and Digital Technology</p>
                  <p className="text-sm text-muted-foreground">2020 - 2024</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <GraduationCapIcon className="w-4 h-4 mr-2 inline-block" />
                    San Francisco Japanese School
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Japanese High School Diploma</p>
                  <p className="text-sm text-muted-foreground">2009 - 2020</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Technical Skills</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <CodeIcon className="w-4 h-4 mr-2 inline-block" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>C/C++, Python, SQL, HTML/CSS, MATLAB</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <WrenchIcon className="w-4 h-4 mr-2 inline-block" />
                    Developer Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Visual Studio, Git, Gitlab, Bash</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <GlobeIcon className="w-4 h-4 mr-2 inline-block" />
                    Networking Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Wireshark, Mininet, Cisco DNA Center, Identity Service Engine</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <BriefcaseIcon className="w-4 h-4 mr-2 inline-block" />
                    IT Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>ServiceNow, Zendesk, Jira, Jamf, Intune</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Experience</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>IT Consulting Coordinator</CardTitle>
                  <p className="text-sm text-muted-foreground">Mann Consulting, San Francisco, CA | July 2024 - Present</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Manage diverse IT projects for clients, focusing on network infrastructure, cloud solutions, and device management using tools like Cisco Meraki, Jamf, and Intune.</li>
                    <li>Conduct comprehensive IT assessments and implement strategic solutions to optimize workflows, reduce IT spending, and enhance cybersecurity for clients.</li>
                    <li>Coordinate with cross-functional teams to streamline client onboarding, offboarding, and help desk processes, ensuring high-quality service delivery and client satisfaction.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>ResNet Technical Support Specialist</CardTitle>
                  <p className="text-sm text-muted-foreground">University of California, Santa Cruz | Sept. 2023 - June 2024</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Offered Tier 1 technical/networking support to over 8,000 students/faculty members on campus, specializing in ensuring a reliable network experience through triaging, and prioritizing a 200+ ticket queue.</li>
                    <li>Diagnosed and resolved network issues utilizing Cisco DNA Center, Identity Services Engine, and iPSK.</li>
                    <li>Performed Wi-Fi Validation Site Surveys using Netspot and Ekahau, coordinating with 3 other ITS divisions, leveraging ServiceNow and Slack to ensure effective service delivery.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>ITS Learning Technologies Consultant</CardTitle>
                  <p className="text-sm text-muted-foreground">University of California, Santa Cruz | Nov. 2022 - Aug. 2023</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Enhanced productivity for 500+ users through IT consulting services in computer labs and libraries, optimizing workflow and increasing efficiency by 25% for students, TAs, and professors.</li>
                    <li>Operated and managed Windows/Linux/MacOS environments, diagnosed and effectively resolved technical issues.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>ResNet ServiceNow Dashboard</CardTitle>
                  <p className="text-sm text-muted-foreground">Python, Bash | 2024</p>
                </CardHeader>
                <CardContent>
                  <p>Engineered a Flask-driven Raspberry Pi application for visualizing ServiceNow tickets with SLA-based color coding, streamlining issue tracking and response times.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>HealthPredict JPN: Empowering Wellness Through Data Analytics</CardTitle>
                  <p className="text-sm text-muted-foreground">Jun. 2023 - Sept. 2023</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Co-piloted the development of HealthPredict Japan, an innovative digital health platform designed for the Japanese market; leveraged sophisticated data analytics techniques to create predictive models that forecast potential health risks and provide personalized recommendations.</li>
                    <li>Designed a scalable "Hub and Spoke" architecture connecting core services (data collection, analysis, online/offline user touchpoints) and ecosystem partners to maximize reach and impact.</li>
                    <li>Helped the founder integrate personalized health insights into the app to boost user engagement and promote continuous health management.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Simple iPV4 Router</CardTitle>
                  <p className="text-sm text-muted-foreground">Python, Wireshark, Mininet | 2023</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Multi-subnet network topology for a simulated company environment, integrating switches/routers using Mininet.</li>
                    <li>Implemented advanced firewall rules to regulate and secure traffic between internal, trusted, and untrusted hosts, utilizing Pox Controller.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Shota Tonari. All rights reserved.</p>
      </footer>
    </div>
  )
}