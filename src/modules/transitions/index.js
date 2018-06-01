import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const childFactoryCreator = (props) => child => React.cloneElement(child, props)

class Transition extends Component {

  render() {
    const { transition = '', duration = 0, pageKey, children, transitionGroupClass, cssTransitionClass } = this.props;
    return (
      <TransitionGroup
        childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
        className={`transition-group ${transitionGroupClass}`}
      >
        <CSSTransition key={pageKey} className={`css-transition ${cssTransitionClass}`}>
          <div>
            { children }
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default Transition;

export const aboutToAbout = { transition: 'about-to-about', duration: 2000 };
export const previewToCase = { transition: 'preview-to-case', duration: 2000 };
export const aboutToPreview = { transition: 'about-to-preview', duration: 2000 };
export const previewToAbout = { transition: 'fade', duration: 1000 };
export const caseToPreview = { transition: 'case-to-preview', duration: 3000 };
export const previewToPreview = { transition: 'preview-to-preview', duration: 1000 };
