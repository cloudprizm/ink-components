import React, { Component } from 'react'
import { Box, Text, Color } from 'ink'
import { Colors, colorToObject } from './Colors'
import { FlexBoxProps } from './Flexbox'

type DefaultProps = {
  char: string
  color: Colors
} & Partial<FlexBoxProps>

const defaultProps: DefaultProps = {
  char: '|',
  color: 'green',
}

export type RenderProgress = (props: DefaultProps & { filled: number, unfilled: number }) => JSX.Element

export const defaultRenderProgress: RenderProgress = ({ color, char, filled, unfilled }) =>
  <>
    <Color {...colorToObject(color)}>
      <Text>{char.repeat(filled)}</Text>
    </Color>
    <Color white>
      <Text>{char.repeat(unfilled)}</Text>
    </Color>
  </>

type DefaultPropsWithRenderer = DefaultProps & { renderProgress: RenderProgress }

interface Props extends DefaultPropsWithRenderer {
  width?: number
  percent: number
}

export class ProgressBar extends Component<Props> {
  public static defaultProps: DefaultPropsWithRenderer = {
    ...defaultProps,
    renderProgress: defaultRenderProgress,
  }

  public nodeRef

  constructor(props: Props) {
    super(props)
    this.nodeRef = React.createRef()
  }

  public render() {
    const { renderProgress, color, char, ...rest } = this.props
    const max = this.props.width || this.getMaxWidth()
    const filled = Math.floor(this.props.percent * max)
    const unfilled = max - filled

    return <Box
      ref={this.nodeRef}
      {...rest}
    >{renderProgress({ color, char, filled, unfilled })}
    </Box>
  }

  public getMaxWidth() {
    return this.nodeRef.current
      ? this.nodeRef.current.yogaNode.getComputedWidth()
      : process.stdout.columns
  }
}