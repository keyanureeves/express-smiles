
import React from "react";
import DentalHealthQuiz from "@/components/DentalHealthQuiz";
import { Share, Facebook, Twitter } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const QuizSection = () => {
  const shareQuiz = (platform: string) => {
    const url = `${window.location.origin}${window.location.pathname}#dental-health-assessment`;
    const title = "Dental Health Assessment Quiz | Express Smiles Dental Suite";
    const description = "Take this dental health quiz from Express Smiles Dental Suite to improve your oral health!";
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'tiktok':
        window.open(`https://www.tiktok.com/@express.smiles`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          toast.success("Quiz link copied to clipboard!");
        }).catch(() => {
          toast.error("Failed to copy link");
        });
        break;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="dental-health-assessment">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Dental Health Assessment
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Test Your Dental Knowledge</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take our comprehensive dental health assessment to see how well you're caring for your teeth and gums.
            Get personalized recommendations based on your specific dental habits.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full" 
              onClick={() => shareQuiz('facebook')}
              aria-label="Share on Facebook"
            >
              <Facebook className="h-4 w-4 mr-1 text-blue-600" /> Share
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full" 
              onClick={() => shareQuiz('twitter')}
              aria-label="Tweet"
            >
              <Twitter className="h-4 w-4 mr-1 text-blue-400" /> Tweet
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full" 
              onClick={() => shareQuiz('tiktok')}
              aria-label="Follow on TikTok"
            >
              <TikTokIcon className="h-4 w-4 mr-1" /> TikTok
            </Button>
          </div>
        </div>
        
        <DentalHealthQuiz />
      </div>
    </section>
  );
};

export default QuizSection;
