<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c6390a9 (initial commit)
import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, ArrowRight } from 'lucide-react';

const DeviceMatrix = () => {
  const [selectedPhase, setSelectedPhase] = useState('analyze');
  
  const addiePhases = {
    analyze: {
      name: 'Analyze',
      color: 'bg-blue-50 border-blue-200',
      headerColor: 'bg-blue-500',
      desktop: {
        layout: 'Two-column layout with full navigation sidebar',
        interaction: 'Click and drag with mouse, hover states visible',
        feedback: 'Real-time validation with detailed error messages',
        considerations: 'Ample screen space for instructions and drag targets',
        infoFlow: 'Source items in left panel, drop zones in right panel. Instructions remain persistent in header. All elements visible simultaneously without scrolling.'
      },
      tablet: {
        layout: 'Single column with collapsible navigation',
        interaction: 'Touch-based drag with enlarged touch targets (44px minimum)',
        feedback: 'Visual feedback on touch with haptic response',
        considerations: 'Balance between information density and touch usability',
        infoFlow: 'Source items stack vertically above drop zones. Instructions collapse into expandable drawer. User scrolls between source and target areas. State persists across orientation changes.'
      },
      mobile: {
        layout: 'Vertical stack with bottom-anchored controls',
        interaction: 'Simplified drag or alternative tap-to-place mechanism',
        feedback: 'Clear success/error states with minimal text',
        considerations: 'Screen real estate limits; consider progressive disclosure',
        infoFlow: 'Sequential presentation: instructions → source items → drop zones. Progress indicator shows completion. Sticky header with context. Completed items move off-screen to reduce cognitive load.'
      }
    },
    design: {
      name: 'Design',
      color: 'bg-purple-50 border-purple-200',
      headerColor: 'bg-purple-500',
      desktop: {
        layout: 'Grid-based drag zones with clear visual boundaries',
        interaction: 'Snap-to-grid behavior, keyboard navigation support',
        feedback: 'Animated transitions between states',
        considerations: 'WCAG 2.1 AA compliance for color contrast and focus indicators',
        infoFlow: 'Horizontal information architecture. Multiple drag operations possible in single viewport. Undo/redo controls in persistent toolbar. Drop zone feedback appears adjacent to dragged item.'
      },
      tablet: {
        layout: 'Flexible grid that adjusts to portrait/landscape',
        interaction: 'Touch gestures with optional stylus support',
        feedback: 'Visual and auditory cues for successful drops',
        considerations: 'Orientation changes should preserve state',
        infoFlow: 'Portrait: vertical flow with source-above-target pattern. Landscape: side-by-side layout mimics desktop. Visual breadcrumbs maintain context during scrolling. Modal overlays for detailed feedback avoid viewport shifts.'
      },
      mobile: {
        layout: 'Linear flow with one active drag zone visible',
        interaction: 'Swipe alternatives for drag functionality',
        feedback: 'Persistent progress indicator',
        considerations: 'Thumb-friendly zones in lower third of screen',
        infoFlow: 'Card-based flow where each drag operation occupies full screen. Swipe gestures navigate between items. Visual summary panel shows overall progress. Confirmation step before final submission to prevent accidental completion.'
      }
    },
    develop: {
      name: 'Develop',
      color: 'bg-green-50 border-green-200',
      headerColor: 'bg-green-500',
      desktop: {
        layout: 'Full interface with debug tools visible (dev mode)',
        interaction: 'HTML5 drag-and-drop API with fallback',
        feedback: 'Console logging and visual state indicators',
        considerations: 'Cross-browser testing essential (Chrome, Firefox, Safari, Edge)',
        infoFlow: 'State management via Redux or Context API. Drag data transferred via dataTransfer object. Real-time synchronization between source and target arrays. Event delegation for performance with large item sets.'
      },
      tablet: {
        layout: 'Responsive breakpoints at 768px and 1024px',
        interaction: 'Touch events with pointer events API',
        feedback: 'Performance monitoring for 60fps interactions',
        considerations: 'Test on iOS Safari and Android Chrome specifically',
        infoFlow: 'Touch event normalization layer handles pointer, touch, and mouse events uniformly. Intersection Observer API triggers lazy loading as user scrolls. State serialization enables mid-session saves. CSS Grid layout adapts based on available viewport.'
      },
      mobile: {
        layout: 'Progressive enhancement from mobile-first base',
        interaction: 'Touch-optimized with reduced animation complexity',
        feedback: 'Lightweight feedback to preserve battery',
        considerations: 'Network-aware loading for low-bandwidth scenarios',
        infoFlow: 'Component-level state keeps UI responsive during network latency. Optimistic updates provide immediate feedback. Queue mechanism batches operations before server sync. Skeleton screens maintain layout stability during content loading.'
      }
    },
    implement: {
      name: 'Implement',
      color: 'bg-orange-50 border-orange-200',
      headerColor: 'bg-orange-500',
      desktop: {
        layout: 'Production interface with analytics tracking',
        interaction: 'Smooth 60fps animations, sub-100ms response time',
        feedback: 'User progress saved to database',
        considerations: 'A/B testing variants for optimal engagement',
        infoFlow: 'WebSocket connection maintains real-time state sync. Drag paths tracked via analytics events. Auto-save triggers on each drop event. Multi-tab synchronization prevents data conflicts if user opens activity in multiple windows.'
      },
      tablet: {
        layout: 'Adaptive layout based on device capabilities',
        interaction: 'Pressure sensitivity if supported by device',
        feedback: 'Cloud sync across devices',
        considerations: 'Offline mode with service worker caching',
        infoFlow: 'IndexedDB stores local progress. Service worker intercepts requests and serves cached content offline. Background sync queues operations when connection lost. On reconnection, conflict resolution merges local and server state.'
      },
      mobile: {
        layout: 'Streamlined UI prioritizing core functionality',
        interaction: 'Native-feeling interactions with minimal delay',
        feedback: 'Toast notifications for key events',
        considerations: 'App-like experience with install prompt',
        infoFlow: 'Request Animation Frame ensures smooth gesture tracking. Touch coordinates throttled to reduce event processing. Local storage checkpoint system enables "continue where you left off." Push notifications remind users of incomplete activities.'
      }
    },
    evaluate: {
      name: 'Evaluate',
      color: 'bg-red-50 border-red-200',
      headerColor: 'bg-red-500',
      desktop: {
        layout: 'Analytics dashboard overlay available',
        interaction: 'Session replay capabilities for UX analysis',
        feedback: 'Detailed completion metrics and time-on-task',
        considerations: 'Heatmap tracking for drag patterns and drop zones',
        infoFlow: 'Event stream captures full interaction sequence: hover duration, drag paths, drop accuracy, correction attempts. Funnel analysis identifies where users abandon. Replay system reconstructs exact user session including scroll position and timing.'
      },
      tablet: {
        layout: 'A/B test different layouts for conversion',
        interaction: 'Touch gesture analytics and error tracking',
        feedback: 'User satisfaction surveys post-completion',
        considerations: 'Compare tablet vs desktop completion rates',
        infoFlow: 'Touch heatmaps reveal optimal target sizing. Orientation-change events correlate with task interruption. Cohort analysis compares portrait vs landscape completion rates. Cross-device journey tracking shows users who start on tablet and finish on desktop.'
      },
      mobile: {
        layout: 'Simplified metrics focused on drop-off points',
        interaction: 'Frustration detection (repeated failed attempts)',
        feedback: 'Net Promoter Score collection',
        considerations: 'Accessibility audit with screen reader testing',
        infoFlow: 'Rage click detection identifies UI confusion points. Scroll depth metrics show if instructions visible before first interaction. Error rate by viewport size reveals responsive design issues. Screen reader interaction logs validate accessible information flow.'
      }
    }
  };

  const currentPhase = addiePhases[selectedPhase];
<<<<<<< HEAD

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          ADDIE Device Matrix
        </h1>
        <p className="text-gray-600">
          Interactive storyboard framework for drag-and-drop activity design
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(addiePhases).map(([key, phase]) => (
          <button
            key={key}
            onClick={() => setSelectedPhase(key)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedPhase === key
                ? phase.headerColor + ' text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {phase.name}
          </button>
        ))}
      </div>

      <div className={`border-2 rounded-lg ${currentPhase.color} overflow-hidden`}>
        <div className={`${currentPhase.headerColor} text-white px-6 py-4`}>
          <h2 className="text-2xl font-bold">{currentPhase.name} Phase</h2>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-800">Desktop</h3>
            </div>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Layout:</span>
                <p className="text-gray-600 mt-1">{currentPhase.desktop.layout}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Interaction:</span>
                <p className="text-gray-600 mt-1">{currentPhase.desktop.interaction}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Feedback:</span>
                <p className="text-gray-600 mt-1">{currentPhase.desktop.feedback}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Considerations:</span>
                <p className="text-gray-600 mt-1">{currentPhase.desktop.considerations}</p>
              </div>
              <div className="pt-3 border-t-2 border-blue-100">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-blue-700">Information Flow:</span>
                    <p className="text-gray-700 mt-1">{currentPhase.desktop.infoFlow}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Tablet className="w-6 h-6 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-800">Tablet</h3>
            </div>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Layout:</span>
                <p className="text-gray-600 mt-1">{currentPhase.tablet.layout}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Interaction:</span>
                <p className="text-gray-600 mt-1">{currentPhase.tablet.interaction}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Feedback:</span>
                <p className="text-gray-600 mt-1">{currentPhase.tablet.feedback}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Considerations:</span>
                <p className="text-gray-600 mt-1">{currentPhase.tablet.considerations}</p>
              </div>
              <div className="pt-3 border-t-2 border-purple-100">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-purple-700">Information Flow:</span>
                    <p className="text-gray-700 mt-1">{currentPhase.tablet.infoFlow}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-6 h-6 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-800">Mobile</h3>
            </div>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Layout:</span>
                <p className="text-gray-600 mt-1">{currentPhase.mobile.layout}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Interaction:</span>
                <p className="text-gray-600 mt-1">{currentPhase.mobile.interaction}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Feedback:</span>
                <p className="text-gray-600 mt-1">{currentPhase.mobile.feedback}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Considerations:</span>
                <p className="text-gray-600 mt-1">{currentPhase.mobile.considerations}</p>
              </div>
              <div className="pt-3 border-t-2 border-green-100">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-green-700">Information Flow:</span>
                    <p className="text-gray-700 mt-1">{currentPhase.mobile.infoFlow}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Note:</span> Information Flow describes how content, state, and user actions 
          move through the interface on each device type. Understanding these patterns ensures your drag-and-drop 
          activity maintains logical progression and accessibility regardless of screen size or input method.
        </p>
      </div>
    </div>
  );
};

