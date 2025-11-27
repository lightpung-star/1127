import { ReactNode } from 'react';

export enum SectionId {
  DRIVERS = 'drivers',
  FRAMEWORK = 'framework',
  INCENTIVES = 'incentives',
  RESULTS = 'results',
  FUTURE = 'future'
}

export interface NavItem {
  id: SectionId;
  label: string;
  icon: ReactNode;
}

export interface StatCardProps {
  value: string;
  label: string;
  subtext?: string;
  color?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  tags?: string[];
}
