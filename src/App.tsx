import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input/input'
import { FiLogOut } from 'react-icons/fi'

import s from './components/ui/button/button.module.scss'

export function App() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      {/*<Button as={'div'}>Normal Button</Button>*/}
      <div>
        <Button as={'a'} href={'https://google.com'}>
          Link that looks a button
        </Button>
        <Button disabled={false} fullWidth={false} variant={'primary'}>
          <FiLogOut className={s.icon} />
          Primary button
        </Button>
        <Button variant={'secondary'}>Secondary button</Button>
      </div>

      <div>
        <Input disabled fullWidth={false} label={'Default input'} variant={'default'} />
        <Input disabled={false} fullWidth={false} label={'Default input'} variant={'default'} />
        <Input disabled={false} fullWidth={false} label={'Password input'} variant={'password'} />
        <Input disabled fullWidth={false} label={'Password input'} variant={'password'} />
        <Input fullWidth={false} label={'Password input'} variant={'search'} />
        <Input disabled fullWidth={false} label={'Password input'} variant={'search'} />

      </div>
    </div>
  )
}
