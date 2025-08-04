import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Calendar, MapPin, User } from 'lucide-react';

export interface UserData {
  name: string;
  email: string;
  bio: string;
  skills: string[];
  age?: number;
  location?: string;
  joinDate?: string;
}

interface ProfileDetailsProps {
  userData: UserData;
}

const ProfileDetails = ({ userData }: ProfileDetailsProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Conditional rendering for age warning
  const isUnder18 = userData.age && userData.age < 18;

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-card border-0">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                {getInitials(userData.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{userData.name}</CardTitle>
              <CardDescription className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{userData.email}</span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Age Warning */}
      {isUnder18 && (
        <Card className="border-destructive bg-destructive/5">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 text-destructive">
              <User className="h-5 w-5" />
              <span className="font-medium">
                ⚠️ Warning: User is under 18 years old (Age: {userData.age})
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bio Section */}
      <Card className="bg-gradient-card border-0">
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {userData.bio || 'No bio available.'}
          </p>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card className="bg-gradient-card border-0">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardDescription>Technologies and areas of expertise</CardDescription>
        </CardHeader>
        <CardContent>
          {userData.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {userData.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No skills listed yet.</p>
          )}
        </CardContent>
      </Card>

      {/* Additional Info */}
      {(userData.age || userData.location || userData.joinDate) && (
        <Card className="bg-gradient-card border-0">
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {userData.age && (
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Age: {userData.age} years old</span>
              </div>
            )}
            {userData.location && (
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{userData.location}</span>
              </div>
            )}
            {userData.joinDate && (
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Joined {userData.joinDate}</span>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProfileDetails;