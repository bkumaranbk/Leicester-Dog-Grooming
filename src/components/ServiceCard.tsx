
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
  className?: string;
  imageUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link = '/services',
  className,
  imageUrl
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 md:p-8 flex flex-col h-full group",
        className
      )}
    >
      {imageUrl && (
        <div className="mb-6 overflow-hidden rounded-xl w-90 h-60">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      
      {icon && (
        <div className="mb-5 text-brand-primary">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-foreground/80 mb-6 flex-grow">{description}</p>
      
      <a
        href={link}
        className="inline-flex items-center text-brand-primary font-medium hover:underline mt-auto group"
      >
        Learn More 
        <ArrowRight 
          size={16} 
          className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
        />
      </a>
    </div>
  );
};

export default ServiceCard;
