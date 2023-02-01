import React from 'react'
//@ts-ignore
const Input = () => {
    const [value, setValue] = React.useState('value')
    const inputRef = React.useRef<HTMLInputElement>(null)
    const onIconClick = () => {
      setTimeout(() => inputRef.current?.focus(), 0)
      alert('Icon Click Callback')
    }
    return (
      <Input
      //@ts-ignore
        type={'text'}
        placeholder={'placeholder'}
        //@ts-ignore
        onChange={e => setValue(e.target.value)}
        icon={'CurrencyIcon'}
        value={value}
        name={'name'}
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'}
        extraClass="ml-1"
      />
    )
  }

export default Input
