import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Projects</h2>
          <div className="space-y-6 w-full max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>ResNet ServiceNow Dashboard</CardTitle>
                <p className="text-sm text-muted-foreground">Python, Bash | 2024</p>
              </CardHeader>
              <CardContent>
                <p className="text-left">Engineered a Flask-driven Raspberry Pi application for visualizing ServiceNow tickets with SLA-based color coding, streamlining issue tracking and response times.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>HealthPredict JPN: Empowering Wellness Through Data Analytics</CardTitle>
                <p className="text-sm text-muted-foreground">Jun. 2023 - Sept. 2023</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-left">
                  <li>Co-piloted the development of HealthPredict Japan, an innovative digital health platform designed for the Japanese market; leveraged sophisticated data analytics techniques to create predictive models that forecast potential health risks and provide personalized recommendations.</li>
                  <li>Designed a scalable Hub and Spoke architecture connecting core services (data collection, analysis, online/offline user touchpoints) and ecosystem partners to maximize reach and impact.</li>
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
                <ul className="list-disc pl-4 space-y-2 text-left">
                  <li>Multi-subnet network topology for a simulated company environment, integrating switches/routers using Mininet.</li>
                  <li>Implemented advanced firewall rules to regulate and secure traffic between internal, trusted, and untrusted hosts, utilizing Pox Controller.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}