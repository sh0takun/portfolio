import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCapIcon } from "lucide-react"

export default function Education() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Education</h2>
          <div className="grid gap-6 lg:grid-cols-2 w-full max-w-4xl">
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
      </div>
    </section>
  )
}