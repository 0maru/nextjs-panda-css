import { css } from '../styled-system/css'
import Button from '../ui/atoms/Button/Button'

export default function Home() {
  return (
    <main>
      <div className={css({
        fontSize: '2xl',
        fontWeight: 'bold',
      })}>test
      </div>
      <Button />
    </main>
  )
}
