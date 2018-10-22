import React, { Component } from 'react'
import { Box, Color } from 'ink'
import { FlexBoxProps } from './Flexbox'
import { Colors, colorToObject } from './Colors'

export const defaultDividerRenderer = ({ color, title }) =>
  <Color {...colorToObject(color)}>
    <Box>{title}</Box>
  </Color>

const defaultProps = {
  renderDivider: defaultDividerRenderer
}

type DefaultProps = typeof defaultProps

interface Props extends DefaultProps, Partial<FlexBoxProps> {
  color?: Colors,
  title?: string
}

export class Divider extends Component<Props> {
  public static defaultProps = defaultProps

  public render() {
    const { renderDivider, color, title, ...rest } = this.props
    return <Box {...rest}>{renderDivider({ color, title })}</Box>
  }
}