// src/utils/PlaceholderImagesConfig.js

// Export placeholder image URLs for process steps
export const processStepImages = {
    // Replace these with your actual image paths when available
    step1: '/api/placeholder/600/400?text=Step+1:+Application',
    step2: '/api/placeholder/600/400?text=Step+2:+Review',
    step3: '/api/placeholder/600/400?text=Step+3:+Onboarding',
    step4: '/api/placeholder/600/400?text=Step+4:+Engagement'
  };
  
  // Export placeholder for TEDx event banner
  export const eventBannerPlaceholder = '/api/placeholder/1200/600?text=TEDx+Event+Banner';
  
  // Function to get a fallback image if main image fails to load
  export const getFallbackImage = (index, type = 'process') => {
    if (type === 'process') {
      return `/api/placeholder/600/400?text=Step+${index}`;
    } else if (type === 'speaker') {
      return `/api/placeholder/300/300?text=Speaker+${index}`;
    } else if (type === 'event') {
      return `/api/placeholder/800/400?text=TEDx+Event+${index}`;
    }
    return '/api/placeholder/400/300?text=Image+Placeholder';
  };