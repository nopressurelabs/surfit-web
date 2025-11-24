import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, MessageCircle, Mail, Heart, Star, GitPullRequest } from "lucide-react";

const Community = () => {
  const stats = [
    { icon: Star, label: "GitHub Stars", value: "2.3K" },
    { icon: GitPullRequest, label: "Contributors", value: "47" },
    { icon: Heart, label: "Community Members", value: "890" },
    { icon: MessageCircle, label: "Discussions", value: "156" }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
            Join the Wave
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with surfers, developers, and ocean enthusiasts from around the world.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Github className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl font-heading">Contribute</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Help shape the future of surf technology. Submit PRs, report issues, or suggest new features.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Good First Issue</Badge>
                <Badge variant="secondary">Hacktoberfest</Badge>
              </div>
              <Button variant="outline" className="w-full">
                <Github className="mr-2 w-4 h-4" />
                View Issues
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl font-heading">Discuss</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Join discussions, ask questions, and share your surf tech ideas with the community.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Q&A</Badge>
                <Badge variant="secondary">Show & Tell</Badge>
              </div>
              <Button variant="outline" className="w-full">
                <MessageCircle className="mr-2 w-4 h-4" />
                Join Discord
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl font-heading">Stay Updated</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Get the latest updates, release notes, and surf tech news delivered to your inbox.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Monthly</Badge>
                <Badge variant="secondary">No Spam</Badge>
              </div>
              <Button variant="surf" className="w-full">
                <Mail className="mr-2 w-4 h-4" />
                Subscribe
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary-light/5 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold font-heading text-foreground mb-4">
                Ready to Make Waves?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're a seasoned developer or just getting started, there's a place for you in the Surfit community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="wave" size="lg">
                  Start Contributing
                </Button>
                <Button variant="outline" size="lg">
                  Join the Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;