import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Users, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'User Management',
      description: 'Manage your profile and personal information',
      link: '/profile'
    },
    {
      icon: Settings,
      title: 'Settings',
      description: 'Configure your dashboard preferences',
      link: '/settings'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'View detailed insights and reports',
      link: '/about'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Welcome to Your Dashboard
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Manage your profile, settings, and explore all the features of your personal dashboard.
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <Button asChild className="bg-gradient-primary">
            <Link to="/profile">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 bg-gradient-card border-0">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {feature.description}
              </CardDescription>
              <Button variant="ghost" className="group-hover:bg-primary/10" asChild>
                <Link to={feature.link}>
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Card className="text-center bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">100%</CardTitle>
            <CardDescription>Responsive Design</CardDescription>
          </CardHeader>
        </Card>
        <Card className="text-center bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">React</CardTitle>
            <CardDescription>Modern Framework</CardDescription>
          </CardHeader>
        </Card>
        <Card className="text-center bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">TypeScript</CardTitle>
            <CardDescription>Type Safety</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Home;