import React, { useState } from 'react';
import { SNode } from './App';

interface StoryNodeProps {
  node: SNode
  restartStoryButtonWasPressed: () => void
  optionWasSelected: (option: number) => void
}

export const StoryNode = (props: StoryNodeProps) => {

  return (  
    <div>
      <p>{props.node.storyText}</p>
      <div id="options">
        { props.node.options.length > 0 && props.node.options.map( n => <button onClick={() => props.optionWasSelected(n.connectingNodeID)}>{n.optionTitle}</button>)}
        { props.node.options.length === 0 && <button onClick={() => props.restartStoryButtonWasPressed()}>Restart Story</button> }
        </div>
    </div>
  )
}