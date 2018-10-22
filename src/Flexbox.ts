export interface FlexBoxProps {
  margin: number
  marginX: number
  marginY: number
  marginTop: number
  marginBottom: number
  marginLeft: number
  marginRight: number
  padding: number
  paddingX: number
  paddingY: number
  paddingTop: number
  paddingBottom: number
  paddingLeft: number
  paddingRight: number
  width: number
  height: number
  flexGrow: number
  flexShrink: number
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  alignItems: 'flex-start' | 'center' | 'flex-end'
  justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
}