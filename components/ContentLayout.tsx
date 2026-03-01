import { ReactNode } from 'react';
import Breadcrumb from './Breadcrumb';

interface ContentLayoutProps {
  children: ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  title?: string;
}

export default function ContentLayout({ children, breadcrumbs, title }: ContentLayoutProps) {
  return (
    <>
      {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
      <div className="container mx-auto px-4 py-12">
        {title && (
          <h1 className="text-4xl font-bold text-bezmialem-blue mb-8">{title}</h1>
        )}
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </>
  );
}
