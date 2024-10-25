import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeIcon, WrenchIcon, GlobeIcon, BriefcaseIcon } from "lucide-react"

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Technical Skills</h2>
          <div className="grid gap-6 lg:grid-cols-2 w-full max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>
                  <CodeIcon className="w-4 h-4 mr-2 inline-block" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>C/C++, Python, HTML/CSS, MATLAB</p>
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
                <p>Git, Gitlab, Bash</p>
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
                <p>ServiceNow, Zendesk, Jamf, Intune</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}