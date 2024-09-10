import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Experience</h2>
          <div className="space-y-6 w-full max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>IT Consulting Coordinator</CardTitle>
                <p className="text-sm text-muted-foreground">Mann Consulting, San Francisco, CA | July 2024 - Present</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-left">
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
                <ul className="list-disc pl-4 space-y-2 text-left">
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
                <ul className="list-disc pl-4 space-y-2 text-left">
                  <li>Enhanced productivity for 500+ users through IT consulting services in computer labs and libraries, optimizing workflow and increasing efficiency by 25% for students, TAs, and professors.</li>
                  <li>Operated and managed Windows/Linux/MacOS environments, diagnosed and effectively resolved technical issues.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}