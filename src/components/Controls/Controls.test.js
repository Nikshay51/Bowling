import React from 'react'
import Controls from './Controls'
import {shallow} from 'enzyme'

describe ('Controls', () => {
  it('should render eleven pin buttons', () => {
    const gameOver = false
    const lastRoll = 0
    const rolls = 0
    const wrapper = shallow(
      <Controls
        gameOver={gameOver}
        lastRoll={lastRoll}
        rolls={rolls}
      />
    )
    expect(wrapper.find('button').length).toEqual(11)
  })

  it('should not render restart button if rolls less than 1', () => {
    const gameOver = false
    const lastRoll = 0
    const rolls = 0
    const wrapper = shallow(
      <Controls
        gameOver={gameOver}
        lastRoll={lastRoll}
        rolls={rolls}
      />
    )
    expect(wrapper.find('button.Restart').length).toEqual(0)
  })

  for(var i = 0; i < 20; i++) {
    it('should render restart button if rolls greater than 1', () => {
      const gameOver = false
      const lastRoll = 0
      const rolls = i
      const wrapper = shallow(
        <Controls
          gameOver={gameOver}
          lastRoll={lastRoll}
          rolls={rolls}
        />
      )
      expect(wrapper.find('button.Restart').length).toEqual(1)
    })
  }

  it('should disable buttons if game is over', () => {
    const gameOver = true
    const lastRoll = 0
    const rolls = 0
    const wrapper = shallow(
      <Controls
        gameOver={gameOver}
        lastRoll={lastRoll}
        rolls={rolls}
      />
    )
    expect(wrapper.instance().disableButton(0)).toEqual(true)
    expect(wrapper.instance().disableButton(1)).toEqual(true)
    expect(wrapper.instance().disableButton(2)).toEqual(true)
    expect(wrapper.instance().disableButton(3)).toEqual(true)
    expect(wrapper.instance().disableButton(4)).toEqual(true)
    expect(wrapper.instance().disableButton(5)).toEqual(true)
    expect(wrapper.instance().disableButton(6)).toEqual(true)
    expect(wrapper.instance().disableButton(7)).toEqual(true)
    expect(wrapper.instance().disableButton(8)).toEqual(true)
    expect(wrapper.instance().disableButton(9)).toEqual(true)
    expect(wrapper.instance().disableButton(10)).toEqual(true)
  })

  it('should not disable buttons if game has not started', () => {
    const gameOver = false
    const lastRoll = 0
    const rolls = 0
    const wrapper = shallow(
      <Controls
        gameOver={gameOver}
        lastRoll={lastRoll}
        rolls={rolls}
      />
    )
    expect(wrapper.instance().disableButton(0)).toEqual(false)
    expect(wrapper.instance().disableButton(1)).toEqual(false)
    expect(wrapper.instance().disableButton(2)).toEqual(false)
    expect(wrapper.instance().disableButton(3)).toEqual(false)
    expect(wrapper.instance().disableButton(4)).toEqual(false)
    expect(wrapper.instance().disableButton(5)).toEqual(false)
    expect(wrapper.instance().disableButton(6)).toEqual(false)
    expect(wrapper.instance().disableButton(7)).toEqual(false)
    expect(wrapper.instance().disableButton(8)).toEqual(false)
    expect(wrapper.instance().disableButton(9)).toEqual(false)
    expect(wrapper.instance().disableButton(10)).toEqual(false)
  })

  for(var i = 2; i < 21; i=i+2) {
    it('should not disable buttons if start of new frame', () => {
      const gameOver = false
      const lastRoll = 3
      const rolls = i
      const wrapper = shallow(
        <Controls
          gameOver={gameOver}
          lastRoll={lastRoll}
          rolls={rolls}
        />
      )
      expect(wrapper.instance().disableButton(0)).toEqual(false)
      expect(wrapper.instance().disableButton(1)).toEqual(false)
      expect(wrapper.instance().disableButton(2)).toEqual(false)
      expect(wrapper.instance().disableButton(3)).toEqual(false)
      expect(wrapper.instance().disableButton(4)).toEqual(false)
      expect(wrapper.instance().disableButton(5)).toEqual(false)
      expect(wrapper.instance().disableButton(6)).toEqual(false)
      expect(wrapper.instance().disableButton(7)).toEqual(false)
      expect(wrapper.instance().disableButton(8)).toEqual(false)
      expect(wrapper.instance().disableButton(9)).toEqual(false)
      expect(wrapper.instance().disableButton(10)).toEqual(false)
    })
  }

  it('should not disable buttons if strike on first roll of final frame', () => {
    const gameOver = false
    const lastRoll = 10
    const rolls = 19
    const wrapper = shallow(
      <Controls
        gameOver={gameOver}
        lastRoll={lastRoll}
        rolls={rolls}
      />
    )
    expect(wrapper.instance().disableButton(0)).toEqual(false)
    expect(wrapper.instance().disableButton(1)).toEqual(false)
    expect(wrapper.instance().disableButton(2)).toEqual(false)
    expect(wrapper.instance().disableButton(3)).toEqual(false)
    expect(wrapper.instance().disableButton(4)).toEqual(false)
    expect(wrapper.instance().disableButton(5)).toEqual(false)
    expect(wrapper.instance().disableButton(6)).toEqual(false)
    expect(wrapper.instance().disableButton(7)).toEqual(false)
    expect(wrapper.instance().disableButton(8)).toEqual(false)
    expect(wrapper.instance().disableButton(9)).toEqual(false)
    expect(wrapper.instance().disableButton(10)).toEqual(false)
  })

  it('should disable button only if the sum of the last roll and its value is greater than 10', () => {
    const gameOver = false
    const lastRoll = 5
    const rolls = 1
    const wrapper = shallow(
      <Controls
        gameOver={gameOver}
        lastRoll={lastRoll}
        rolls={rolls}
      />
    )
    expect(wrapper.instance().disableButton(0)).toEqual(false)
    expect(wrapper.instance().disableButton(1)).toEqual(false)
    expect(wrapper.instance().disableButton(2)).toEqual(false)
    expect(wrapper.instance().disableButton(3)).toEqual(false)
    expect(wrapper.instance().disableButton(4)).toEqual(false)
    expect(wrapper.instance().disableButton(5)).toEqual(false)
    expect(wrapper.instance().disableButton(6)).toEqual(true)
    expect(wrapper.instance().disableButton(7)).toEqual(true)
    expect(wrapper.instance().disableButton(8)).toEqual(true)
    expect(wrapper.instance().disableButton(9)).toEqual(true)
    expect(wrapper.instance().disableButton(10)).toEqual(true)
  })

  it('on button click, handleClick function should be called', () => {
    const gameOver = false
    const lastRoll = 1
    const rolls = 1

    const mockHandleClick = jest.fn()

    const wrapper = shallow(
      <Controls
        gameOver={gameOver}
        lastRoll={lastRoll}
        rolls={rolls}
        enterScore={mockHandleClick}
      />
    )
    wrapper.instance().handleClick(0)
    expect(mockHandleClick.mock.calls).toEqual([[0]])
  })
})

/*
This is a test file in React.js that contains unit tests for the Controls component. The file imports the React library and the Controls component, as well as the shallow function from the Enzyme library for testing React components.

The first test checks that the Controls component renders 11 pin buttons.

The second test checks that the Controls component does not render a restart button if the number of rolls is less than 1.

The third test uses a loop to test that the Controls component renders a restart button if the number of rolls is greater than 1.

The fourth test checks that all buttons are disabled if the game is over.

The fifth test checks that all buttons are not disabled if the game has not started.

The sixth test uses a loop to test that all buttons are not disabled if the start of a new frame is detected.

The seventh test checks that all buttons are not disabled if the first roll of the final frame is a strike.









*/