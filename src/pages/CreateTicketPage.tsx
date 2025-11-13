import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabaseClient';

const CreateTicketPage = () => {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    priority: 'normal',
    building: '',
    floor: '',
    unit_number: '',
    common_area: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { value: 'water_leak', label: 'Water Leak' },
    { value: 'electricity', label: 'Electricity Issue' },
    { value: 'cleanliness', label: 'Cleanliness' },
    { value: 'noise', label: 'Noise Complaint' },
    { value: 'other', label: 'Other' },
  ];

  const priorities = [
    { value: 'normal', label: 'Normal' },
    { value: 'urgent', label: 'Urgent' },
  ];

  const buildings = [
    { value: 'tower-a', label: 'Tower A' },
    { value: 'tower-b', label: 'Tower B' },
    { value: 'common', label: 'Common Areas' },
  ];

  const commonAreas = [
    { value: 'lobby', label: 'Lobby' },
    { value: 'pool', label: 'Swimming Pool' },
    { value: 'gym', label: 'Gym' },
    { value: 'garden', label: 'Garden' },
    { value: 'parking', label: 'Parking' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Mock resident data - in real app, this would come from auth
      const mockResidentId = '550e8400-e29b-41d4-a716-446655440000';
      const mockResidentName = 'Olivia Chen';

      const { data, error } = await supabase
        .from('tickets')
        .insert({
          ...formData,
          resident_id: mockResidentId,
          resident_name: mockResidentName,
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating ticket:', error);
        alert('Error creating ticket. Please try again.');
      } else {
        console.log('Ticket created:', data);
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating ticket. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'water_leak':
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      case 'electricity':
        return (
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'cleanliness':
        return (
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'noise':
        return (
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891 1.077 1.337 2.707.707l4.707-4.707C19.077 14.336 20 14.891 20 16v-4c0-1.109-.923-1.664-2.293-1.293L15.536 8.464z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        );
    }
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Ticket Submitted Successfully!</h2>
              <p className="text-muted-foreground mb-6">
                Your service request has been created and will be reviewed by our team shortly.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => window.location.href = '/tickets'}>
                  View My Tickets
                </Button>
                <Button onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    category: '',
                    title: '',
                    description: '',
                    priority: 'normal',
                    building: '',
                    floor: '',
                    unit_number: '',
                    common_area: '',
                  });
                }}>
                  Create Another Ticket
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-4xl font-black tracking-tight text-foreground mb-2">Create Service Request</h1>
        <p className="text-muted-foreground text-base">Report an issue or request maintenance service.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service Request Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => handleInputChange('category', cat.value)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.category === cat.value
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    {getCategoryIcon(cat.value)}
                    <span className="text-sm font-medium">{cat.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Title and Description */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="Brief description of the issue"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed information about the issue"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  required
                />
              </div>
            </div>

            {/* Priority */}
            <div>
              <Label>Priority</Label>
              <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((priority) => (
                    <SelectItem key={priority.value} value={priority.value}>
                      {priority.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <div>
                <Label>Building/Area *</Label>
                <Select value={formData.building} onValueChange={(value) => handleInputChange('building', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select building or area" />
                  </SelectTrigger>
                  <SelectContent>
                    {buildings.map((building) => (
                      <SelectItem key={building.value} value={building.value}>
                        {building.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.building && formData.building !== 'common' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="floor">Floor</Label>
                    <Input
                      id="floor"
                      placeholder="e.g., 15"
                      value={formData.floor}
                      onChange={(e) => handleInputChange('floor', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="unit_number">Unit Number</Label>
                    <Input
                      id="unit_number"
                      placeholder="e.g., 1501"
                      value={formData.unit_number}
                      onChange={(e) => handleInputChange('unit_number', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {formData.building === 'common' && (
                <div>
                  <Label>Common Area</Label>
                  <Select value={formData.common_area} onValueChange={(value) => handleInputChange('common_area', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select common area" />
                    </SelectTrigger>
                    <SelectContent>
                      {commonAreas.map((area) => (
                        <SelectItem key={area.value} value={area.value}>
                          {area.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => window.history.back()}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading || !formData.category || !formData.title || !formData.description || !formData.building}
                className="flex-1"
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateTicketPage;
