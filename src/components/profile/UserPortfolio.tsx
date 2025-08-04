import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Edit3, Save, X, Plus } from 'lucide-react';
import ProfileDetails, { UserData } from './ProfileDetails';

const UserPortfolio = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState('');

  // Initial user data state
  const [userData, setUserData] = useState<UserData>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate full-stack developer with 5 years of experience in building modern web applications. I love working with React, TypeScript, and Node.js to create innovative solutions.',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'MongoDB'],
    age: 17, // Setting age under 18 to demonstrate conditional rendering
    location: 'San Francisco, CA',
    joinDate: 'January 2023'
  });

  // Form data for editing
  const [formData, setFormData] = useState<UserData>(userData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? (value ? parseInt(value) : undefined) : value
    }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSave = () => {
    setUserData(formData);
    setIsEditing(false);
    toast({
      title: "Profile Updated!",
      description: "Your profile information has been successfully updated.",
    });
  };

  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
    setNewSkill('');
  };

  const startEditing = () => {
    setFormData(userData);
    setIsEditing(true);
  };

  return (
    <div className="space-y-6">
      {/* Header with Edit Button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Portfolio</h1>
          <p className="text-muted-foreground">Manage your personal information and skills</p>
        </div>
        
        {!isEditing && (
          <Button onClick={startEditing} className="bg-gradient-primary">
            <Edit3 className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        )}
      </div>

      {/* Editing Form */}
      {isEditing && (
        <Card className="bg-gradient-card border-0">
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Name</Label>
                <Input
                  id="edit-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-age">Age</Label>
                <Input
                  id="edit-age"
                  name="age"
                  type="number"
                  value={formData.age || ''}
                  onChange={handleInputChange}
                  placeholder="Your age"
                  min="1"
                  max="120"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-location">Location</Label>
                <Input
                  id="edit-location"
                  name="location"
                  value={formData.location || ''}
                  onChange={handleInputChange}
                  placeholder="City, State/Country"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-bio">Bio</Label>
              <Textarea
                id="edit-bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Tell us about yourself..."
                rows={4}
              />
            </div>

            {/* Skills Management */}
            <div className="space-y-4">
              <Label>Skills</Label>
              
              {/* Add new skill */}
              <div className="flex space-x-2">
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a new skill"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                />
                <Button 
                  type="button" 
                  onClick={handleAddSkill}
                  variant="outline"
                  disabled={!newSkill.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Current skills */}
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <Badge variant="secondary" className="px-3 py-1">
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="ml-2 text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button onClick={handleSave} className="bg-gradient-primary">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
              <Button onClick={handleCancel} variant="outline">
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Profile Display */}
      {!isEditing && <ProfileDetails userData={userData} />}
    </div>
  );
};

export default UserPortfolio;