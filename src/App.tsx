import { Button } from '@/components/ui/button'
import { FiLogOut } from 'react-icons/fi'

import s from './components/ui/button/button.module.scss'

export function App() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      {/*<Button as={'div'}>Normal Button</Button>*/}
      <Button as={'a'} href={'https://google.com'}>
        Link that looks a button
      </Button>
      <Button disabled={false} fullWidth={false} variant={'primary'}>
        <FiLogOut className={s.icon} />
        Primary button
      </Button>
      <Button variant={'secondary'}>Secondary button</Button>
    </div>
  )
}
