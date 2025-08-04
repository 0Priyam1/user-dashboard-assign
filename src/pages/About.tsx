import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const technologies = [
    'React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Lucide Icons', 'Shadcn/ui'
  ];

  const features = [
    {
      icon: Code,
      title: 'Modern Development',
      description: 'Built with React 18, TypeScript, and modern development practices for optimal performance and maintainability.'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Crafted with Tailwind CSS and a custom design system featuring gradients, smooth transitions, and modern UI components.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Layout',
      description: 'Fully responsive design that works perfectly on desktop, tablet, and mobile devices with collapsible navigation.'
    },
    {
      icon: Zap,
      title: 'Interactive Features',
      description: 'Dynamic state management, real-time updates, and smooth user interactions throughout the application.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">About This Project</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive React dashboard application showcasing modern web development practices,
          responsive design, and interactive user interfaces.
        </p>
      </div>

      {/* Technologies Used */}
      <Card className="bg-gradient-card border-0">
        <CardHeader>
          <CardTitle className="text-2xl">Technologies Used</CardTitle>
          <CardDescription>
            This project leverages cutting-edge technologies and frameworks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-gradient-card border-0 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Details */}
      <Card className="bg-gradient-card border-0">
        <CardHeader>
          <CardTitle className="text-2xl">Project Highlights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Architecture</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Component-based architecture</li>
                <li>• Custom hooks for state management</li>
                <li>• Modular layout system</li>
                <li>• Reusable UI components</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Responsive navigation with hamburger menu</li>
                <li>• Collapsible sidebar</li>
                <li>• Dynamic user portfolio management</li>
                <li>• Client-side routing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;