import React, { useState } from 'react';
import './App.css';
import { storyNodes } from './storyNodes';
import { StoryNode } from './StoryNode';

export interface SNode {
  nodeID: number
  storyText: string
  options: Option[]
}

interface Option {
  optionTitle: string
  connectingNodeID: number
}

interface GameState {
  currentNode: SNode
  allNodes: SNode[]
}

const initialState: GameState = {
  currentNode: storyNodes[0],
  allNodes: storyNodes
}

export const App = () => {

  const restartStoryButtonWasPressed = () => {
    setState(() => ({...state, currentNode: state.allNodes[0]}))
  }

  const optionWasSelected = (option: number) => {
    const newNode = state.allNodes.filter( n => n.nodeID === option)[0]
    setState( () => ( {...state, currentNode: newNode} ) )
  }

  const [state, setState] = useState(initialState)

  return (
    <div id="page">
    <h1 id="main-heading">EXTRA MEGA TERRIFYING STORY</h1>
      <StoryNode node={state.currentNode} restartStoryButtonWasPressed={restartStoryButtonWasPressed} optionWasSelected={optionWasSelected}></StoryNode>
    </div>
  )
}