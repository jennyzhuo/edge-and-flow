import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// the childFactory allows to change the transition of the leaving component
// https://github.com/reactjs/react-transition-group/issues/182
const childFactoryCreator = (props) => child => React.cloneElement(child, props)

// export default ({ transition = '', duration = 0, pageKey, children }) => (
//   <TransitionGroup
//     childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
//   >
//     <CSSTransition key={pageKey}>
//       {/* you should wrap CSSTransition child in a div in case it could be null
//       see https://github.com/reactjs/react-transition-group/issues/208 */}
//       <div>{ children }</div>
//     </CSSTransition>
//   </TransitionGroup>
// )

class Transition extends Component {

  // shouldComponentUpdate(nextProps) {
  //   // if (this.props.pageKey !== nextProps.pageKey) return true;
  //   // return false;
  //
  //   return this.props.pageKey !== nextProps.pageKey;
  // }

  render() {

    const { transition = '', duration = 0, pageKey, children } = this.props;

    return (
      <TransitionGroup
        childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
      >
        <CSSTransition key={pageKey}>
          {/* you should wrap CSSTransition child in a div in case it could be null
      see https://github.com/reactjs/react-transition-group/issues/208 */}
          <div>{ children }</div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default Transition;

export const aboutToAbout = { transition: 'about-to-about', duration: 3000 };
export const previewToCase = { transition: 'preview-to-case', duration: 3000 };
export const aboutToPreview = { transition: 'about-to-preview', duration: 3000 };
export const previewToAbout = { transition: 'fade', duration: 1000 };
export const caseToPreview = { transition: 'fade', duration: 1000 };
export const previewToPreview = { transition: '', duration: 1000 };
// export { default as slide } from './slide'
// export { default as scale } from './scale'
