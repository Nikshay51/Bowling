import React from 'react'
import Scorecard from './index'
import {shallow} from 'enzyme'

describe ('Scorecard', () => {
  it('should render table with 11 columns', () => {
    const frames = []
    const cumulativeScores = []
    const totalScore = 0
    const wrapper = shallow(
      <Scorecard
        frames={frames}
        cumulativeScores={cumulativeScores}
        totalScore={totalScore}
      />
    )
    expect(wrapper.find('th').length).toEqual(11)
  })

  it('should render the correct column headings', () => {
    const frames = []
    const cumulativeScores = []
    const totalScore = 0
    const wrapper = shallow(
      <Scorecard
        frames={frames}
        cumulativeScores={cumulativeScores}
        totalScore={totalScore}
      />
    )
    expect(wrapper.find('#c1').text()).toEqual('Frame 1')
    expect(wrapper.find('#c2').text()).toEqual('Frame 2')
    expect(wrapper.find('#c3').text()).toEqual('Frame 3')
    expect(wrapper.find('#c4').text()).toEqual('Frame 4')
    expect(wrapper.find('#c5').text()).toEqual('Frame 5')
    expect(wrapper.find('#c6').text()).toEqual('Frame 6')
    expect(wrapper.find('#c7').text()).toEqual('Frame 7')
    expect(wrapper.find('#c8').text()).toEqual('Frame 8')
    expect(wrapper.find('#c9').text()).toEqual('Frame 9')
    expect(wrapper.find('#c10').text()).toEqual('Frame 10')
    expect(wrapper.find('#c11').text()).toEqual('Total Score')
  })

  it('should render the correct scores', () => {
    const frames = [[0,0], [1,6], [7,3], [10], [4,5], [8,0]]
    const cumulativeScores = [0, 7, 20, 19, 8]
    const totalScore = 8
    const wrapper = shallow(
      <Scorecard
        frames={frames}
        cumulativeScores={cumulativeScores}
        totalScore={totalScore}
      />
    )
    expect(wrapper.find('#r1').text()).toEqual("0")
    expect(wrapper.find('#r2').text()).toEqual("0")
    expect(wrapper.find('#r3').text()).toEqual("1")
    expect(wrapper.find('#r4').text()).toEqual("6")
    expect(wrapper.find('#r5').text()).toEqual("7")
    expect(wrapper.find('#r6').text()).toEqual("3")
    expect(wrapper.find('#r7').text()).toEqual("10")
    expect(wrapper.find('#r8').text()).toEqual("")
    expect(wrapper.find('#r9').text()).toEqual("4")
    expect(wrapper.find('#r10').text()).toEqual("5")
    expect(wrapper.find('#r11').text()).toEqual("8")
    expect(wrapper.find('#r12').text()).toEqual("0")
    expect(wrapper.find('#r13').text()).toEqual("")
    expect(wrapper.find('#r14').text()).toEqual("")
  })

  it('should render the correct total score', () => {
    const frames = [[0,0], [1,6], [7,3], [10], [4,5], [8,0]]
    const cumulativeScores = [0, 7, 20, 19, 8]
    const totalScore = 8
    const wrapper = shallow(
      <Scorecard
        frames={frames}
        cumulativeScores={cumulativeScores}
        totalScore={totalScore}
      />
    )

    expect(wrapper.find('.Total').text()).toEqual('8')
  })

  it('should render the correct cumulative frame scores', () => {
    const frames = [[0,0], [1,6], [7,3], [10], [4,5], [8,0]]
    const cumulativeScores = [0, 7, 20, 19, 8]
    const totalScore = 8
    const wrapper = shallow(
      <Scorecard
        frames={frames}
        cumulativeScores={cumulativeScores}
        totalScore={totalScore}
      />
    )
    expect(wrapper.find('#cumulative-score-f1').text()).toEqual("0")
    expect(wrapper.find('#cumulative-score-f2').text()).toEqual("7")
    expect(wrapper.find('#cumulative-score-f3').text()).toEqual("20")
    expect(wrapper.find('#cumulative-score-f4').text()).toEqual("19")
    expect(wrapper.find('#cumulative-score-f5').text()).toEqual("8")
    expect(wrapper.find('#cumulative-score-f6').text()).toEqual("")
    expect(wrapper.find('#cumulative-score-f7').text()).toEqual("")
    expect(wrapper.find('#cumulative-score-f8').text()).toEqual("")
    expect(wrapper.find('#cumulative-score-f9').text()).toEqual("")
    expect(wrapper.find('#cumulative-score-f10').text()).toEqual("")
  })

  it('returns correct score', () => {
    const frames = [[0,0], [1,6], [7,3], [10], [4,5], [8,0]]
    const cumulativeScores = [0, 7, 20, 19, 8]
    const totalScore = 8
    const wrapper = shallow(
      <Scorecard
        frames={frames}
        cumulativeScores={cumulativeScores}
        totalScore={totalScore}
      />
    )
    expect(wrapper.instance().renderScores(0, 0)).toEqual(0)
    expect(wrapper.instance().renderScores(0, 1)).toEqual(0)
    expect(wrapper.instance().renderScores(1, 0)).toEqual(1)
    expect(wrapper.instance().renderScores(1, 1)).toEqual(6)
    expect(wrapper.instance().renderScores(2, 0)).toEqual(7)
    expect(wrapper.instance().renderScores(2, 1)).toEqual(3)
    expect(wrapper.instance().renderScores(3, 0)).toEqual(10)
    expect(wrapper.instance().renderScores(3, 1)).toEqual(undefined)
    expect(wrapper.instance().renderScores(4, 0)).toEqual(4)
    expect(wrapper.instance().renderScores(4, 1)).toEqual(5)
    expect(wrapper.instance().renderScores(5, 0)).toEqual(8)
    expect(wrapper.instance().renderScores(5, 1)).toEqual(0)
    expect(wrapper.instance().renderScores(6, 0)).toEqual("")
    expect(wrapper.instance().renderScores(6, 1)).toEqual("")
  })
})

/*
This is a test file that checks the rendering of a React component called Scorecard. The component accepts three props: frames, cumulativeScores, and totalScore. The shallow method from the enzyme library is used to test the component's rendering.

There are five tests in the code, each testing a different aspect of the Scorecard component.

The first test checks whether the component renders a table with 11 columns.
The second test checks whether the component renders the correct column headings.
The third test checks whether the component renders the correct scores.
The fourth test checks whether the component renders the correct total score.
The fifth test checks whether the renderScores method of the component returns the correct score.
The Scorecard component is expected to render a table that displays the scores of a game of 
bowling. The frames prop is an array of arrays, where each inner array represents a frame in 
the game. The cumulativeScores prop is an array that contains the cumulative scores of each 
frame, and the totalScore prop is the total score of the game.
The component should render the scores and the cumulative scores in the table, as well as 
the frame numbers and the total score.
*/