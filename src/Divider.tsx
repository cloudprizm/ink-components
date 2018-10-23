import React, { Component } from 'react'
import { Box, Color } from 'ink'
import stringWidth from 'string-width'

import { FlexBoxProps } from './Flexbox'
import { Colors, colorToObject } from './Colors'

export const defaultDividerRenderer = ({ color, title, char, half }) =>
  <Color {...colorToObject(color)}>
    <Box>{`${char.repeat(half)} ${title} ${char.repeat(half)}`}</Box>
  </Color>

const defaultProps = {
  char: '-',
  renderDivider: defaultDividerRenderer
}

type DefaultProps = typeof defaultProps

interface Props extends DefaultProps, Partial<FlexBoxProps> {
  color?: Colors,
  title?: string
}

export class Divider extends Component<Props> {
  public static defaultProps = defaultProps
  public nodeRef

  constructor(props: Props) {
    super(props)
    this.nodeRef = React.createRef()
  }

  public render() {
    const { renderDivider, color, title, char, ...rest } = this.props
    const max = this.props.width || this.getMaxWidth()
    const titleWidth = stringWidth(title)
    const availableSpace = max - titleWidth
    const half = Math.floor(availableSpace / 2)

    return <div ref={this.nodeRef}>
      <Box {...rest}>{renderDivider({ color, char, title, half })}</Box>
    </div>
  }

  public getMaxWidth() {
    return this.nodeRef.current
      ? this.nodeRef.current.yogaNode.getComputedWidth()
      : process.stdout.columns
  }
}