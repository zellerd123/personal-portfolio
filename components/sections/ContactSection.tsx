import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just connecting with fellow developers. Feel free to reach out!
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:dzeller2002@gmail.com"
                  className="text-primary hover:underline"
                >
                  dzeller2002@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+19257876984"
                  className="text-primary hover:underline"
                >
                  925.787.6984
                </a>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">New York, NY</p>
              </CardContent>
            </Card>

            {/* LinkedIn Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://linkedin.com/in/douglas-zeller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/douglas-zeller
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Social Links Section */}
          <Card>
            <CardHeader>
              <CardTitle>Connect on Social Media</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/zellerd123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/douglas-zeller"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
                <a
                  href="mailto:dzeller2002@gmail.com"
                >
                  <Button variant="outline" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Email Me
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