export default DeviceMatrix;
=======
import logo from './logo.svg';
import './App.css';
=======
>>>>>>> c6390a9 (initial commit)

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          ADDIE Device Matrix
        </h1>
        <p className="text-gray-600">
          Interactive storyboard framework for drag-and-drop activity design
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(addiePhases).map(([key, phase]) => (
          <button
            key={key}
            onClick={() => setSelectedPhase(key)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedPhase === key
                ? phase.headerColor + ' text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {phase.name}
          </button>
        ))}
      </div>

      <div className={`border-2 rounded-lg ${currentPhase.color} overflow-hidden`}>
        <div className={`${currentPhase.headerColor} text-white px-6 py-4`}>
          <h2 className="text-2xl font-bold">{currentPhase.name} Phase</h2>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-800">Desktop</h3>
            </div>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Layout:</span>
                <p className="text-gray-600 mt-1">{currentPhase.desktop.layout}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Interaction:</span>
                <p className="text-gray-600 mt-1">{currentPhase.desktop.interaction}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Feedback:</span>
                <p className="text-gray-600 mt-1">{currentPhase.desktop.feedback}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Considerations:</span>
                <p className="text-gray-600 mt-1">{currentPhase.desktop.considerations}</p>
              </div>
              <div className="pt-3 border-t-2 border-blue-100">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-blue-700">Information Flow:</span>
                    <p className="text-gray-700 mt-1">{currentPhase.desktop.infoFlow}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Tablet className="w-6 h-6 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-800">Tablet</h3>
            </div>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Layout:</span>
                <p className="text-gray-600 mt-1">{currentPhase.tablet.layout}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Interaction:</span>
                <p className="text-gray-600 mt-1">{currentPhase.tablet.interaction}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Feedback:</span>
                <p className="text-gray-600 mt-1">{currentPhase.tablet.feedback}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Considerations:</span>
                <p className="text-gray-600 mt-1">{currentPhase.tablet.considerations}</p>
              </div>
              <div className="pt-3 border-t-2 border-purple-100">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-purple-700">Information Flow:</span>
                    <p className="text-gray-700 mt-1">{currentPhase.tablet.infoFlow}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-6 h-6 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-800">Mobile</h3>
            </div>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Layout:</span>
                <p className="text-gray-600 mt-1">{currentPhase.mobile.layout}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Interaction:</span>
                <p className="text-gray-600 mt-1">{currentPhase.mobile.interaction}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Feedback:</span>
                <p className="text-gray-600 mt-1">{currentPhase.mobile.feedback}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Considerations:</span>
                <p className="text-gray-600 mt-1">{currentPhase.mobile.considerations}</p>
              </div>
              <div className="pt-3 border-t-2 border-green-100">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-green-700">Information Flow:</span>
                    <p className="text-gray-700 mt-1">{currentPhase.mobile.infoFlow}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Note:</span> Information Flow describes how content, state, and user actions 
          move through the interface on each device type. Understanding these patterns ensures your drag-and-drop 
          activity maintains logical progression and accessibility regardless of screen size or input method.
        </p>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default App;
>>>>>>> 9d934f5 (Initialize project using Create React App)
=======
export default DeviceMatrix;
>>>>>>> c6390a9 (initial commit)
