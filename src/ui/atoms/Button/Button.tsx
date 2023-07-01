import { css } from '../../../styled-system/css'


type Props = {
  label : string
}

const Button = (props : Props) => {
  return (
    <button className={css({backgroundColor: 'red'})}>{props.label}</button>
  )
}

export default Button
