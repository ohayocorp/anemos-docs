import React, { useState, useRef, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';

// Create a context to share expansion state across all codeblocks
const ExpandContext = React.createContext({
  isExpanded: false,
  toggleExpand: () => {},
  anyShouldCollapse: false,
  setAnyShouldCollapse: (value) => {}
});

export const ExpandableCodeBlockProvider = ({ children, forceShowExpander = false }) => {
  // Default to collapsed state
  const [isExpanded, setIsExpanded] = useState(false);
  const [anyShouldCollapse, setAnyShouldCollapse] = useState(forceShowExpander);
  const toggleExpand = () => setIsExpanded(prev => !prev);

  // Force the expander to be visible for tabs
  useEffect(() => {
    if (forceShowExpander) {
      setAnyShouldCollapse(true);
    }
  }, [forceShowExpander]);

  return (
    <ExpandContext.Provider value={{
      isExpanded,
      toggleExpand,
      anyShouldCollapse,
      setAnyShouldCollapse
    }}>
      {children}
    </ExpandContext.Provider>
  );
};

export const ExpandableCodeBlock = ({
  children,
  maxHeight = '300px',
  forceCollapse = true,
  ...props
}) => {
  const { isExpanded } = React.useContext(ExpandContext);
  const [shouldCollapse] = useState(forceCollapse);
  const contentRef = useRef(null);

  const className = `min-h-[${maxHeight}]`;

  return (
    <div className="expandable-code-block-wrapper">
      <div
        ref={contentRef}
        style={{
          maxHeight: shouldCollapse && !isExpanded ? maxHeight : 'none',
          overflow: shouldCollapse && !isExpanded ? 'hidden' : 'visible',
          position: 'relative',
          transition: 'max-height 0.3s ease-out'
        }}
      >
        <CodeBlock className={className} {...props}>{children}</CodeBlock>

        {shouldCollapse && !isExpanded && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: 'linear-gradient(to bottom, transparent, var(--ifm-color-emphasis-400))'
            }}
          />
        )}
      </div>
    </div>
  );
};

// External control component to toggle all code blocks
export const CodeBlockExpander = () => {
  const { isExpanded, toggleExpand, anyShouldCollapse } = React.useContext(ExpandContext);
  const contentRef = useRef(null);

  // Only show expander if at least one code block needs collapsing
  if (!anyShouldCollapse) {
    return null;
  }

  return (
    <div className="code-block-expander">
      <button
        onClick={toggleExpand}
        className="button button--outline button--primary"
        style={{
          margin: '1rem 0',
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          borderRadius: '4px',
        }}
      >
        {isExpanded ? "Collapse Code" : "Expand Code"}
        {isExpanded ? (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  );
};