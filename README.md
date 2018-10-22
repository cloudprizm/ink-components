# `@hungry/ink-components`

CLI components for [ink](https://github.com/vadimdemedes/ink) - `v2` written in typescript.
Part of [`@hungry/webpack-parallel`](https://github.com/hungry-consulting/webpack-parallel).

## Component List
Each component follow `renderFunction` convention. 
There are appropriate typings for `FlexBox` and `Colors`.

### `ProgressBar`
```
  <ProgressBar percent={d.percent} />
```

### `Divider`
```
  <Divider
    color="green"
    title="super awesome"
    padding={0}
    alignItems="center"
    justifyContent="space-around"
    flexGrow={1}
  />
```

## Caveats
This is very early stage.
