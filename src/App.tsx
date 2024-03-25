import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Button as={'div'}>Normal Button</Button>
      <Button as={'a'} href={'https://google.com'}>
        Link that looks a button
      </Button>
      <Button>123</Button>
    </div>
  )
}
