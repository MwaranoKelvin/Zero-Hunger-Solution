import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Crown, Zap } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface SubscriptionBannerProps {
  userId: string;
}

const SubscriptionBanner = ({ userId }: SubscriptionBannerProps) => {
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    fetchSubscription();
  }, [userId]);

  const fetchSubscription = async () => {
    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching subscription:', error);
        return;
      }

      if (data) {
        setSubscription(data);
        
        if (data.status === 'trial' && data.trial_ends_at) {
          const trialEnd = new Date(data.trial_ends_at);
          const now = new Date();
          const diffTime = trialEnd.getTime() - now.getTime();
          const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
          setDaysLeft(diffDays);
        }
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpgrade = () => {
    toast.info("Upgrade feature coming soon! Contact support for premium access.");
  };

  if (loading || !subscription) return null;

  const isTrialExpired = subscription.status === 'trial' && daysLeft <= 0;
  const isTrialExpiring = subscription.status === 'trial' && daysLeft <= 3 && daysLeft > 0;

  if (subscription.status === 'active' && subscription.plan_type !== 'basic') {
    return (
      <Card className="bg-gradient-primary border-0 text-primary-foreground mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Crown className="w-5 h-5" />
              <div>
                <h3 className="font-semibold capitalize">{subscription.plan_type} Plan Active</h3>
                <p className="text-sm opacity-90">Enjoy unlimited access to all features</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-primary-foreground text-primary">
              Premium
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isTrialExpired) {
    return (
      <Card className="bg-destructive border-0 text-destructive-foreground mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5" />
              <div>
                <h3 className="font-semibold">Free Trial Expired</h3>
                <p className="text-sm opacity-90">Upgrade now to continue using premium features</p>
              </div>
            </div>
            <Button variant="secondary" onClick={handleUpgrade}>
              <Zap className="w-4 h-4 mr-2" />
              Upgrade Now
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isTrialExpiring) {
    return (
      <Card className="bg-accent border-0 text-accent-foreground mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5" />
              <div>
                <h3 className="font-semibold">Trial Ending Soon</h3>
                <p className="text-sm opacity-90">
                  {daysLeft} {daysLeft === 1 ? 'day' : 'days'} left in your free trial
                </p>
              </div>
            </div>
            <Button variant="secondary" onClick={handleUpgrade}>
              <Zap className="w-4 h-4 mr-2" />
              Upgrade Now
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (subscription.status === 'trial') {
    return (
      <Card className="bg-gradient-card border-primary/20 mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold">Free Trial Active</h3>
                <p className="text-sm text-muted-foreground">
                  {daysLeft} {daysLeft === 1 ? 'day' : 'days'} remaining in your trial
                </p>
              </div>
            </div>
            <Badge variant="outline" className="border-primary text-primary">
              Trial User
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default SubscriptionBanner;