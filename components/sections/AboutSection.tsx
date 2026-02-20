import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { experienceData, educationData } from '@/data/experience';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          
          {/* Bio */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm a Software Engineer at Vituity with a passion for building intelligent, 
              full-stack solutions that solve real business problems. My work focuses on 
              leveraging AI/ML technologies to dramatically improve efficiency and user experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Currently, I lead the development of multiple production systems including ZenForma 
              (a pro forma generator using LangGraph), Polaris (a business development tool), 
              and MailFlow (an automated mail categorizer). These projects have reduced manual 
              processing times from hours to minutes and enabled previously impossible analyses.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I graduated Magna Cum Laude from Colgate University with a B.A. in Computer Science 
              and a minor in Economics. Beyond coding, I'm passionate about mentoring new engineers 
              and exploring the intersection of technology and business strategy.
            </p>
          </div>

          {/* Education */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-8 w-8" />
              Education
            </h3>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <div className="text-2xl font-bold">{educationData.school}</div>
                    <div className="text-base font-normal text-muted-foreground mt-1">
                      {educationData.degree}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{educationData.period}</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-2">{educationData.honors}</p>
                <p className="text-sm text-muted-foreground mb-2">{educationData.gpa}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {educationData.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-8 w-8" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <div className="text-2xl font-bold">{exp.company}</div>
                        <div className="text-base font-normal text-muted-foreground mt-1">
                          {exp.role}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground text-right">
                        <div>{exp.period}</div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
