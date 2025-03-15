import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

/**
 * @param {Function} reportHandler - Function to handle the metric data
 */
export default function reportWebVitals(reportHandler: any) {
  // Measure and report Core Web Vitals
  onCLS(reportHandler, { reportAllChanges: true });    // Cumulative Layout Shift
  onFID(reportHandler);    // First Input Delay
  onLCP(reportHandler, { reportAllChanges: true });    // Largest Contentful Paint

  // Additional metrics
  onFCP(reportHandler);    // First Contentful Paint
  onTTFB(reportHandler);   // Time to First Byte
}



